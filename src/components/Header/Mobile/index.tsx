import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import menuBar from '@src/assets/icons/menuBar.svg';
import xButton from '@src/assets/icons/xButton.png';
import { Condition } from '@src/components/common/Condition';
import { MenuState } from '../types';
import HeaderMenu from './HeaderMenu';
import { imgLogoSopt } from '@src/assets/mainLogo';

function MobileHeader() {
  const router = useRouter();
  const [isMenuShown, setIsMenuShown] = useState<MenuState>('idle');

  const handleHeaderToggleButton = () => {
    setIsMenuShown((prev) => (prev === 'open' ? 'close' : 'open'));
  };

  return (
    <>
      <StyledHeader isMenuShown={isMenuShown === 'open'}>
        <Logo onClick={() => router.push('/')} />
        <ToggleButton onClick={handleHeaderToggleButton}>
          <Image src={isMenuShown === 'open' ? xButton.src : menuBar} alt="메뉴 토글 버튼" fill />
        </ToggleButton>
      </StyledHeader>
      <Condition statement={isMenuShown === 'open'}>
        <HeaderMenu isMenuShown={isMenuShown} handleHeaderToggleButton={handleHeaderToggleButton} />
      </Condition>
    </>
  );
}

export const StyledHeader = styled.div<{ isMenuShown: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
  background-color: ${({ isMenuShown }) => (isMenuShown ? colors.gray950 : 'initial')};
  padding: 0 20px;
  height: 100%;
  transition: background-color 0.6s;
`;

export const Logo = styled.button`
  width: 63px;
  height: 21px;
  background: url(${imgLogoSopt.src}) center no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
`;

export const ToggleButton = styled.button`
  position: relative;
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export default MobileHeader;
