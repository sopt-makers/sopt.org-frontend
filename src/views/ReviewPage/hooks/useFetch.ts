import { useCallback } from 'react';
import { getReviews } from '@src/lib/review';
import { TAB } from '../types';
import useInfiniteScroll from './useInfiniteScroll';
import useStackedFetchBase from '@src/hooks/useStackedFetchBase';

const useFetch = (selected: TAB) => {
  const { ref, count } = useInfiniteScroll();
  const willFetch = useCallback(() => getReviews(selected, count), [selected, count]);
  const state = useStackedFetchBase(willFetch);
  
  return { state, ref };
};

export default useFetch;
