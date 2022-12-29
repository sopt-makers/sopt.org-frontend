import { useMediaQuery } from 'react-responsive';
import DesktopHeader from './Desktop/DesktopHeader';
import MobileHeader from './Mobile/MobileHeader';
import styled from '@emotion/styled';
import { Condition } from '@src/lib';

const menuList = [
  { id: '/project', title: '프로젝트' },
  { id: '/recruit', title: '리크루팅' },
];

export function Header() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <HeaderContainer>
      <Condition statement={isDesktop}>
        <DesktopHeader menuList={menuList} />
      </Condition>
      <Condition statement={!isDesktop}>
        <MobileHeader menuList={menuList} />
      </Condition>
    </HeaderContainer>
  );
}

export const HeaderContainer = styled.header`
  width: 100vw;
  min-height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 100;
  margin: 0 auto;

  background: rgba(24, 24, 24, 0.9);
  backdrop-filter: blur(20px);

  @media (max-width: 1279px) {
    width: calc(100%);
    height: 48px;

    justify-content: space-between;
    padding: 12px 20px;

    /* backdrop-filter: none; */
  }
`;
