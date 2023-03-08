import React, { useEffect } from 'react';
import useHeader from '@src/hooks/useHeader';
import { MenuList, checkIsAnchorMenu } from '../Header';
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
  menuList: MenuList;
  isMenuShown: MenuType;
  handleHeaderToggleButton: () => void;
}

function HeaderMenu({ menuList, isMenuShown, handleHeaderToggleButton }: HeaderMenuProps) {
  useNoScroll(isMenuShown);

  const { handleIsSelected } = useHeader();

  return (
    <S.Root isMenuShown={isMenuShown}>
      <S.MenuWrap>
        <S.ContentsWrap>
          <S.MenuTitlesWrap>
            {menuList.map((menuTap) => {
              if (checkIsAnchorMenu(menuTap)) {
                return (
                  <S.MenuTitle key={menuTap.title} href={menuTap.anchor} target="_blank">
                    {menuTap.title}
                  </S.MenuTitle>
                );
              }
              return (
                <S.MenuTitle
                  key={menuTap.title}
                  href={menuTap.route}
                  isSelected={handleIsSelected(menuTap.route)}
                >
                  {menuTap.title}
                </S.MenuTitle>
              );
            })}
            <S.Background onClick={() => handleHeaderToggleButton()} />
          </S.MenuTitlesWrap>
        </S.ContentsWrap>
      </S.MenuWrap>
    </S.Root>
  );
}

export default HeaderMenu;
