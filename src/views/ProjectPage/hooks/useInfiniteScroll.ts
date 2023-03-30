import useIntersectionObserver from '@src/hooks/useIntersectionObserver';
import { useState } from 'react';

export function useInfiniteScroll<T>(totalData: T[]) {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(totalData.slice(0, 15));
  const isNextPage = totalData.length > 15 && count <= Math.ceil(totalData.length / 15);

  const ref = useIntersectionObserver(
    async (entry, observer) => {
      if (isNextPage) {
        setTimeout(() => {
          setCount(count + 1);
          setData(totalData.slice(0, count * 15));
        }, 600);
      }
      observer.unobserve(entry.target);
    },
    { threshold: 0.25, rootMargin: '80px' },
  );

  return { data, isNextPage, ref };
}
