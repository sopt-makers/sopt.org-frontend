import { breakpoints } from '@src/lib/styles/breakpoints';

export const MAIN_DESKTOP_MIN = 1280;
export const tablet = `@media (min-width: ${breakpoints.tablet}px) and (max-width: ${
  MAIN_DESKTOP_MIN - 1
}px)`;
export const TABLET_CONTENT_WIDTH = '688px';
