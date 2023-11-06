import { useEffect } from 'react';
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';
import useBooleanState from '@src/hooks/useBooleanState';
import useIntersectionObserver from '@src/hooks/useIntersectionObserver';
import { BlogResponse } from '@src/lib/types/blog';

export default function useInfiniteScroll(fetchNextPage: {
  (options?: FetchNextPageOptions): Promise<InfiniteQueryObserverResult<BlogResponse>>;
  (): void;
}) {
  const [hasObserved, setHasObserved, setHasUnObserved] = useBooleanState(false);

  const ref = useIntersectionObserver(
    async (entry, observer) => {
      if (!hasObserved && entry.isIntersecting) {
        fetchNextPage();
        setHasObserved();
      }

      observer.unobserve(entry.target);
      setHasUnObserved();
    },
    { rootMargin: '80px' },
  );

  useEffect(() => {
    setHasUnObserved();
  }, []);

  return { ref };
}
