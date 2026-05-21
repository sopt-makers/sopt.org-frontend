import { CSSProperties } from 'react';

export const getDefaultViewportStyle = (carouselWidth: number): CSSProperties | undefined => {
  if (carouselWidth <= 0) return undefined;
  return { '--carousel-slide-width': `${carouselWidth}px` } as CSSProperties;
};
