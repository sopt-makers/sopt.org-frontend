import { useCallback, useEffect, useRef } from 'react';
import useBooleanState from '@src/hooks/useBooleanState';
import useStackedFetchBase from '@src/hooks/useStackedFetchBase';
import { api } from '@src/lib/api';
import { ExtraPart } from '@src/lib/types/universal';
import useInfiniteScroll from './useInfiniteScroll';

const useFetch = (selected: ExtraPart) => {
  const jobRecordRef = useRef<Record<number, 'QUEUED' | 'DONE'>>({});
  const isIncrementable = () =>
    Object.values(jobRecordRef.current).every((value) => value === 'DONE');

  const { ref, count, setCount } = useInfiniteScroll(isIncrementable);
  const [canGetMoreReviews, setCanGetMoreReviews, setCanNotGetMoreReviews] = useBooleanState(true);

  useEffect(() => {
    jobRecordRef.current[count] = 'QUEUED';
  }, [count]);

  useEffect(() => {
    function initializeStates() {
      setCount(1);
      setCanGetMoreReviews();
      for (const key in jobRecordRef.current) {
        if (Object.hasOwnProperty.call(jobRecordRef.current, key)) {
          delete jobRecordRef.current[key];
        }
      }
    }
    return () => {
      initializeStates();
    };
  }, [selected, setCanGetMoreReviews, setCount]);

  const willFetch = useCallback(async () => {
    setCanNotGetMoreReviews();
    const response = await api.reviewAPI.getReviews(selected, count);
    response.hasNextPage ? setCanGetMoreReviews() : setCanNotGetMoreReviews();
    jobRecordRef.current[count] = 'DONE';
    return response.reviews;
  }, [selected, count, setCanGetMoreReviews, setCanNotGetMoreReviews]);
  const state = useStackedFetchBase(willFetch, count === 1);

  return { state, ref, canGetMoreReviews };
};

export default useFetch;
