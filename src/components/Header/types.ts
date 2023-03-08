type RoutingMenu = { title: string; route: string };
type AnchorMenu = { title: string; anchor: string };

export type MenuList = Array<RoutingMenu | AnchorMenu>;

export function checkIsAnchorMenu(menuTap: RoutingMenu | AnchorMenu): menuTap is AnchorMenu {
  if ('anchor' in menuTap) return true;
  return false;
}
