import { useQuery } from 'react-query';
import { api } from '@src/lib/api';
import { ProjectCategoryType, ProjectPlatformType } from '@src/lib/types/project';

export const useGetProjectList = (category: ProjectCategoryType, platform: ProjectPlatformType) => {
  const queryKey = ['getProjectList', category, platform];
  return useQuery(queryKey, () => api.projectAPI.getProjectList(category, platform));
};
