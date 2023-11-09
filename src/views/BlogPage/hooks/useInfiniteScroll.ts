import { useEffect, useState } from 'react';
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';
import useIntersectionObserver from '@src/hooks/useIntersectionObserver';
import { BlogResponse } from '@src/lib/types/blog';

export default function useInfiniteScroll(fetchNextPage: {
  (options?: FetchNextPageOptions): Promise<InfiniteQueryObserverResult<BlogResponse>>;
  (): void;
}) {
  const [hasObserved, setHasObserved] = useState(false);

  const ref = useIntersectionObserver(
    async (entry, observer) => {
      if (!hasObserved && entry.isIntersecting) {
        fetchNextPage();
        setHasObserved(true);
      }

      observer.unobserve(entry.target);
      setHasObserved(false);
    },
    { rootMargin: '80px' },
  );

  useEffect(() => {
    setHasObserved(false);
  }, []);

  return { ref };
}
