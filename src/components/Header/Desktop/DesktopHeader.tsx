import styled from '@emotion/styled';
import Link from 'next/link';
import logoIcon from '@src/assets/sopt/logo.png';
import useHeader from '@src/hooks/useHeader';
import { MenuList, checkIsAnchorMenu } from '../Header';

function DesktopHeader({ menuList }: { menuList: MenuList }) {
  const { handleClickLogo, handleIsSelected } = useHeader();

  return (
    <Wrapper>
      <CenterAligner>
        <Logo src={logoIcon.src} onClick={handleClickLogo} />
      </CenterAligner>
      <MenuTitlesWrapper>
        {menuList.map((menuTap) => {
          if (checkIsAnchorMenu(menuTap)) {
            return (
              <MenuTitle key={menuTap.title}>
                <MenuTitleAnchor href={menuTap.anchor} target="_blank" rel="noreferrer">
                  {menuTap.title}
                </MenuTitleAnchor>
              </MenuTitle>
            );
          }
          return (
            <Link key={menuTap.title} href={menuTap.route}>
              <MenuTitle isSelected={handleIsSelected(menuTap.route)}>{menuTap.title}</MenuTitle>
            </Link>
          );
        })}
      </MenuTitlesWrapper>
    </Wrapper>
  );
}

interface StyleProps {
  src: string;
}

interface MenuTitleProps {
  isSelected?: boolean;
}

export const Wrapper = styled.div`
  max-width: 1280px;
  width: 90%;
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
  margin-left: 100px;

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

export const MenuTitleAnchor = styled.a`
  display: block;

  color: inherit;
  text-decoration: none;
`;

export const MenuTitle = styled.div<MenuTitleProps>`
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
