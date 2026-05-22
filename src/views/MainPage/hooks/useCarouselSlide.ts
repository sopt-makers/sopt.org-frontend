import { useState } from 'react';

interface UseCarouselSlideProps {
  slideCount: number;
}

const useCarouselSlide = ({ slideCount }: UseCarouselSlideProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slideCount - 1;

  const onSelect = (index: number) => {
    setCurrentSlide(index);
  };

  const onPrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const onNext = () => {
    setCurrentSlide((prev) => Math.min(slideCount - 1, prev + 1));
  };

  return {
    currentSlide,
    isFirstSlide,
    isLastSlide,
    onSelect,
    onPrev,
    onNext,
  };
};

export default useCarouselSlide;
