import Link from 'next/link';
import { useEffect } from 'react';
import useHeader from '@src/hooks/useHeader';
import { menuTapList } from '../../constants/menuTapList';
import { MenuState } from '../../types';
import * as S from './style';

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
            {menuTapList.map((menuTap) => (
              <S.MenuTitle
                menuColor={menuTap.type}
                key={menuTap.title}
                isSelected={handleIsSelected(menuTap.href)}
              >
                <Link href={menuTap.href}>{menuTap.title}</Link>
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
