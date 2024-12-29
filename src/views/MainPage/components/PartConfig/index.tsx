import Image from 'next/image';
import { Ref, forwardRef, useRef } from 'react';
import IcArrowLeft from '@src/assets/icons/ic_arrow_left.svg';
import IcArrowRight from '@src/assets/icons/ic_arrow_right.svg';
import { useIsMobile } from '@src/hooks/useDevice';
import useDrag from '@src/hooks/useDrag';
import useInfiniteCarousel from '@src/hooks/useInfiniteCarousel';
import { tabs as carouselList } from '@src/lib/constants/tabs';
import { PartIntroType } from '@src/lib/types/admin';
import { TabType } from '@src/lib/types/universal';
import { parseStringToPart } from '@src/lib/utils/parseStringToPart';
import PartButton from '@src/views/MainPage/components/PartConfig/PartButton.tsx';
import PartSlide from '@src/views/MainPage/components/PartConfig/PartSlide';
import Tab from '@src/views/MainPage/components/Tab';
import * as S from './style';

function PartConfig(
  { partIntroduction }: { partIntroduction: PartIntroType[] },
  ref: Ref<HTMLDivElement>,
) {
  const { dragRef, handleMouseDown, handleMouseMove, initDragging } = useDrag();
  const partRef = useRef<HTMLButtonElement[]>([]);
  const {
    carouselRef,
    infiniteCarouselList,
    slideIndex,
    handleSelectSlide,
    handleCarouselSwipe,
    handleTouchStart,
    handleTouchEnd,
  } = useInfiniteCarousel<TabType>(carouselList, '(-100% - 20px)', partRef);
  const isMobileSize = useIsMobile('48rem');
  const tab = isMobileSize ? 'Part' : '';

  // formatter
  const partIntro = Object.fromEntries(
    partIntroduction.map((el) => [parseStringToPart(el.part), el.description]),
  );

  return (
    <S.Wrapper id="part" ref={ref}>
      <Tab
        tab={tab}
        title={'6개의 파트로 이루어져 있어요.'}
        description={
          '솝트에서는 기획, 디자인, 개발 등 여러 파트원들이 한 프로젝트에 참여하며\n협업 경험을 쌓을 수 있어요. 부족해도 괜찮아요, 함께 배우면 되니까요!'
        }
      />
      <S.ContentWrapper>
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
                <PartSlide key={index} part={value} description={partIntro[value]} />
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
        <S.RequiredAbility href="/recruit#chapter-info">
          각 파트에 대해 더 궁금한 점이 있다면?
        </S.RequiredAbility>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default forwardRef(PartConfig);
