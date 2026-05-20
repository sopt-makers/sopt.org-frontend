import { PATHS } from '@src/constants/routes';
import { MenuTapList, MenuTapType } from '../types';

export const menuTapList: MenuTapList = [
  {
    type: MenuTapType.DEFAULT,
    title: '소개',
    href: PATHS.ABOUT,
  },
  {
    type: MenuTapType.DEFAULT,
    title: '프로젝트',
    href: PATHS.PROJECT,
  },
  {
    type: MenuTapType.DEFAULT,
    title: '블로그',
    href: PATHS.BLOG,
  },
  {
    type: MenuTapType.DEFAULT,
    title: '후원',
    href: PATHS.SPONSOR,
  },
  {
    type: MenuTapType.SPECIAL,
    title: '지원하기',
    href: PATHS.RECRUIT,
  },
];
