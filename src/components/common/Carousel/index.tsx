import React, { useEffect, useRef, useState } from 'react';
import { CarouselArrowType, CarouselOverflowType } from '@src/lib/types/universal';
import { S } from './style';

interface CarouselProps {
  itemWidth: number;
  stride?: number;
  leftArrowType?: CarouselArrowType;
  rightArrowType?: CarouselArrowType;
  overflowType?: CarouselOverflowType;
  children: JSX.Element[];
}

const SWIPE_THRESHOLD = 50;

export default function Carousel({
  itemWidth,
  stride = 1,
  leftArrowType = CarouselArrowType.External,
  rightArrowType = CarouselArrowType.External,
  overflowType = CarouselOverflowType.Blur,
  children,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [stride, itemWidth]);

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - stride));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(children.length - 1, currentIndex + stride));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = startX - endX;

    if (deltaX > SWIPE_THRESHOLD) {
      handleNext();
    } else if (deltaX < -SWIPE_THRESHOLD) {
      handlePrev();
    }
  };

  const translateX = -currentIndex * itemWidth;

  return (
    <S.Wrapper ref={wrapperRef}>
      {overflowType === CarouselOverflowType.Blur && (
        <>
          <S.LeftBlur />
          <S.RightBlur />
        </>
      )}
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
      {currentIndex !== children.length - stride && (
        <S.RightArrow type={rightArrowType} onClick={handleNext} />
      )}
      <S.DotWrapper>
        {Array.from({ length: Math.ceil(children.length / stride) }).map((dot, index) => (
          <S.Dot
            key={index}
            onClick={() => setCurrentIndex(index * stride)}
            selected={index === Math.floor(currentIndex / stride)}
          />
        ))}
      </S.DotWrapper>
    </S.Wrapper>
  );
}
