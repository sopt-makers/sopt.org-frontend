import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { getDefaultViewportStyle } from '@src/views/MainPage/utils/carousel';

const useCarouselLayout = () => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [slideOffsets, setSlideOffsets] = useState<number[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const carousel = carouselRef.current;

    if (!container || !carousel) return;

    const updateLayout = () => {
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

  const carouselLayoutStyle = useMemo(
    () => getDefaultViewportStyle(carouselWidth),
    [carouselWidth],
  );

  return {
    containerRef,
    carouselRef,
    slideOffsets,
    carouselLayoutStyle,
  };
};

export default useCarouselLayout;
