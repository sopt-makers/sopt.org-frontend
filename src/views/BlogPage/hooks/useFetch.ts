import { useCallback, useEffect } from 'react';
import useBooleanState from '@src/hooks/useBooleanState';
import useStackedFetchBase from '@src/hooks/useStackedFetchBase';
import { api } from '@src/lib/api';
import { PartCategoryType } from '@src/lib/types/blog';
import { BlogTabType } from '../components/BlogTab/types';
import useInfiniteScroll from './useInfiniteScroll';

interface useFetchProps {
  selectedTab: BlogTabType;
  selectedMajorCategory: number;
  selectedSubCategory: PartCategoryType;
}

const useFetch = ({
  selectedTab,
  selectedMajorCategory: generation,
  selectedSubCategory: part,
}: useFetchProps) => {
  const tabAPI = selectedTab === 'review' ? 'reviewAPI' : 'sopticleAPI';
  const [canGetMoreResponse, setCanGetMoreResponse, setCanNotGetMoreResponse] =
    useBooleanState(true);
  const [isLoading, setIsLoading, setIsNotLoading] = useBooleanState(false);
  const { ref, count, setCount } = useInfiniteScroll(isLoading);

  useEffect(() => {
    function initializeStates() {
      setCount(1);
      setCanGetMoreResponse();
    }
    return () => {
      initializeStates();
    };
  }, [tabAPI, generation, part]);

  const willFetch = useCallback(async () => {
    setIsLoading();
    setCanNotGetMoreResponse();

    const response = await api[tabAPI]?.getResponse(generation, part, count);
    // nextpage가 있을 때에만 추가로 response 받아오기
    response.hasNextPage ? setCanGetMoreResponse() : setCanNotGetMoreResponse();

    setIsNotLoading();
    return response.response;
  }, [tabAPI, part, generation, count, setCanGetMoreResponse, setCanNotGetMoreResponse]);

  const state = useStackedFetchBase(willFetch, count === 1);

  return { state, ref, canGetMoreResponse };
};

export default useFetch;
