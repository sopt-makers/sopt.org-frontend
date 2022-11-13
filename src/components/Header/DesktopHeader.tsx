import { useRouter } from 'next/router';
import { menuTitle } from '@src/constants/headerMenu';
import styled from '@emotion/styled';
import logoIcon from '@src/assets/replaceMe/branding/logo.png';

function DesktopHeader() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const currentMenu = e.currentTarget.id;

    if (currentMenu === '/recruit') {
      return window.open('https://sopt-recruiting.web.app/recruiting/apply/yb');
    }
    router.push(currentMenu);
  };

  const handleIsSelected = (path: string) => {
    if (path.includes('project') && router.pathname.includes('project')) return true;
    return router.pathname === path;
  };

  return (
    <Wrapper>
      <CenterAligner>
        <Logo src={logoIcon.src} onClick={() => router.push('/')} />
      </CenterAligner>
      <MenuTitlesWrapper>
        {menuTitle.map(({ id, title }) => (
          <MenuTitle key={id} id={id} isSelected={handleIsSelected(id)} onClick={handleClick}>
            {title}
          </MenuTitle>
        ))}
      </MenuTitlesWrapper>
    </Wrapper>
  );
}

interface StyleProps {
  src: string;
}

interface MenuTitleProps {
  isSelected: boolean;
}

export const Wrapper = styled.div`
  max-width: 1188px;
  width: 70%;

  display: flex;
  justify-content: space-between;

  background-color: transparent;
`;

export const CenterAligner = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.button<StyleProps>`
  width: 87px;
  height: 30px;

  background: url(${({ src }) => src}) center no-repeat;
  background-size: 100% 100%;
  cursor: pointer;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: 63px;
    height: 21px;
  }
`;

export const MenuTitlesWrapper = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

export const MenuTitle = styled.a<MenuTitleProps>`
  font-family: 'SUIT';
  font-size: 18px;
  line-height: 36px;
  font-weight: ${({ isSelected }) => (isSelected ? '700' : '500')};

  color: ${({ isSelected }) => (isSelected ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  cursor: pointer;

  &:not(:last-child) {
    padding-right: 40px;
  }
`;

export default DesktopHeader;
