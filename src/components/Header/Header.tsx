import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import DesktopHeader from './Desktop/DesktopHeader';
import MobileHeader from './Mobile/MobileHeader';
import styles from './header.module.scss';
import { MenuTapList } from './types';

const menuTapList: MenuTapList = [
  { title: '프로젝트', route: '/project' },
  { title: '활동후기', anchor: 'https://sopt-official-review.oopy.io/' },
  { title: '문의하기', route: '/FAQ' },
  {
    title: '리크루팅',
    anchor: 'https://sopt-recruiting.web.app/recruiting/apply/yb',
  },
];

export function Header() {
  const isDesktop = useIsDesktop('992px');
  const isTablet = useIsTablet('766px', '991.9px');
  const isMobile = useIsMobile();

  return (
    <header className={styles.wrapper}>
      {isDesktop && <DesktopHeader menuTapList={menuTapList} />}
      {isTablet && <MobileHeader menuTapList={menuTapList} />}
      {isMobile && <MobileHeader menuTapList={menuTapList} />}
    </header>
  );
}
