import { useState } from 'react';
import useInfiniteCarousel from '@src/hooks/useInfiniteCarousel';
import { tabs as carouselList } from '@src/lib/constants/tabs';
import { TabType } from '@src/lib/types/universal';
import PartButton from '@src/views/MainPage/components/PartConfig/PartButton.tsx';
import PartSlide from '@src/views/MainPage/components/PartConfig/PartSlide';
import Tab from '@src/views/MainPage/components/Tab';
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
    <S.Background>
      <Tab
        tab={'(2) 파트 구성'}
        title={'6개의 파트로 이루어져 있어요.'}
        description={
          'SOPT에서는 기획, 디자인, 개발 등 여러 파트원들이 한 프로젝트에 참여하며\n협업하는 경험을 배울 수 있습니다. 부족해도 괜찮아요, 함께 배우면 되니까요!'
        }
      />
      <S.Wrapper>
        <S.PartConfig>
          <S.ButtonWrapper>
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
          </S.ButtonWrapper>
          <S.CarouselWrapper>
            <S.Carousel ref={carouselRef}>
              {infiniteCarouselList.map(({ value }, index) => (
                <PartSlide key={index} part={value} handleCarouselSwipe={handleCarouselSwipe} />
              ))}
            </S.Carousel>
          </S.CarouselWrapper>
        </S.PartConfig>
        <S.RequiredAbility href="/recruit#chapter-info">필요 역량이 궁금하다면?</S.RequiredAbility>
      </S.Wrapper>
    </S.Background>
  );
}
