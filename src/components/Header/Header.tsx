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
