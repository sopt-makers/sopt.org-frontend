import { useCallback, useEffect, useRef, useState } from 'react';

type IntersectHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;

const useIntersect = (onIntersect: IntersectHandler, options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('enter');
          onIntersect(entry, observer);
        }
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options, callback]);

  return ref;
};

export function useInfiniteScroll<T>(totalData: T[]) {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(totalData.slice(0, 15));
  const isNextPage = totalData.length > 15 && count <= Math.ceil(totalData.length / 15);

  const ref = useIntersect(
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
