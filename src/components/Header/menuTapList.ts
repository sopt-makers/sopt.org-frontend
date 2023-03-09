import { MenuTapList, MenuTapType } from './types';

export const menuTapList: MenuTapList = [
  {
    type: MenuTapType.Router,
    title: '프로젝트',
    route: '/project',
  },
  {
    type: MenuTapType.Anchor,
    title: '활동후기',
    anchor: 'https://sopt-official-review.oopy.io/',
  },
  {
    type: MenuTapType.Router,
    title: '문의하기',
    route: '/FAQ',
  },
  {
    type: MenuTapType.Anchor,
    title: '리크루팅',
    anchor: 'https://sopt-recruiting.web.app/recruiting/apply/yb',
  },
];
