import { useCallback } from 'react';
import useFetchBase from '@src/hooks/useFetchBase';
import { api } from '@src/lib/api';
import { ProjectCategoryType } from '@src/lib/types/project';

const useFetch = (selected: ProjectCategoryType) => {
  const willFetch = useCallback(async () => {
    const response = await api.projectAPI.getProjectList(selected);
    return response.projects;
  }, [selected]);
  const state = useFetchBase(willFetch);
  return state;
};

export default useFetch;
