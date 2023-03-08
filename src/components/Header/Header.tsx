import { useIsDesktop, useIsMobile, useIsTablet } from '@src/hooks/useDevice';
import DesktopHeader from './Desktop/DesktopHeader';
import MobileHeader from './Mobile/MobileHeader';
import styles from './header.module.scss';

type RoutingMenu = { title: string; route: string };
type AnchorMenu = { title: string; anchor: string };
export type MenuList = Array<RoutingMenu | AnchorMenu>;
export function checkIsAnchorMenu(menuTap: RoutingMenu | AnchorMenu): menuTap is AnchorMenu {
  if ('anchor' in menuTap) return true;
  return false;
}

const menuList: MenuList = [
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
      {isDesktop && <DesktopHeader menuList={menuList} />}
      {isTablet && <MobileHeader menuList={menuList} />}
      {isMobile && <MobileHeader menuList={menuList} />}
    </header>
  );
}
