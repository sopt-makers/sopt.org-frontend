export type MenuState = 'idle' | 'open' | 'close';

export const enum MenuTapType {
  Router = 'ROUTER',
  Anchor = 'ANCHOR',
  Parent = 'PARENT',
}

export type ParentMenuTap = {
  type: MenuTapType.Parent;
  title: string;
  children: SingleMenuTap[];
};

export type SingleMenuTap = {
  type: MenuTapType.Router | MenuTapType.Anchor;
  title: string;
  href: string;
};

export type BaseMenuTap = SingleMenuTap | ParentMenuTap;

export type MenuTapList = BaseMenuTap[];
