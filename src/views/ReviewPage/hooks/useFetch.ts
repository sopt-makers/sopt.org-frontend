import { useCallback, useEffect } from 'react';
import { getReviews } from '@src/lib/review';
import { TAB } from '../types';
import useInfiniteScroll from './useInfiniteScroll';
import useStackedFetchBase from '@src/hooks/useStackedFetchBase';

const useFetch = (selected: TAB) => {
  const { ref, count, setCount } = useInfiniteScroll();
  
  useEffect(() => {
    setCount(1);
  }, [selected, setCount]);
  
  // TODO :: count 제한하여 패칭 멈추는 동작 필요
  const willFetch = useCallback(() => getReviews(selected, count), [selected, count]);
  const isInitialFetching = count === 1;
  const state = useStackedFetchBase(willFetch, isInitialFetching);

  return { state, ref };
};

export default useFetch;
