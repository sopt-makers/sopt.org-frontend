import { useLayoutEffect, useRef, useState } from 'react';

const useCarouselLayout = () => {
  const [slideOffsets, setSlideOffsets] = useState<number[]>([]);

  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateLayout = () => {
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

  return {
    carouselRef,
    trackRef,
    slideOffsets,
  };
};

export default useCarouselLayout;
