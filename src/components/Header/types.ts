export const enum MenuTapType {
  Router = 'ROUTER',
  Anchor = 'ANCHOR',
};

interface BaseMenuTap {
  type: MenuTapType;
  title: string;
}

interface RoutingMenuTap extends BaseMenuTap { type: MenuTapType.Router; route: string };
interface AnchorMenuTap extends BaseMenuTap { type: MenuTapType.Anchor; anchor: string };

export type MenuTapList = Array<RoutingMenuTap | AnchorMenuTap>;
