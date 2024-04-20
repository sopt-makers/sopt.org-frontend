import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import useIntersectionObserver from '@src/hooks/useIntersectionObserver';

export default function useInfiniteScroll(fetchNextPage: {
  (options?: FetchNextPageOptions): Promise<
    InfiniteQueryObserverResult<InfiniteData<unknown, unknown>, Error>
  >;
  (): void;
}) {
  const [hasObserved, setHasObserved] = useState(false);

  const ref = useIntersectionObserver(
    async (entry) => {
      if (!hasObserved && entry.isIntersecting) {
        fetchNextPage();
        setHasObserved(true);
      }

      setHasObserved(false);
    },
    { rootMargin: '80px' },
  );

  useEffect(() => {
    setHasObserved(false);
  }, []);

  return { ref };
}
