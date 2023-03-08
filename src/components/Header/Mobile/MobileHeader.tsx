import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import menuBar from '@src/assets/icons/menuBar.svg';
import xButton from '@src/assets/icons/xButton.png';
import logoIcon from '@src/assets/sopt/logo.png';
import { Condition } from '@src/lib';
import { MenuTapList } from '../types';
import HeaderMenu from './HeaderMenu';

export type MenuType = 'idle' | 'open' | 'close';

function MobileHeader({ menuTapList }: { menuTapList: MenuTapList }) {
  const router = useRouter();
  const [isMenuShown, setIsMenuShown] = useState<MenuType>('idle');

  const handleHeaderToggleButton = () => {
    setIsMenuShown((prev) => (prev === 'open' ? 'close' : 'open'));
  };

  return (
    <>
      <StyledHeader>
        <Logo src={logoIcon.src} onClick={() => router.push('/')} />
        <ToggleButton onClick={handleHeaderToggleButton}>
          <Image
            src={isMenuShown === 'open' ? xButton.src : menuBar}
            alt="header toggle button"
            layout="fill"
          />
        </ToggleButton>
      </StyledHeader>
      <Condition statement={isMenuShown === 'open'}>
        <HeaderMenu
          menuTapList={menuTapList}
          isMenuShown={isMenuShown}
          handleHeaderToggleButton={handleHeaderToggleButton}
        />
      </Condition>
    </>
  );
}

interface StyleProps {
  src: string;
}

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
  background-color: transparent;
`;

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
