import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Link from 'next/link';
import { css } from '@emotion/react';
import { imgLogoSopt } from '@src/assets/mainLogo';
import useHeader from '@src/hooks/useHeader';
import { GrowDown } from '@src/lib/styles/animation';
import { menuTapList } from '../menuTapList';
import { MenuTapType } from '../types';

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
            <MenuTitle
              menuColor={menuTap.type}
              key={menuTap.title}
              href={menuTap.href}
              isSelected={handleIsSelected(menuTap.href)}
            >
              {menuTap.title}
            </MenuTitle>
          ))}
        </MenuTitlesWrapper>
      </Wrapper>
    </>
  );
}

interface MenuTitleProps {
  isSelected?: boolean;
  isOpened?: boolean;
  menuColor: MenuTapType;
}

export const Wrapper = styled.div`
  max-width: 1200rem;
  padding: auto 20rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SubMenuWrapper = styled.div`
  width: 100%;
  height: 80rem;
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 80rem;
  ${GrowDown}
  animation: growdown 0.4s forwards;
`;

export const CenterAligner = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.button`
  width: 87rem;
  height: 30rem;

  background: url(${imgLogoSopt.src}) center no-repeat;
  background-size: 100% 100%;
  cursor: pointer;

  @media (max-width: 940px) {
    width: 63rem;
    height: 21rem;
  }
`;

export const MenuTitlesWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuTitle = styled(Link)<MenuTitleProps>`
  font-size: 18rem;
  line-height: 36rem;
  font-weight: ${({ isSelected }) => (isSelected ? '700' : '500')};

  color: ${colors.white};
  cursor: pointer;
  position: relative;

  padding: 0 20rem 0 20rem;

  &:hover {
    &::after {
      content: '';
      position: absolute;
      top: calc(16px * 3.5); /* this is bad practice */
      left: 0;
      width: 100%;
      border-bottom: ${({ menuColor }) =>
        menuColor !== 'SPECIAL' ? `2rem solid ${colors.white}` : 'none'};
    }
  }

  ${({ menuColor }) =>
    menuColor === 'SPECIAL' &&
    css`
      margin-left: 20rem;
      border-radius: 5.869rem;
      border: 1.027rem solid #4786ff;
      background: rgba(71, 134, 255, 0.28);
      color: #267dff;
    `}
`;

export default DesktopHeader;
