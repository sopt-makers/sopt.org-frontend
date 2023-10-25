export type MenuState = 'idle' | 'open' | 'close';

export const enum MenuTapType {
  Router = 'ROUTER',
  Anchor = 'ANCHOR',
  Parent = 'PARENT',
}

export type SingleMenuTap = {
  type: MenuTapType.Router | MenuTapType.Anchor;
  title: string;
  href: string;
};

export type MenuTapList = SingleMenuTap[];
