export type MenuState = 'idle' | 'open' | 'close';

export const enum MenuTapType {
  DEFAULT = 'DEFAULT',
  SPECIAL = 'SPECIAL',
}

export type SingleMenuTap = {
  type: MenuTapType.DEFAULT | MenuTapType.SPECIAL;
  title: string;
  href: string;
};

export type MenuTapList = SingleMenuTap[];
