import { useEffect, useState } from 'react';
import useBooleanState from '@src/hooks/useBooleanState';
import useIntersectionObserver from '@src/hooks/useIntersectionObserver';

export default function useInfiniteScroll(isLoading: boolean) {
  const [count, setCount] = useState(1);
  const [hasObserved, setHasObserved, setHasUnObserved] = useBooleanState(false);

  const ref = useIntersectionObserver(
    async (entry, observer) => {
      if (!hasObserved && entry.isIntersecting && !isLoading) {
        setCount((prevCount) => prevCount + 1);
        setHasObserved();
      }

      // 엔트리를 관찰 중단합니다.
      observer.unobserve(entry.target);
    },
    { rootMargin: '80px' },
  );

  useEffect(() => {
    if (!isLoading) {
      setHasUnObserved();
    }
  }, [isLoading]);

  return { ref, count, setCount };
}
