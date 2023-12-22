import Image from 'next/image';
import { useEffect, useRef } from 'react';
import IcArrowLeft from '@src/assets/icons/ic_arrow_left.svg';
import IcArrowRight from '@src/assets/icons/ic_arrow_right.svg';
import useDrag from '@src/hooks/useDrag';
import useInfiniteCarousel from '@src/hooks/useInfiniteCarousel';
import { tabs as carouselList } from '@src/lib/constants/tabs';
import { TabType } from '@src/lib/types/universal';
import PartButton from '@src/views/MainPage/components/PartConfig/PartButton.tsx';
import PartSlide from '@src/views/MainPage/components/PartConfig/PartSlide';
import Tab from '@src/views/MainPage/components/Tab';
import * as S from './style';

export default function PartConfig() {
  const { dragRef, handleMouseDown, handleMouseMove, initDragging } = useDrag();
  const {
    carouselRef,
    infiniteCarouselList,
    slideIndex,
    handleSelectSlide,
    handleCarouselSwipe,
    handleTouchStart,
    handleTouchEnd,
  } = useInfiniteCarousel<TabType>(carouselList, '(-100% - 20px)');
  const partRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    partRef.current[slideIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
  }, [partRef, slideIndex]);

  return (
    <div>
      <Tab
        tab={'(2) 파트 구성'}
        title={'6개의 파트로 이루어져 있어요.'}
        description={
          'SOPT에서는 기획, 디자인, 개발 등 여러 파트원들이 한 프로젝트에 참여하며\n협업하는 경험을 배울 수 있습니다. 부족해도 괜찮아요, 함께 배우면 되니까요!'
        }
      />
      <S.Wrapper>
        <S.PartConfig>
          <S.ButtonWrapper
            ref={dragRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={initDragging}
            onMouseUp={initDragging}
          >
            <S.PartButtonList>
              {carouselList.map(({ label }, index) => (
                <PartButton
                  ref={(el: HTMLButtonElement) => (partRef.current[index] = el)}
                  key={index}
                  index={index}
                  label={label}
                  isSelected={index === slideIndex}
                  handleSelectPart={handleSelectSlide}
                />
              ))}
            </S.PartButtonList>
          </S.ButtonWrapper>
          <S.CarouselWrapper>
            <S.LeftArrow>
              <Image
                src={IcArrowLeft}
                width="42"
                height="42"
                alt="왼쪽 화살표"
                onClick={() => handleCarouselSwipe(-1)}
              />
            </S.LeftArrow>
            <S.Carousel
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {infiniteCarouselList.map(({ value }, index) => (
                <PartSlide key={index} part={value} />
              ))}
            </S.Carousel>
            <S.RightArrow>
              <Image
                src={IcArrowRight}
                width="42"
                height="42"
                alt="오른쪽 화살표"
                onClick={() => handleCarouselSwipe(1)}
              />
            </S.RightArrow>
          </S.CarouselWrapper>
        </S.PartConfig>
        <S.RequiredAbility href="/recruit#chapter-info">필요 역량이 궁금하다면?</S.RequiredAbility>
      </S.Wrapper>
    </div>
  );
}
