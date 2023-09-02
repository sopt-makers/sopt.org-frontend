import styled from '@emotion/styled';
import Link from 'next/link';
import { css } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';
import { LOGO_IMAGE_URL } from '@src/assets/sopt/logo';
import useHeader from '@src/hooks/useHeader';
import { GrowDown } from '@src/lib/styles/animation';
import { menuTapList } from '../menuTapList';
import { BaseMenuTap, MenuTapType, ParentMenuTap } from '../types';

function DesktopHeader() {
  const { handleClickLogo, handleIsSelected } = useHeader();
  const [isSubTapOpened, setIsSubTapOpened] = useState(false);

  return (
    <>
      <Wrapper>
        <CenterAligner>
          <Logo onClick={handleClickLogo} />
        </CenterAligner>
        <MenuTitlesWrapper>
          {menuTapList.map((menuTap) => (
            <MenuTap
              key={menuTap.title}
              menuTap={menuTap}
              handleIsSelected={handleIsSelected}
              isSubTapOpened={isSubTapOpened}
              setIsSubTapOpened={setIsSubTapOpened}
            />
          ))}
        </MenuTitlesWrapper>
      </Wrapper>
      {isSubTapOpened && <SubMenuWrapper />}
    </>
  );
}

type MenuTapProps = {
  menuTap: BaseMenuTap;
  handleIsSelected: (path: string | string[]) => boolean;
  isSubTapOpened: boolean;
  setIsSubTapOpened: (isOpened: boolean) => void;
};

function MenuTap({ menuTap, handleIsSelected, isSubTapOpened, setIsSubTapOpened }: MenuTapProps) {
  switch (menuTap.type) {
    case MenuTapType.Anchor:
      return (
        <MenuTitleAnchor
          href={menuTap.href}
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsSubTapOpened(false)}
          onMouseEnter={() => setIsSubTapOpened(false)}
        >
          {menuTap.title}
        </MenuTitleAnchor>
      );
    case MenuTapType.Router:
      return (
        <MenuTitle
          isSelected={handleIsSelected(menuTap.href)}
          onClick={() => setIsSubTapOpened(false)}
          onMouseEnter={() => setIsSubTapOpened(false)}
        >
          <Link href={menuTap.href}>{menuTap.title}</Link>
        </MenuTitle>
      );
    case MenuTapType.Parent:
      return (
        <ParentMenu
          menuTap={menuTap}
          handleIsSelected={handleIsSelected}
          isSubTapOpened={isSubTapOpened}
          setIsSubTapOpened={setIsSubTapOpened}
        />
      );
  }
}

type ParentMenuProps = {
  menuTap: ParentMenuTap;
  handleIsSelected: (path: string | string[]) => boolean;
  isSubTapOpened: boolean;
  setIsSubTapOpened: (isOpened: boolean) => void;
};

function ParentMenu({
  menuTap,
  handleIsSelected,
  isSubTapOpened,
  setIsSubTapOpened,
}: ParentMenuProps) {
  const [isOpened, setIsOpened] = useState(false);

  const closeSubTap = useCallback(() => {
    setIsSubTapOpened(false);
    setIsOpened(false);
  }, [setIsSubTapOpened, setIsOpened]);

  const onMouseIn = () => {
    setIsSubTapOpened(true);
    setIsOpened(true);
  };

  useEffect(() => {
    if (!isSubTapOpened) {
      setIsOpened(false);
    }
  }, [isSubTapOpened]);

  useEffect(() => {
    if (isSubTapOpened) {
      document.addEventListener('click', closeSubTap);
    }
    return () => {
      document.removeEventListener('click', closeSubTap);
    };
  }, [closeSubTap, isSubTapOpened]);

  return (
    <ParentMenuTitle
      isSelected={handleIsSelected(menuTap.children.map((t) => t.href))}
      isOpened={isOpened}
      onMouseEnter={onMouseIn}
      onClick={(e) => e.stopPropagation()}
    >
      {menuTap.title}
      {isOpened && (
        <SubMenu>
          {menuTap.children.map((c) => {
            switch (c.type) {
              case MenuTapType.Anchor:
                return (
                  <MenuTitle type="sub" key={c.title}>
                    <MenuTitleAnchor href={c.href} target="_blank" rel="noreferrer">
                      {c.title}
                    </MenuTitleAnchor>
                  </MenuTitle>
                );
              case MenuTapType.Router:
                return (
                  <MenuTitle type="sub" isSelected={handleIsSelected(c.href)} key={c.title}>
                    <Link href={c.href}>{c.title}</Link>
                  </MenuTitle>
                );
            }
          })}
        </SubMenu>
      )}
    </ParentMenuTitle>
  );
}

interface MenuTitleProps {
  isSelected?: boolean;
  isOpened?: boolean;
  type?: 'main' | 'sub';
}

export const Wrapper = styled.div`
  max-width: 1280px;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export const SubMenuWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 80px;
  ${GrowDown}
  animation: growdown 0.4s forwards;
`;

const SubMenu = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  top: 80px;
  left: 25%; /* it is bad practice */
  transform: translateX(-50%);

  cursor: default;
`;

export const CenterAligner = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.button`
  width: 87px;
  height: 30px;

  background: url(${LOGO_IMAGE_URL}) center no-repeat;
  background-size: 100% 100%;
  cursor: pointer;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: 63px;
    height: 21px;
  }
`;

export const MenuTitlesWrapper = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

export const MenuTitleAnchor = styled(Link)`
  font-size: 18px;
  height: 100%;
  line-height: 36px;
  font-weight: 500;
  display: block;
  color: inherit;
  text-decoration: none;
  color: white;
  background-color: #504ebf;
  padding: 6px 32px;
  border-radius: 30px;
  &:hover {
    background-color: #413fac;
  }
`;

const menuTitleUnderline = css`
  &::after {
    content: '';
    position: absolute;
    top: 3.5rem; /* this is bad practice */
    left: -20px;
    width: 100%;
    border-bottom: 2px solid white;
  }
  &:last-child {
    &::after {
      width: calc(100% + 40px);
    }
  }
`;

export const MenuTitle = styled.div<MenuTitleProps>`
  font-size: 18px;
  height: 100%;
  line-height: 36px;
  font-weight: ${({ isSelected }) => (isSelected ? '700' : '500')};

  color: ${({ type, isSelected }) =>
    type === 'sub' ? (isSelected ? '#fff' : 'rgba(255, 255, 255, 0.5)') : '#fff'};
  cursor: pointer;
  position: relative;
  ${({ isOpened }) => isOpened && menuTitleUnderline};

  &:not(:last-child) {
    padding-right: 40px;
  }

  &:hover {
    color: #fff;
    ${({ type }) => type !== 'sub' && menuTitleUnderline}
  }
`;

const ParentMenuTitle = styled(MenuTitle)`
  position: relative;
`;

export default DesktopHeader;
