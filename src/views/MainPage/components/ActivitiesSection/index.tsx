import { PointerEvent, useEffect, useRef } from 'react';
import SectionLabel from '@src/components/common/SectionLabel';
import Tab from '@src/components/common/Tab';
import useLoopCarousel from '@src/hooks/useLoopCarousel';
import handleTabKeyDown from '@src/views/MainPage/utils/handleTabKeyDown';
import ActivitiesCard from './ActivitiesCard';
import ArrowButton from './ArrowButton';
import { ACTIVITIES } from './constants';
import * as S from './style';

const TITLE = '매 기수 함께하는 다양한 활동';
const SWIPE_THRESHOLD = 45;

interface ActivitiesSectionProps {
  mainColor: string;
}

const ActivitiesSection = ({ mainColor }: ActivitiesSectionProps) => {
  const { trackRef, position, slides, activeIndex, onPrev, onNext, onSelect, onSelectDot } =
    useLoopCarousel(ACTIVITIES);

  const didSwipeRef = useRef(false);
  const stopTrackingRef = useRef<() => void>();

  useEffect(() => () => stopTrackingRef.current?.(), []);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    stopTrackingRef.current?.();
    didSwipeRef.current = false;
    const start = { x: e.clientX, y: e.clientY };

    const handleUp = (up: globalThis.PointerEvent) => {
      stopTracking();
      const dx = up.clientX - start.x;
      const dy = up.clientY - start.y;
      if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;

      didSwipeRef.current = true;
      if (dx < 0) onNext();
      else onPrev();
    };
    const stopTracking = () => {
      window.removeEventListener('pointerup', handleUp);
      window.removeEventListener('pointercancel', stopTracking);
      stopTrackingRef.current = undefined;
    };

    window.addEventListener('pointerup', handleUp);
    window.addEventListener('pointercancel', stopTracking);
    stopTrackingRef.current = stopTracking;
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    if (!didSwipeRef.current) return;
    didSwipeRef.current = false;
    e.stopPropagation();
  };

  return (
    <S.Root>
      <S.Body>
        <Tab.Container
          selectedTab={ACTIVITIES[activeIndex].ko}
          onSelect={(tab) => onSelectDot(ACTIVITIES.findIndex(({ ko }) => ko === tab))}
        >
          <S.Header>
            <S.Heading>
              <SectionLabel label="Activities" color={mainColor} />
              <S.Title>{TITLE}</S.Title>
            </S.Heading>
            <S.Tabs aria-label="활동 종류" onKeyDown={handleTabKeyDown}>
              {ACTIVITIES.map(({ ko }) => (
                <S.Tab key={ko} value={ko}>
                  {ko}
                </S.Tab>
              ))}
            </S.Tabs>
          </S.Header>
        </Tab.Container>

        <S.Viewport onPointerDown={handlePointerDown} onClickCapture={handleClickCapture}>
          <S.Track ref={trackRef} style={{ '--position': position } as React.CSSProperties}>
            {slides.map(({ item, index, isFeatured, isClone }) => (
              <ActivitiesCard
                key={`${item.type}-${index}`}
                activity={item}
                isActive={isFeatured}
                isClone={isClone}
                mainColor={mainColor}
                onSelect={() => onSelect(index)}
              />
            ))}
          </S.Track>
        </S.Viewport>

        <S.Controls>
          <ArrowButton variant="prev" onClick={onPrev} />
          <ArrowButton variant="next" onClick={onNext} />
        </S.Controls>
      </S.Body>
    </S.Root>
  );
};

export default ActivitiesSection;
