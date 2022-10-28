import React, { useEffect, Dispatch, SetStateAction } from 'react';
import xButton from '@src/assets/icons/xButton.png';
import Channels from '@src/components/Footer/Channels';

import { useRouter } from 'next/router';
import { menuTitle } from '@src/constants/headerMenu';

import * as S from './HeaderMenu.style';

type MenuType = 'idle' | 'open' | 'close';

function useNoScroll(isMenuShown: MenuType) {
  useEffect(() => {
    if (isMenuShown === 'open') {
      document.body.style.overflow = 'hidden';
    } else {
      return () => {
        document.body.style.overflow = 'auto';
      };
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuShown]);
}

interface HeaderMenuProps {
  setIsMenuShown: Dispatch<SetStateAction<MenuType>>;
  isMenuShown: MenuType;
}

function HeaderMenu({ setIsMenuShown, isMenuShown }: HeaderMenuProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const currentMenu = e.currentTarget.id;

    if (currentMenu === '/recruit') {
      window.open('https://sopt-recruiting.web.app/recruiting/apply/yb');

      return;
    }
    router.push(currentMenu);
  };

  const handleIsSelected = (path: string) => {
    if (path.includes('project') && router.pathname.includes('project')) return true;
    return router.pathname === path;
  };

  useNoScroll(isMenuShown);

  return (
    <S.Root isMenuShown={isMenuShown}>
      <S.MenuWrap>
        <S.CloseButton
          src={xButton.src}
          onClick={() => setIsMenuShown('close')}
          isMenuShown={isMenuShown}
        />
        <S.ContentsWrap>
          <S.MenuTitlesWrap>
            {menuTitle.map(({ id, title }) => (
              <S.MenuTitle key={id} id={id} isSelected={handleIsSelected(id)} onClick={handleClick}>
                {title}
              </S.MenuTitle>
            ))}
          </S.MenuTitlesWrap>
          <S.BottomWrap>
            <S.Rules id="/rules" onClick={handleClick}>
              SOPT 회칙
            </S.Rules>
            <S.ChannelWrap>
              <S.ChannelTitle>SOPT 채널 바로가기</S.ChannelTitle>
              <Channels />
            </S.ChannelWrap>
          </S.BottomWrap>
        </S.ContentsWrap>
      </S.MenuWrap>
    </S.Root>
  );
}

export default HeaderMenu;
