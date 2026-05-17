export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  desktopLarge: 1260,
} as const;

export const media = {
  mobile: `@media (max-width: ${breakpoints.tablet - 1}px)`,
  tablet: `@media (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px) and (max-width: ${breakpoints.desktopLarge - 1}px)`,
  desktopLarge: `@media (min-width: ${breakpoints.desktopLarge}px)`,
} as const;

export type Breakpoint = keyof typeof media;
