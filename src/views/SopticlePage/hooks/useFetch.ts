import { useCallback, useEffect } from 'react';
import useBooleanState from '@src/hooks/useBooleanState';
import useStackedFetchBase from '@src/hooks/useStackedFetchBase';
import { api } from '@src/lib/api';
import { ExtraPart } from '@src/lib/types/universal';
import useInfiniteScroll from './useInfiniteScroll';

const useFetch = (selected: ExtraPart) => {
  const { ref, count, setCount } = useInfiniteScroll();
  const [canGetMoreSopticles, setCanGetMoreSopticles, setCanNotGetMoreSopticles] =
    useBooleanState(true);

  useEffect(() => {
    function initializeStates() {
      setCount(1);
      setCanGetMoreSopticles();
    }
    return () => {
      initializeStates();
    };
  }, [selected, setCanGetMoreSopticles, setCount]);

  const willFetch = useCallback(async () => {
    setCanNotGetMoreSopticles();
    const response = await api.sopticleAPI.getSopticles(selected, count);
    response.hasNextPage ? setCanGetMoreSopticles() : setCanNotGetMoreSopticles();
    return response.sopticles;
  }, [selected, count, setCanGetMoreSopticles, setCanNotGetMoreSopticles]);
  const state = useStackedFetchBase(willFetch, count === 1);

  return { state, ref, canGetMoreSopticles };
};

export default useFetch;
