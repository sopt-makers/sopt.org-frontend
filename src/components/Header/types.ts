export type MenuState = 'idle' | 'open' | 'close';

export const enum MenuTapType {
  Router = 'ROUTER',
  Anchor = 'ANCHOR',
};

interface BaseMenuTap {
  type: MenuTapType;
  title: string;
  href: string;
}

export type MenuTapList = BaseMenuTap[];
