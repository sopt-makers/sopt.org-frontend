import { useCallback, useEffect } from 'react';
import useBooleanState from '@src/hooks/useBooleanState';
import useStackedFetchBase from '@src/hooks/useStackedFetchBase';
import { api } from '@src/lib/api';
import { ReviewTabType } from '@src/lib/types/review';
import useInfiniteScroll from './useInfiniteScroll';

const useFetch = (selected: ReviewTabType) => {
  const { ref, count, setCount } = useInfiniteScroll();
  const [canGetMoreReviews, setCanGetMoreReviews, setCanNotGetMoreReviews] = useBooleanState(true);

  // initialize
  useEffect(() => {
    return () => {
      setCount(1);
      setCanGetMoreReviews();
    };
  }, [selected, setCount, setCanGetMoreReviews]);

  const willFetch = useCallback(async () => {
    setCanNotGetMoreReviews();
    const response = await api.reviewAPI.getReviews(selected, count);
    response.hasNextPage ? setCanGetMoreReviews() : setCanNotGetMoreReviews();
    return response.reviews;
  }, [selected, count, setCanGetMoreReviews, setCanNotGetMoreReviews]);
  const state = useStackedFetchBase(willFetch, count === 1);

  return { state, ref, canGetMoreReviews };
};

export default useFetch;
