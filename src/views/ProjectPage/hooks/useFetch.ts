import { useCallback } from 'react';
import useFetchBase from '@src/hooks/useFetchBase';
import { api } from '@src/lib/api';
import { ProjectCategoryType, ProjectType } from '@src/lib/types/project';
import { sortBy } from '@src/lib/utils/array';

const useFetch = (selected?: ProjectCategoryType, sortProp?: keyof ProjectType) => {
  const willFetch = useCallback(async () => {
    const response = await api.projectAPI.getProjectList(selected);
    if (sortProp) return sortBy<ProjectType>(response.projects, sortProp);
    return response.projects;
  }, [selected, sortProp]);
  const state = useFetchBase(willFetch);
  return state;
};

export default useFetch;
