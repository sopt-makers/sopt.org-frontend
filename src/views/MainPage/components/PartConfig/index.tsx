import { useState } from 'react';
import useInfiniteCarousel from '@src/hooks/useInfiniteCarousel';
import { tabs as carouselList } from '@src/lib/constants/tabs';
import { TabType } from '@src/lib/types/universal';
import PartButton from '@src/views/MainPage/components/PartConfig/PartButton.tsx';
import PartSlide from '@src/views/MainPage/components/PartConfig/PartSlide';
import * as S from './style';

export default function PartConfig() {
  const [partIndex, setPartIndex] = useState(0);
  const { carouselRef, infiniteCarouselList, handleSwipe } = useInfiniteCarousel<TabType>(
    carouselList,
    '(-100% - 20px)',
  );

  const handleSelectPart = (clickedIndex: number) => {
    setPartIndex(clickedIndex);
    handleSwipe(clickedIndex - partIndex);
  };

  const handleCarouselSwipe = (direction: number) => {
    const totalSlide = carouselList.length;
    const newIndex = partIndex + direction;
    if (direction === 1) {
      setPartIndex(newIndex === totalSlide ? 0 : newIndex);
    } else {
      setPartIndex(newIndex === -1 ? totalSlide - 1 : newIndex);
    }
    handleSwipe(direction);
  };

  return (
    <S.PartConfig>
      <S.PartButtonList>
        {carouselList.map(({ label }, index) => (
          <PartButton
            key={index}
            index={index}
            label={label}
            isSelected={index === partIndex}
            handleSelectPart={handleSelectPart}
          />
        ))}
      </S.PartButtonList>
      <S.CarouselWrapper>
        <S.Carousel ref={carouselRef}>
          {infiniteCarouselList.map(({ value }, index) => (
            <PartSlide key={index} part={value} handleCarouselSwipe={handleCarouselSwipe} />
          ))}
        </S.Carousel>
      </S.CarouselWrapper>
    </S.PartConfig>
  );
}
