import { useCallback, useEffect } from 'react';
import useBooleanState from '@src/hooks/useBooleanState';
import useStackedFetchBase from '@src/hooks/useStackedFetchBase';
import { api } from '@src/lib/api';
import { ExtraPart } from '@src/lib/types/universal';
import { BlogTabType } from '../components/BlogTab/types';
import useInfiniteScroll from './useInfiniteScroll';

interface useFetchProps {
  selectedTab: BlogTabType;
  selectedMajorCategory: number;
  selectedSubCategory: ExtraPart;
}

const useFetch = ({
  selectedTab,
  selectedMajorCategory: generation,
  selectedSubCategory: part,
}: useFetchProps) => {
  console.log(selectedTab, generation, part);
  const tabAPI = selectedTab === 'review' ? 'reviewAPI' : 'sopticleAPI';
  const { ref, count, setCount } = useInfiniteScroll();
  const [canGetMoreResponse, setCanGetMoreResponse, setCanNotGetMoreSopticles] =
    useBooleanState(true);

  useEffect(() => {
    function initializeStates() {
      setCount(1);
      setCanGetMoreResponse();
    }
    return () => {
      initializeStates();
    };
  }, [generation, setCanGetMoreResponse, setCount]);

  const willFetch = useCallback(async () => {
    setCanNotGetMoreSopticles();
    const response = await api[tabAPI]?.getResponse(generation, part, count);
    response.hasNextPage ? setCanGetMoreResponse() : setCanNotGetMoreSopticles();
    return [response.response];
  }, [tabAPI, part, generation, count, setCanGetMoreResponse, setCanNotGetMoreSopticles]);

  const state = useStackedFetchBase(willFetch, count === 1);

  return { state, ref, canGetMoreResponse };
};

export default useFetch;
