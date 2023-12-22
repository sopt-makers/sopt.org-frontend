import Image from 'next/image';
import IcArrowLeft from '@src/assets/icons/ic_arrow_left.svg';
import IcArrowRight from '@src/assets/icons/ic_arrow_right.svg';
import useDrag from '@src/hooks/useDrag';
import useInfiniteCarousel from '@src/hooks/useInfiniteCarousel';
import { Activity } from '@src/lib/constants/main';
import { ActivityTypeList, activity as activityCarouselList } from '@src/lib/types/main';
import Card from '../Card';
import * as S from './style';

export default function MobileCard() {
  const { dragRef, handleMouseDown, handleMouseMove, initDragging } = useDrag();
  const {
    carouselRef,
    infiniteCarouselList,
    slideIndex,
    handleSelectSlide,
    handleCarouselSwipe,
    handleTouchStart,
    handleTouchEnd,
  } = useInfiniteCarousel<ActivityTypeList>(activityCarouselList, '(-100% - 20px)');

  return (
    <S.Container>
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
        <S.Carousel ref={carouselRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {infiniteCarouselList.map(({ value }, index) => {
            const { img, navKor, navEng, description } = Activity[value];
            return (
              <S.Slide key={index}>
                <Card
                  key={navEng}
                  img={img}
                  navKor={navKor}
                  navEng={navEng}
                  description={description}
                />
              </S.Slide>
            );
          })}
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
      <S.RightArrow>
        <Image
          src={IcArrowRight}
          width="42"
          height="42"
          alt="오른쪽 화살표"
          onClick={() => handleCarouselSwipe(1)}
        />
      </S.RightArrow>
      <S.ButtonWrapper
        ref={dragRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={initDragging}
        onMouseUp={initDragging}
      >
        <S.PartButtonList>
          {[0, 1, 2, 3, 4, 5].map((index) => {
            return (
              <S.DotButton
                key={index}
                isSelected={index === slideIndex}
                onClick={() => handleSelectSlide(index)}
              />
            );
          })}
        </S.PartButtonList>
      </S.ButtonWrapper>
    </S.Container>
  );
}
