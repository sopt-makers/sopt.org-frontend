import { useState } from 'react';
import { useRouter } from 'next/router';
import { Condition } from '@src/lib';

import HeaderMenu from './HeaderMenu';

import menuBar from '@src/assets/icons/menuBar.svg';
import xButton from '@src/assets/icons/xButton.png';
import logoIcon from '@src/assets/replaceMe/branding/logo.png';
import styled from '@emotion/styled';
import Image from 'next/image';

export type MenuType = 'idle' | 'open' | 'close';

function MobileHeader() {
  const router = useRouter();
  const [isMenuShown, setIsMenuShown] = useState<MenuType>('idle');

  const handleHeaderToggleButton = () => {
    setIsMenuShown((prev) => (prev === 'open' ? 'close' : 'open'));
  };

  return (
    <>
      <Logo src={logoIcon.src} onClick={() => router.push('/')} />
      <ToggleButton onClick={handleHeaderToggleButton}>
        <Image
          src={isMenuShown === 'open' ? xButton.src : menuBar}
          alt="header toggle button"
          layout="fill"
        />
      </ToggleButton>
      <Condition statement={isMenuShown === 'open'}>
        <HeaderMenu setIsMenuShown={setIsMenuShown} isMenuShown={isMenuShown} />
      </Condition>
    </>
  );
}

interface StyleProps {
  src: string;
}

export const Logo = styled.button<StyleProps>`
  width: 63px;
  height: 21px;
  background: url(${({ src }) => src}) center no-repeat;
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
