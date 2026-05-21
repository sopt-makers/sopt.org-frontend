import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useIsDesktopLarge } from '@src/hooks/useDevice';
import {
  getDefaultViewportStyle,
  getDefaultViewportTrackX,
  getFullViewportStyle,
  getFullViewportTrackX,
} from '@src/views/MainPage/utils/carousel';

interface UseCarouselLayoutParams {
  currentSlide: number;
  slideCount: number;
}

const useCarouselLayout = ({ currentSlide, slideCount }: UseCarouselLayoutParams) => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [carouselLeftMargin, setCarouselLeftMargin] = useState(0);
  const [slideOffsets, setSlideOffsets] = useState<number[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const isDesktopLarge = useIsDesktopLarge();

  useLayoutEffect(() => {
    const container = containerRef.current;
    const carousel = carouselRef.current;

    if (!container || !carousel) return;

    const updateLayout = () => {
      setCarouselLeftMargin(container.getBoundingClientRect().left);
      setViewportWidth(window.innerWidth);
      setCarouselWidth(carousel.clientWidth);

      const slides = carousel.querySelectorAll<HTMLElement>('[data-carousel-track] > *');
      setSlideOffsets(Array.from(slides, (slide) => slide.offsetLeft));
    };

    updateLayout();

    const resizeObserver = new ResizeObserver(updateLayout);
    resizeObserver.observe(container);
    resizeObserver.observe(carousel);
    window.addEventListener('resize', updateLayout);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  const trackX = isDesktopLarge
    ? getFullViewportTrackX(currentSlide, viewportWidth, slideCount, carouselLeftMargin)
    : getDefaultViewportTrackX(currentSlide, slideOffsets);

  const carouselLayoutStyle = useMemo(
    () =>
      isDesktopLarge
        ? getFullViewportStyle(viewportWidth, carouselLeftMargin)
        : getDefaultViewportStyle(carouselWidth),
    [isDesktopLarge, viewportWidth, carouselLeftMargin, carouselWidth],
  );

  return {
    containerRef,
    carouselRef,
    trackX,
    carouselLayoutStyle,
  };
};

export default useCarouselLayout;
