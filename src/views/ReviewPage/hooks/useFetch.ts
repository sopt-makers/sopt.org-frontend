import { useCallback, useEffect } from 'react';
import useBooleanState from '@src/hooks/useBooleanState';
import useStackedFetchBase from '@src/hooks/useStackedFetchBase';
import { getReviews } from '@src/lib/review';
import { TAB } from '../types';
import useInfiniteScroll from './useInfiniteScroll';

const useFetch = (selected: TAB) => {
  const { ref, count, setCount } = useInfiniteScroll();
  const [canGetMoreReviews, setCanGetMoreReviews, setCanNotGetMoreReviews] = useBooleanState(true);

  // initialize
  useEffect(() => {
    return () => {
      setCount(1);
      setCanGetMoreReviews();
    };
  }, [selected, setCount, setCanGetMoreReviews]);

  useEffect(() => {
    console.log('selected, count', selected, count);
  }, [selected, count]);

  const willFetch = useCallback(
    () => getReviews(selected, count, setCanGetMoreReviews, setCanNotGetMoreReviews),
    [selected, count, setCanGetMoreReviews, setCanNotGetMoreReviews],
  );
  const state = useStackedFetchBase(willFetch, count === 1);

  return { state, ref, canGetMoreReviews };
};

export default useFetch;
