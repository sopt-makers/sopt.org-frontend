import React, { useEffect } from 'react';
import useHeader from '@src/hooks/useHeader';
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
  menuList: { id: string; title: string }[];
  isMenuShown: MenuType;
  handleHeaderToggleButton: () => void;
}

function HeaderMenu({ menuList, isMenuShown, handleHeaderToggleButton }: HeaderMenuProps) {
  useNoScroll(isMenuShown);

  const { handleClickTap, handleIsSelected } = useHeader();

  return (
    <S.Root isMenuShown={isMenuShown}>
      <S.MenuWrap>
        <S.ContentsWrap>
          <S.MenuTitlesWrap>
            {menuList.map(({ id, title }) => (
              <S.MenuTitle
                key={id}
                id={id}
                isSelected={handleIsSelected(id)}
                onClick={handleClickTap}
              >
                {title}
              </S.MenuTitle>
            ))}
            <S.Background onClick={() => handleHeaderToggleButton()} />
          </S.MenuTitlesWrap>
        </S.ContentsWrap>
      </S.MenuWrap>
    </S.Root>
  );
}

export default HeaderMenu;
