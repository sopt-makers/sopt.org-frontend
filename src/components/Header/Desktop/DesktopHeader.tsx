import styled from '@emotion/styled';
import Link from 'next/link';
import { LOGO_IMAGE_URL } from '@src/assets/sopt/logo';
import useHeader from '@src/hooks/useHeader';
import { menuTapList } from '../menuTapList';
import { MenuTapType } from '../types';

function DesktopHeader() {
  const { handleClickLogo, handleIsSelected } = useHeader();

  return (
    <Wrapper>
      <CenterAligner>
        <Logo onClick={handleClickLogo} />
      </CenterAligner>
      <MenuTitlesWrapper>
        {menuTapList.map(({ type, title, href }) => {
          switch (type) {
            case MenuTapType.Anchor:
              return (
                <MenuTitle key={title}>
                  <MenuTitleAnchor href={href} target="_blank" rel="noreferrer">
                    {title}
                  </MenuTitleAnchor>
                </MenuTitle>
              );
            case MenuTapType.Router:
              return (
                <MenuTitle key={title} isSelected={handleIsSelected(href)}>
                  <Link href={href}>{title}</Link>
                </MenuTitle>
              );
          }
        })}
      </MenuTitlesWrapper>
    </Wrapper>
  );
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

export const Logo = styled.button`
  width: 87px;
  height: 30px;

  background: url(${LOGO_IMAGE_URL}) center no-repeat;
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

export const MenuTitleAnchor = styled(Link)`
  display: block;

  color: inherit;
  text-decoration: none;
`;

export const MenuTitle = styled.div<MenuTitleProps>`
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
