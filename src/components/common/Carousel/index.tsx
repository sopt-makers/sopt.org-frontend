import React, { useEffect, useRef, useState } from 'react';
import { CarouselArrowType, CarouselOverflowType } from '@src/lib/types/universal';
import { S } from './style';

interface CarouselProps {
  itemWidth: number;
  gapWidth: number;
  stride?: number;
  leftArrowType?: CarouselArrowType;
  rightArrowType?: CarouselArrowType;
  overflowType?: CarouselOverflowType;
  isDesktop?: boolean;
  children: JSX.Element[];
}

const SWIPE_THRESHOLD = 50;

export default function Carousel({
  itemWidth,
  gapWidth,
  stride = 1,
  isDesktop,
  children,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isSliding, setIsSliding] = useState(false);
  const lastIndex = currentIndex === children.length - 1;

  useEffect(() => {
    setCurrentIndex(0);
  }, [stride, itemWidth]);

  const handleSlideStatus = () => {
    setIsSliding(true);
    setTimeout(() => setIsSliding(false), 300);
  };

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - stride));
    handleSlideStatus();
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(children.length - 1, currentIndex + stride));
    handleSlideStatus();
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

  const translateX = -currentIndex * (itemWidth + gapWidth);

  return (
    <S.Wrapper ref={wrapperRef} isSliding={isSliding} lastIndex={lastIndex}>
      <>
        <S.LeftBlur />
        <S.RightBlur />
      </>
      {currentIndex !== 0 && <S.LeftArrow onClick={handlePrev} />}
      <S.CarouselViewport>
        <S.CarouselWrapper
          translateX={translateX}
          itemWidth={itemWidth}
          itemCount={children.length}
          gapWidth={gapWidth}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {children}
        </S.CarouselWrapper>
      </S.CarouselViewport>
      {currentIndex !== children.length - stride && <S.RightArrow onClick={handleNext} />}
      {isDesktop && (
        <S.DotWrapper>
          {Array.from({ length: Math.ceil(children.length / stride) }).map((dot, index) => (
            <S.Dot
              key={index}
              onClick={() => setCurrentIndex(index * stride)}
              selected={index === Math.floor(currentIndex / stride)}
            />
          ))}
        </S.DotWrapper>
      )}
    </S.Wrapper>
  );
}
