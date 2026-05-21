import { useIsDesktopLarge } from '@src/hooks/useDevice';
import { Activity } from '@src/lib/constants/main';
import { activity as activityCarouselList } from '@src/lib/types/main';
import ArrowButton from '@src/views/MainPage/components/Activity/ActivityCarousel/ArrowButton';
import useCarouselLayout from '@src/views/MainPage/hooks/useCarouselLayout';
import useSlideIndex from '@src/views/MainPage/hooks/useSlideIndex';
import ActivityCard from './ActivityCard';
import * as S from './style';

const SLIDE_TRANSITION = {
  type: 'spring' as const,
  stiffness: 200,
  damping: 20,
};

export default function ActivityCarousel() {
  const isDesktopLarge = useIsDesktopLarge();

  const { currentSlide, isFirstSlide, isLastSlide, selectSlide, onPrev, onNext } = useSlideIndex({
    slideCount: activityCarouselList.length,
  });

  const { containerRef, carouselRef, trackX, carouselLayoutStyle } = useCarouselLayout({
    isDesktopLarge,
    currentSlide,
    slideCount: activityCarouselList.length,
  });

  const tabItems = activityCarouselList.map(({ value }) => Activity[value].navKor);
  const currentTabLabel = tabItems[currentSlide];

  const handleTabChange = (selected: string) => {
    selectSlide(tabItems.indexOf(selected));
  };

  const handleSlideClick = (index: number) => {
    if (index === currentSlide) return;
    selectSlide(index);
  };

  return (
    <S.Container ref={containerRef}>
      <S.TabContainer
        key={currentSlide}
        style="primary"
        size="md"
        selectedInitial={currentTabLabel}
        tabItems={tabItems}
        onChange={handleTabChange}
      />

      <S.CarouselWrapper ref={carouselRef} style={carouselLayoutStyle}>
        <S.Track data-carousel-track animate={{ x: trackX }} transition={SLIDE_TRANSITION}>
          {activityCarouselList.map(({ value }, index) => (
            <S.Slide
              key={value}
              $isActive={index === currentSlide}
              onClick={() => handleSlideClick(index)}
            >
              <ActivityCard {...Activity[value]} />
            </S.Slide>
          ))}
        </S.Track>
      </S.CarouselWrapper>

      <S.ArrowLayout>
        <ArrowButton variant="prev" disabled={isFirstSlide} onClick={onPrev} />
        <ArrowButton variant="next" disabled={isLastSlide} onClick={onNext} />
      </S.ArrowLayout>
    </S.Container>
  );
}
