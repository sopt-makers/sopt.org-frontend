import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const LOOP_COPIES = 3;

const isOutsideMiddle = (position: number, count: number) =>
  position < count || position >= count * 2;

const toMiddle = (position: number, count: number) =>
  count + (((position % count) + count) % count);

const hasTransformTransition = (el: HTMLElement) => {
  const style = getComputedStyle(el);
  const properties = style.transitionProperty.split(',').map((p) => p.trim());
  const durations = style.transitionDuration.split(',').map((d) => parseFloat(d));
  const index = properties.findIndex((p) => p === 'transform' || p === 'all');
  if (index === -1) return false;
  return durations[index % durations.length] > 0;
};

/**
 * 목록을 3벌 이어 붙이고 항상 가운데 벌에 머무는 무한 캐러셀 상태.
 * 이동이 끝났을 때 가운데 벌을 벗어났다면 전환 없이 같은 카드의 가운데 벌 위치로 순간 이동한다.
 */
const useLoopCarousel = <T>(items: T[]) => {
  const count = items.length;
  const [position, setPosition] = useState(count);

  const [prevCount, setPrevCount] = useState(count);
  if (count !== prevCount) {
    setPrevCount(count);
    setPosition(count);
  }

  const trackRef = useRef<HTMLDivElement>(null);
  const isMovingRef = useRef(false);
  const jumpFromRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const from = jumpFromRef.current;
    if (from !== null) {
      jumpFromRef.current = null;

      const elements: HTMLElement[] = [track];
      [from, position].forEach((index) => {
        const slide = track.children[index] as HTMLElement | undefined;
        if (slide) elements.push(slide, ...Array.from(slide.querySelectorAll<HTMLElement>('*')));
      });

      elements.forEach((el) => (el.style.transition = 'none'));
      void track.offsetWidth;
      elements.forEach((el) => el.style.removeProperty('transition'));
      return;
    }

    if (isMovingRef.current && !hasTransformTransition(track)) {
      isMovingRef.current = false;
      if (isOutsideMiddle(position, count)) {
        jumpFromRef.current = position;
        setPosition(toMiddle(position, count));
      }
    }
  }, [position, count]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const settle = (e: TransitionEvent) => {
      if (e.target !== track || e.propertyName !== 'transform') return;
      isMovingRef.current = false;

      if (isOutsideMiddle(position, count)) {
        jumpFromRef.current = position;
        setPosition(toMiddle(position, count));
      }
    };

    track.addEventListener('transitionend', settle);
    track.addEventListener('transitioncancel', settle);
    return () => {
      track.removeEventListener('transitionend', settle);
      track.removeEventListener('transitioncancel', settle);
    };
  }, [position, count]);

  const start = (next: number) => {
    isMovingRef.current = true;
    setPosition(next);
  };

  const moveTo = (next: number) => {
    if (count === 0 || isMovingRef.current || next === position) return;
    start(next);
  };

  const selectIndex = (index: number) => {
    const next = count + index;
    if (count === 0 || next === position) return;
    start(next);
  };

  const slides = Array.from({ length: LOOP_COPIES }, () => items)
    .flat()
    .map((item, index) => ({
      item,
      index,
      isFeatured: index === position,
      isClone: isOutsideMiddle(index, count) && index !== position,
    }));

  return {
    trackRef,
    position,
    slides,
    activeIndex: count === 0 ? 0 : position % count,
    onPrev: () => moveTo(position - 1),
    onNext: () => moveTo(position + 1),
    onSelect: moveTo,
    onSelectDot: selectIndex,
  };
};

export default useLoopCarousel;
