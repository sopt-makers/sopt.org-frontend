import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import menuBar from '@src/assets/icons/menuBar.svg';
import xButton from '@src/assets/icons/xButton.png';
import { LOGO_IMAGE_URL } from '@src/assets/sopt/logo';
import { Condition } from '@src/lib';
import { MenuState } from '../types';
import HeaderMenu from './HeaderMenu';

function MobileHeader() {
  const router = useRouter();
  const [isMenuShown, setIsMenuShown] = useState<MenuState>('idle');

  const handleHeaderToggleButton = () => {
    setIsMenuShown((prev) => (prev === 'open' ? 'close' : 'open'));
  };

  return (
    <>
      <StyledHeader>
        <Logo onClick={() => router.push('/')} />
        <ToggleButton onClick={handleHeaderToggleButton}>
          <Image
            src={isMenuShown === 'open' ? xButton.src : menuBar}
            alt="header toggle button"
            fill
          />
        </ToggleButton>
      </StyledHeader>
      <Condition statement={isMenuShown === 'open'}>
        <HeaderMenu isMenuShown={isMenuShown} handleHeaderToggleButton={handleHeaderToggleButton} />
      </Condition>
    </>
  );
}

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
  background-color: transparent;
`;

export const Logo = styled.button`
  width: 63px;
  height: 21px;
  background: url(${LOGO_IMAGE_URL}) center no-repeat;
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
