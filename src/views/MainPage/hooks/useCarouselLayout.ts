import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { getCarouselStyle } from '@src/views/MainPage/utils/carousel';

const useCarouselLayout = () => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [slideOffsets, setSlideOffsets] = useState<number[]>([]);

  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateLayout = () => {
      setCarouselWidth(carousel.clientWidth);

      const track = trackRef.current;
      if (track) {
        const slides = track.children as HTMLCollectionOf<HTMLElement>;
        setSlideOffsets(Array.from(slides, (slide) => slide.offsetLeft));
      }
    };

    updateLayout();

    const resizeObserver = new ResizeObserver(updateLayout);
    resizeObserver.observe(carousel);
    window.addEventListener('resize', updateLayout);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  const carouselStyle = useMemo(() => getCarouselStyle(carouselWidth), [carouselWidth]);

  return {
    carouselRef,
    trackRef,
    slideOffsets,
    carouselStyle,
  };
};

export default useCarouselLayout;
