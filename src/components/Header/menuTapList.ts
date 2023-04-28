import { MenuTapList, MenuTapType } from './types';

export const menuTapList: MenuTapList = [
  {
    type: MenuTapType.Router,
    title: 'ABOUT',
    href: '/about',
  },
  {
    type: MenuTapType.Router,
    title: '프로젝트',
    href: '/project',
  },
  {
    type: MenuTapType.Router,
    title: '활동후기',
    href: '/review',
  },
  {
    type: MenuTapType.Router,
    title: '문의하기',
    href: '/FAQ',
  },
  {
    type: MenuTapType.Anchor,
    title: '리크루팅',
    href: 'https://sopt-recruiting.web.app/recruiting/apply/yb',
  },
];
