import { useEffect, useLayoutEffect, useRef, useState } from 'react';

/**
 * 목록을 3벌 이어 붙이고 항상 가운데 벌에 머무는 무한 캐러셀 상태.
 * 이동이 끝났을 때 가운데 벌을 벗어났다면 전환 없이 같은 카드의 가운데 벌 위치로 순간 이동한다.
 */
const useLoopCarousel = (count: number) => {
  const [position, setPosition] = useState(count);

  const [prevCount, setPrevCount] = useState(count);
  if (count !== prevCount) {
    setPrevCount(count);
    setPosition(count);
  }

  const trackRef = useRef<HTMLDivElement>(null);
  const isMovingRef = useRef(false);
  const isJumpingRef = useRef(false);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!isJumpingRef.current || !track) return;
    isJumpingRef.current = false;

    track.dataset.jumping = '';
    void track.offsetWidth;
    delete track.dataset.jumping;
  }, [position]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const settle = (e: TransitionEvent) => {
      if (e.target !== track || e.propertyName !== 'transform') return;
      isMovingRef.current = false;

      if (position < count || position >= count * 2) {
        isJumpingRef.current = true;
        setPosition(count + (((position % count) + count) % count));
      }
    };

    track.addEventListener('transitionend', settle);
    track.addEventListener('transitioncancel', settle);
    return () => {
      track.removeEventListener('transitionend', settle);
      track.removeEventListener('transitioncancel', settle);
    };
  }, [position, count]);

  const moveTo = (next: number) => {
    if (count === 0 || isMovingRef.current || next === position) return;
    isMovingRef.current = true;
    setPosition(next);
  };

  return {
    trackRef,
    position,
    activeIndex: count === 0 ? 0 : position % count,
    onPrev: () => moveTo(position - 1),
    onNext: () => moveTo(position + 1),
    onSelect: moveTo,
    onSelectDot: (index: number) => moveTo(count + index),
  };
};

export default useLoopCarousel;
