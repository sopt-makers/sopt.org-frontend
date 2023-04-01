import { useCallback } from 'react';
import useFetchBase from '@src/hooks/useFetchBase';
import { getProjectList } from '@src/lib/project';
import { ProjectCategoryType } from '../lib/constants';

const useFetch = (selected: ProjectCategoryType) => {
  const willFetch = useCallback(() => getProjectList(selected), [selected]);
  const state = useFetchBase(willFetch);
  return state;
};

export default useFetch;
