import Link from 'next/link';
import { useEffect } from 'react';
import useHeader from '@src/hooks/useHeader';
import { menuTapList } from '../menuTapList';
import { BaseMenuTap, MenuState, MenuTapType } from '../types';
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

type MenuTapProps = {
  menuTap: BaseMenuTap;
  handleIsSelected: (path: string) => boolean;
};

function MenuTap({ menuTap, handleIsSelected }: MenuTapProps) {
  switch (menuTap.type) {
    case MenuTapType.Anchor:
      return (
        <S.MenuTitle>
          <S.MenuTitleAnchor href={menuTap.href} target="_blank" rel="noreferrer">
            {menuTap.title}
          </S.MenuTitleAnchor>
        </S.MenuTitle>
      );
    case MenuTapType.Router:
      return (
        <S.MenuTitle isSelected={handleIsSelected(menuTap.href)}>
          <Link href={menuTap.href}>{menuTap.title}</Link>
        </S.MenuTitle>
      );
    case MenuTapType.Parent:
      return (
        <>
          {menuTap.children.map((childMenuTap) => (
            <MenuTap
              key={childMenuTap.title}
              menuTap={childMenuTap}
              handleIsSelected={handleIsSelected}
            />
          ))}
        </>
      );
  }
}

function HeaderMenu({ isMenuShown, handleHeaderToggleButton }: HeaderMenuProps) {
  useNoScroll(isMenuShown);

  const { handleIsSelected } = useHeader();

  return (
    <S.Root isMenuShown={isMenuShown}>
      <S.MenuWrap>
        <S.ContentsWrap>
          <S.MenuTitlesWrap>
            {menuTapList.map((menuTap) => (
              <MenuTap key={menuTap.title} menuTap={menuTap} handleIsSelected={handleIsSelected} />
            ))}
            <S.Background onClick={() => handleHeaderToggleButton()} />
          </S.MenuTitlesWrap>
        </S.ContentsWrap>
      </S.MenuWrap>
    </S.Root>
  );
}

export default HeaderMenu;
