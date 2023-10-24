import React, { useRef, useState } from 'react';
import { CarouselArrowType, CarouselOverflowType } from '@src/lib/types/universal';
import { S } from './style';

interface CarouselProps {
  itemWidth: number;
  leftArrowType?: CarouselArrowType;
  rightArrowType?: CarouselArrowType;
  overflowType?: CarouselOverflowType;
  children: JSX.Element[];
}

const Carousel: React.FC<CarouselProps> = ({
  itemWidth,
  leftArrowType = CarouselArrowType.External,
  rightArrowType = CarouselArrowType.External,
  overflowType = CarouselOverflowType.Blur,
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(children.length - 1, currentIndex + 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = startX - endX;

    if (deltaX > 50) {
      handleNext();
    } else if (deltaX < -50) {
      handlePrev();
    }
  };

  const translateX = -currentIndex * itemWidth;

  return (
    <S.Wrapper ref={wrapperRef}>
      {overflowType === CarouselOverflowType.Blur && <S.RightBlur />}
      {currentIndex !== 0 && <S.LeftArrow type={leftArrowType} onClick={handlePrev} />}
      <S.CarouselViewport>
        <S.CarouselWrapper
          translateX={translateX}
          itemWidth={itemWidth}
          itemCount={children.length}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {children}
        </S.CarouselWrapper>
      </S.CarouselViewport>
      {currentIndex !== children.length - 1 && (
        <S.RightArrow type={rightArrowType} onClick={handleNext} />
      )}
    </S.Wrapper>
  );
};

export default Carousel;
