import { useCallback } from 'react';
import useFetchBase from '@src/hooks/useFetchBase';
import { api } from '@src/lib/api';
import { ProjectCategoryType, ProjectPlatformType, ProjectType } from '@src/lib/types/project';
import { sortBy } from '@src/lib/utils/array';

const useFetch = (
  selectedCategory: ProjectCategoryType,
  selectedPlatform: ProjectPlatformType = ProjectPlatformType.ALL,
  sortProp?: keyof ProjectType,
) => {
  const willFetch = useCallback(async () => {
    const response = await api.projectAPI.getProjectList(selectedCategory, selectedPlatform);
    if (sortProp) return sortBy<ProjectType>(response, sortProp);
    return response;
  }, [selectedCategory, selectedPlatform, sortProp]);

  const state = useFetchBase(willFetch);
  return state;
};

export default useFetch;
