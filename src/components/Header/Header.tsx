import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import DesktopHeader from './Desktop/DesktopHeader';
import MobileHeader from './Mobile/MobileHeader';
import styles from './header.module.scss';

export function Header() {
  const isDesktop = useIsDesktop('992px');
  const isTablet = useIsTablet('766px', '991.9px');
  const isMobile = useIsMobile();

  return (
    <header className={styles.wrapper}>
      {isDesktop && <DesktopHeader />}
      {isTablet && <MobileHeader />}
      {isMobile && <MobileHeader />}
    </header>
  );
}
