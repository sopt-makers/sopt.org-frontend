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
    type: MenuTapType.Parent,
    title: '블로그',
    children: [
      {
        type: MenuTapType.Router,
        title: '활동후기',
        href: '/review',
      },
      {
        type: MenuTapType.Router,
        title: '솝티클',
        href: '/sopticle',
      },
    ],
  },
  {
    type: MenuTapType.Router,
    title: '후원',
    href: '/sponsor',
  },
  {
    type: MenuTapType.Anchor,
    title: '지원하기',
    href: 'https://sopt-recruiting.web.app/recruiting/apply/yb',
  },
];
