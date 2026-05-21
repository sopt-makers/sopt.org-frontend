import { CSSProperties } from 'react';
import {
  CAROUSEL_GAP,
  SLIDE_WIDTH,
} from '@src/views/MainPage/components/Activity/ActivityCarousel/style';

const getCurrentSlideX = (
  index: number,
  viewportWidth: number,
  slideCount: number,
  contentLeft: number,
) => {
  if (index === 0) return contentLeft;
  if (index === slideCount - 1) return viewportWidth - contentLeft - SLIDE_WIDTH;

  return (viewportWidth - SLIDE_WIDTH) / 2;
};

export const getDefaultViewportTrackX = (index: number, slideOffsets: number[]) => {
  return -(slideOffsets[index] ?? 0);
};

export const getFullViewportTrackX = (
  index: number,
  viewportWidth: number,
  slideCount: number,
  contentLeft: number,
) => {
  const slideStep = SLIDE_WIDTH + CAROUSEL_GAP;
  const baseTrackX = -index * slideStep;

  if (viewportWidth === 0) {
    return baseTrackX;
  }

  return baseTrackX + getCurrentSlideX(index, viewportWidth, slideCount, contentLeft);
};

// desktop large 반응형: 뷰포트 전체로 캐러셀 확장
export const getFullViewportStyle = (viewportWidth: number, leftMargin: number): CSSProperties => ({
  width: viewportWidth > 0 ? viewportWidth : '100vw',
  marginLeft: leftMargin > 0 ? -leftMargin : undefined,
});

// desktop large 반응형이 아닌 경우: 캐러셀 슬라이드 너비를 캐러셀 너비에 맞춤
export const getDefaultViewportStyle = (carouselWidth: number): CSSProperties | undefined => {
  if (carouselWidth <= 0) return undefined;
  return { '--carousel-slide-width': `${carouselWidth}px` } as CSSProperties;
};
