import { useCallback } from 'react';
import useFetchBase from '@src/hooks/useFetchBase';
import { getReviews } from '@src/lib/review';
import { TAB } from '../types';

const useFetch = (selected: TAB) => {
  const willFetch = useCallback(() => getReviews(selected), [selected]);
  const state = useFetchBase(willFetch);
  return state;
};

export default useFetch;
