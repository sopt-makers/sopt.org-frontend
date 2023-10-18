import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import DesktopHeader from './Desktop/DesktopHeader';
import MobileHeader from './Mobile/MobileHeader';
import styles from './header.module.scss';

export function Header() {
  const isDesktop = useIsDesktop('940px');
  const isTablet = useIsTablet('768px', '939px');
  const isMobile = useIsMobile();

  return (
    <header className={styles.wrapper}>
      {isDesktop && <DesktopHeader />}
      {isTablet && <MobileHeader />}
      {isMobile && <MobileHeader />}
    </header>
  );
}
