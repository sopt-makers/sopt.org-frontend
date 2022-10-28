import { useState } from 'react';
import { useRouter } from 'next/router';
import { Condition } from '@src/lib';

import HeaderMenu from './HeaderMenu';

import menuBar from '@src/assets/icons/menuBar.svg';
import logoIcon from '@src/assets/replaceMe/branding/logo.png';
import styled from '@emotion/styled';

export type MenuType = 'idle' | 'open' | 'close';

function MobileHeader() {
  const router = useRouter();
  const [isMenuShown, setIsMenuShown] = useState<MenuType>('idle');

  const handleCloseButton = () => {
    setIsMenuShown('open');
  };

  return (
    <>
      <Logo src={logoIcon.src} onClick={() => router.push('/')} />
      <HamburgerBar src={menuBar} onClick={handleCloseButton} />
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
  background: url(${({ src }) => src}) center no-repeat;
  background-size: 100% 100%;
  cursor: pointer;

  width: 125px;
  height: 41px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: 63px;
    height: 21px;
  }
`;

export const HamburgerBar = styled.button<StyleProps>`
  background: url(${(props) => props.src}) center no-repeat;
  background-size: 100% 100%;

  cursor: pointer;
  width: 28px;
  height: 28px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: 22px;
    height: 16px;
  }
`;

export default MobileHeader;
