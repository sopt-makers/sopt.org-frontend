import styled from '@emotion/styled';
import Link from 'next/link';
import { css } from '@emotion/react';
import { LOGO_IMAGE_URL } from '@src/assets/mainLogo/base64_logo';
import useHeader from '@src/hooks/useHeader';
import { GrowDown } from '@src/lib/styles/animation';
import { menuTapList } from '../menuTapList';
import { MenuTapType, SingleMenuTap } from '../types';

function DesktopHeader() {
  const { handleClickLogo, handleIsSelected } = useHeader();

  return (
    <>
      <Wrapper>
        <CenterAligner>
          <Logo onClick={handleClickLogo} />
        </CenterAligner>
        <MenuTitlesWrapper>
          {menuTapList.map((menuTap) => (
            <MenuTap key={menuTap.title} menuTap={menuTap} handleIsSelected={handleIsSelected} />
          ))}
        </MenuTitlesWrapper>
      </Wrapper>
    </>
  );
}

type MenuTapProps = {
  menuTap: SingleMenuTap;
  handleIsSelected: (path: string | string[]) => boolean;
};

function MenuTap({ menuTap, handleIsSelected }: MenuTapProps) {
  switch (menuTap.type) {
    case MenuTapType.Anchor:
      return (
        <MenuTitleAnchor href={menuTap.href} target="_blank" rel="noreferrer">
          {menuTap.title}
        </MenuTitleAnchor>
      );
    case MenuTapType.Router:
      return (
        <MenuTitle isSelected={handleIsSelected(menuTap.href)}>
          <Link href={menuTap.href}>{menuTap.title}</Link>
        </MenuTitle>
      );
  }
}

interface MenuTitleProps {
  isSelected?: boolean;
  isOpened?: boolean;
  type?: 'main' | 'sub';
}

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
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

export default DesktopHeader;
