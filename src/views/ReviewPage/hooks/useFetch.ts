import { useCallback, useEffect } from 'react';
import useBooleanState from '@src/hooks/useBooleanState';
import useStackedFetchBase from '@src/hooks/useStackedFetchBase';
import { getReviews } from '@src/lib/review';
import { TAB } from '../types';
import useInfiniteScroll from './useInfiniteScroll';

const useFetch = (selected: TAB) => {
  const { ref, count, setCount } = useInfiniteScroll();
  const [canGetMoreReviews, setIsStartToGetReviews, setIsEndToGetReviews] = useBooleanState(true);

  // initialize
  useEffect(() => {
    setCount(1);
    setIsStartToGetReviews();
  }, [selected, setCount, setIsStartToGetReviews]);

  const willFetch = useCallback(
    () => getReviews(selected, count, setIsStartToGetReviews, setIsEndToGetReviews),
    [selected, count, setIsStartToGetReviews, setIsEndToGetReviews],
  );
  const state = useStackedFetchBase(willFetch, count === 1);

  return { state, ref, canGetMoreReviews };
};

export default useFetch;
