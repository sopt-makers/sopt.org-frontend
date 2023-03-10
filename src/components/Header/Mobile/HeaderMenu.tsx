import Link from 'next/link';
import { useEffect } from 'react';
import useHeader from '@src/hooks/useHeader';
import { menuTapList } from '../menuTapList';
import { MenuState, MenuTapType } from '../types';
import * as S from './HeaderMenu.style';

function useNoScroll(isMenuShown: MenuState) {
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
  isMenuShown: MenuState;
  handleHeaderToggleButton: () => void;
}

function HeaderMenu({ isMenuShown, handleHeaderToggleButton }: HeaderMenuProps) {
  useNoScroll(isMenuShown);

  const { handleIsSelected } = useHeader();

  return (
    <S.Root isMenuShown={isMenuShown}>
      <S.MenuWrap>
        <S.ContentsWrap>
          <S.MenuTitlesWrap>
            {menuTapList.map(({ type, title, href }) => {
              switch (type) {
                case MenuTapType.Anchor:
                  return (
                    <S.MenuTitle key={title}>
                      <S.MenuTitleAnchor href={href} target="_blank" rel="noreferrer">
                        {title}
                      </S.MenuTitleAnchor>
                    </S.MenuTitle>
                  );
                case MenuTapType.Router:
                  return (
                    <Link key={title} href={href}>
                      <S.MenuTitle isSelected={handleIsSelected(href)}>{title}</S.MenuTitle>
                    </Link>
                  );
              }
            })}
            <S.Background onClick={() => handleHeaderToggleButton()} />
          </S.MenuTitlesWrap>
        </S.ContentsWrap>
      </S.MenuWrap>
    </S.Root>
  );
}

export default HeaderMenu;
