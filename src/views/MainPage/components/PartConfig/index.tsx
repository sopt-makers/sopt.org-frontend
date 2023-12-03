import { useEffect, useRef, useState } from 'react';
import { tabs } from '@src/lib/constants/tabs';
import { Part } from '@src/lib/types/universal';
import PartButton from '@src/views/MainPage/components/PartConfig/PartButton.tsx';
import PartSlide from '@src/views/MainPage/components/PartConfig/PartSlide';
import * as S from './style';

const TOTAL_PART = tabs.length;

export default function PartConfig() {
  const [partIndex, setPartIndex] = useState(1);
  const [selectedPart, setSelectedPart] = useState(Part.PLAN);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleSelectPart = (part: Part) => {
    setSelectedPart(part);
  };

  const [tempList, setTempList] = useState(tabs);

  useEffect(() => {
    const startTab = tabs[0];
    const endTab = tabs[tabs.length - 1];
    const newTabs = [endTab, ...tabs, startTab];
    setTempList(newTabs);
  }, []);

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      setPartIndex(index);
      if (carouselRef.current) {
        carouselRef.current.style.transition = '';
      }
    }, 500);
  };

  const handleSwipe = (direction: number) => {
    const newIndex = partIndex + direction;

    if (newIndex === TOTAL_PART + 1) {
      moveToNthSlide(1);
    } else if (newIndex === 0) {
      moveToNthSlide(TOTAL_PART);
    }
    setPartIndex((prev) => prev + direction);

    if (carouselRef.current) {
      carouselRef.current.style.transition = 'all 0.5s ease-in-out';
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(calc(${partIndex} * (-100vw - 20px)))`;
    }
  }, [partIndex]);

  return (
    <S.PartConfig>
      <S.PartButtonList>
        {tabs.map((part) => (
          <PartButton
            key={part.value}
            part={part}
            isSelected={selectedPart === part.value}
            onSelectPart={handleSelectPart}
          />
        ))}
      </S.PartButtonList>
      <S.CarouselWrapper>
        <S.Carousel ref={carouselRef}>
          {tempList.map((part, index) => (
            <PartSlide key={index} part={part.value} handleSwipe={handleSwipe} />
          ))}
        </S.Carousel>
      </S.CarouselWrapper>
    </S.PartConfig>
  );
}
