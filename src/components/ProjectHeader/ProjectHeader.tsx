import { useRouter } from 'next/router';
import * as S from './ProjectHeader.style';
import logoIcon from '@src/assets/replaceMe/branding/logo.png';
import menuBar from '@src/assets/icons/menuBar.svg';
import { useState } from 'react';
import HeaderMenu from '../common/Header/Menu';
import { useMediaQuery } from 'react-responsive';
import { menuTitle } from '@src/constants/headerMenu';
export type MenuType = 'idle' | 'true' | 'false';

function ProjectHeader() {
  const router = useRouter();
  const [isMenuShown, setIsMenuShown] = useState<MenuType>('idle');
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const currentMenu = e.currentTarget.id;

    if (currentMenu === '/recruit') {
      window.open('https://sopt-recruiting.web.app/recruiting/apply/yb');

      return;
    }
    router.push(currentMenu);
  };

  const handleCloseButton = () => {
    setIsMenuShown('true');
  };

  const handleIsSelected = (path: string) => {
    if (path.includes('project') && router.pathname.includes('project')) return true;
    return router.pathname === path;
  };

  return (
    <S.Header>
      <S.CenterAligner>
        <S.Logo src={logoIcon.src} onClick={() => router.push('/')} />
      </S.CenterAligner>
      {!isDesktop ? (
        <S.HamburgerBar src={menuBar} onClick={handleCloseButton} />
      ) : (
        <S.MenuTitlesWrapper>
          {menuTitle.map(({ id, title }) => (
            <S.MenuTitle key={id} id={id} isSelected={handleIsSelected(id)} onClick={handleClick}>
              {title}
            </S.MenuTitle>
          ))}
        </S.MenuTitlesWrapper>
      )}
      {isMenuShown && <HeaderMenu setIsMenuShown={setIsMenuShown} isMenuShown={isMenuShown} />}
    </S.Header>
  );
}

export default ProjectHeader;
