import { useState } from 'react';
import useIntersectionObserver from '@src/hooks/useIntersectionObserver';

export default function useInfiniteScroll() {
  const [count, setCount] = useState(1);

  const ref = useIntersectionObserver(
    async (entry, observer) => {
      setCount((prevCount) => prevCount + 1);
      observer.unobserve(entry.target);
    },
    { rootMargin: '80px' },
  );

  return { ref, count, setCount };
}
