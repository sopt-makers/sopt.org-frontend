import { MutableRefObject, useEffect, useRef, useState } from 'react';

const SWIPE_THRESHOLD = 50;
const NEXT = 1;
const PREVIOUS = -1;

export type DirectionType = typeof PREVIOUS | typeof NEXT;

const useInfiniteCarousel = <T>(
  carouselList: Array<T>,
  x: string,
  dotRef?: MutableRefObject<HTMLElement[]>,
) => {
  const TOTAL_SLIDE = carouselList.length;
  const [infiniteCarouselList, setInfiniteCarouselList] = useState(carouselList);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const firstSide = carouselList[0];
    const lastSlide = carouselList[TOTAL_SLIDE - 1];
    setInfiniteCarouselList([lastSlide, ...carouselList, firstSide]);
    setCurrentIndex(1);
  }, [carouselList, TOTAL_SLIDE]);

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      setCurrentIndex(index);
      if (carouselRef.current) {
        carouselRef.current.style.transition = '';
      }
    }, 500);
  };

  const handleSwipe = (direction: number) => {
    const newIndex = currentIndex + direction;
    if (newIndex === TOTAL_SLIDE + 1) {
      moveToNthSlide(1);
    } else if (newIndex === 0) {
      moveToNthSlide(TOTAL_SLIDE);
    }
    setCurrentIndex((prev) => prev + direction);

    if (carouselRef.current) {
      carouselRef.current.style.transition = 'all 0.5s ease-in-out';
    }
  };

  const handleSelectSlide = (clickedIndex: number) => {
    setSlideIndex(clickedIndex);
    handleSwipe(clickedIndex - slideIndex);
  };

  const handleCarouselSwipe = (direction: DirectionType) => {
    const totalSlide = carouselList.length;
    const nextIndex = slideIndex + direction;
    let newIndex;
    if (direction === NEXT) {
      newIndex = nextIndex === totalSlide ? 0 : nextIndex;
      setSlideIndex(newIndex);
    } else {
      newIndex = nextIndex === -1 ? totalSlide - 1 : nextIndex;
      setSlideIndex(newIndex);
    }
    handleSwipe(direction);

    if (dotRef) {
      dotRef.current[newIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - endX;
    if (deltaX > SWIPE_THRESHOLD) {
      handleCarouselSwipe(NEXT);
    } else if (deltaX < -SWIPE_THRESHOLD) {
      handleCarouselSwipe(PREVIOUS);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(calc(${currentIndex} * ${x}))`;
    }
  }, [currentIndex, x]);

  return {
    carouselRef,
    infiniteCarouselList,
    slideIndex,
    handleSelectSlide,
    handleCarouselSwipe,
    handleSwipe,
    handleTouchStart,
    handleTouchEnd,
  };
};

export default useInfiniteCarousel;
