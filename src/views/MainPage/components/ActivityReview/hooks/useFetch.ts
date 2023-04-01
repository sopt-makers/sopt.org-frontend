import useFetchBase from '@src/hooks/useFetchBase';
import { getSampleReviews } from '@src/lib/review';
import { useCallback } from 'react';

const useFetch = () => {
  const willFetch = useCallback(() => getSampleReviews(), []);
  const state = useFetchBase(willFetch);
  return state;
};

export default useFetch;
