import styled from '@emotion/styled';
import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import DesktopHeader from './Desktop/DesktopHeader';
import MobileHeader from './Mobile/MobileHeader';
import styles from './header.module.scss';

const menuList = [
  { id: '/project', title: '프로젝트' },
  { id: '/FAQ', title: '문의하기' },
  { id: '/recruit', title: '리크루팅' },
];

export function Header() {
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <header className={styles.wrapper}>
      {isDesktop && <DesktopHeader menuList={menuList} />}
      {isTablet && <MobileHeader menuList={menuList} />}
      {isMobile && <MobileHeader menuList={menuList} />}
    </header>
  );
}

export const HeaderContainer = styled.header`
  width: 100%;
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
    width: 100%;
    height: 48px;

    justify-content: space-between;
    padding: 12px 20px;
  }
`;
