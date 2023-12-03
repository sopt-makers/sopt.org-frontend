import { useEffect, useRef, useState } from 'react';

const useInfiniteCarousel = <T>(carouselList: Array<T>, x: string) => {
  const [infiniteCarouselList, setInfiniteCarouselList] = useState(carouselList);
  const [currentIndex, setCurrentIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const TOTAL_SLIDE = carouselList.length;

  useEffect(() => {
    const firstSide = carouselList[0];
    const lastSlide = carouselList[TOTAL_SLIDE - 1];
    setInfiniteCarouselList([lastSlide, ...carouselList, firstSide]);
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

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(calc(${currentIndex} * ${x}))`;
    }
  }, [currentIndex, x]);

  return { carouselRef, infiniteCarouselList, handleSwipe };
};

export default useInfiniteCarousel;
