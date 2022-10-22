import { useRouter } from 'next/router';
import * as S from './ProjectHeader.style';
import logoIcon from '@src/assets/replaceMe/branding/logo.png';

function ProjectHeader() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const currentMenu = e.currentTarget.id;

    if (currentMenu === '/recruit') {
      window.open('https://sopt-recruiting.web.app/recruiting/apply/yb');

      return;
    }
    router.push(currentMenu);
  };

  return (
    <S.Header>
      <S.CenterAligner>
        <S.Logo src={logoIcon.src} onClick={() => router.push('/')} />
      </S.CenterAligner>
      <S.MenuTitlesWrapper>
        <S.MenuTitle id="/about" isSelected={router.pathname === '/about'} onClick={handleClick}>
          SOPT소개
        </S.MenuTitle>
        <S.MenuTitle
          id="/history"
          isSelected={router.pathname === '/history'}
          onClick={handleClick}
        >
          역대기수소개
        </S.MenuTitle>
        <S.MenuTitle
          id="/project"
          isSelected={router.pathname === '/project'}
          onClick={handleClick}
        >
          프로젝트
        </S.MenuTitle>
        <S.MenuTitle
          id="/recruit"
          isSelected={router.pathname === '/recruit'}
          onClick={handleClick}
        >
          신입회원모집
        </S.MenuTitle>
        <S.MenuTitle
          id="/partners"
          isSelected={router.pathname === '/partners'}
          onClick={handleClick}
        >
          협력사
        </S.MenuTitle>
      </S.MenuTitlesWrapper>
    </S.Header>
  );
}

export default ProjectHeader;
