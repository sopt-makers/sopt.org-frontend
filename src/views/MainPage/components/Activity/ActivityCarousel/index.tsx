import { Activity } from '@src/lib/constants/main';
import { activity as activityCarouselList } from '@src/lib/types/main';
import ArrowButton from '@src/views/MainPage/components/Activity/ActivityCarousel/ArrowButton';
import useCarouselLayout from '@src/views/MainPage/hooks/useCarouselLayout';
import useCarouselSlide from '@src/views/MainPage/hooks/useCarouselSlide';
import ActivityCard from './ActivityCard';
import * as S from './style';

const SLIDE_TRANSITION = {
  type: 'spring' as const,
  stiffness: 200,
  damping: 20,
};

const ActivityCarousel = () => {
  const { currentSlide, isFirstSlide, isLastSlide, onSelect, onPrev, onNext } = useCarouselSlide({
    slideCount: activityCarouselList.length,
  });

  const { carouselRef, trackRef, slideOffsets } = useCarouselLayout();

  const tabItems = activityCarouselList.map(({ value }) => Activity[value].navKor);
  const currentTabLabel = tabItems[currentSlide];

  const handleTabChange = (selected: string) => {
    onSelect(tabItems.indexOf(selected));
  };

  const handleSlideClick = (index: number) => {
    if (index === currentSlide) return;

    onSelect(index);
  };

  return (
    <S.Container>
      <S.TabContainer
        key={currentSlide}
        style="primary"
        size="md"
        selectedInitial={currentTabLabel}
        tabItems={tabItems}
        onChange={handleTabChange}
      />

      <S.CarouselWrapper ref={carouselRef}>
        <S.Track
          ref={trackRef}
          animate={{ x: -(slideOffsets[currentSlide] ?? 0) }}
          transition={SLIDE_TRANSITION}
        >
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
};

export default ActivityCarousel;
