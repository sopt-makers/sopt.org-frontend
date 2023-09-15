import { useRef, useState } from 'react';

export function useHorizontalScroll(scrollValue: number, maxMoveValue: number) {
  const [horizontalMoveCount, setHorizontalMoveCount] = useState(0);
  const isLeftScrollable = horizontalMoveCount > 0;
  const isRightScrollable = horizontalMoveCount < maxMoveValue;
  const scrollableRef = useRef<HTMLDivElement>(null);
  const onClickLeftButton = (element: HTMLDivElement | null) => {
    if (element === null || !isLeftScrollable) return;
    element.scrollBy({ left: -scrollValue, behavior: 'smooth' });
    setHorizontalMoveCount((prevCount) => prevCount - 1);
  };

  const onClickRightButton = (element: HTMLDivElement | null) => {
    if (element === null || !isRightScrollable) return;
    element.scrollBy({ left: scrollValue, behavior: 'smooth' });
    setHorizontalMoveCount((prevCount) => prevCount + 1);
  };

  return {
    scrollableRef,
    onClickLeftButton,
    onClickRightButton,
    isLeftScrollable,
    isRightScrollable,
  };
}
