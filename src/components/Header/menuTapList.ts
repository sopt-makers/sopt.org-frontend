import { MenuTapList, MenuTapType } from './types';

export const menuTapList: MenuTapList = [
  {
    type: MenuTapType.DEFAULT,
    title: '소개',
    href: '/about',
  },
  {
    type: MenuTapType.DEFAULT,
    title: '프로젝트',
    href: '/project',
  },
  {
    type: MenuTapType.DEFAULT,
    title: '활동 후기',
    href: '/blog',
  },
  {
    type: MenuTapType.DEFAULT,
    title: '후원',
    href: '/sponsor',
  },
  {
    type: MenuTapType.SPECIAL,
    title: '지원하기',
    href: '/recruit',
  },
];
