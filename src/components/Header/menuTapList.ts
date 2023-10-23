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
    title: '블로그',
    href: '/blog',
  },
  {
    type: MenuTapType.Router,
    title: '후원',
    href: '/sponsor',
  },
  {
    type: MenuTapType.Router,
    title: '리크루팅',
    href: '/recruit',
  },
];
