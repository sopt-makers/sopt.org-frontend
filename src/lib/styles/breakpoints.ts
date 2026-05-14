export const breakpoints = {
  mobile: '767px',
  tablet: '1023px',
  desktop: '1260px',
  desktopLarge: '2560px',
} as const;

export type Breakpoint = keyof typeof media;

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktopLarge: `@media (min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.desktopLarge})`,
} as const;
