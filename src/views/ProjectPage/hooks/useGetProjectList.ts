import { useSuspenseQuery } from '@tanstack/react-query';
import { api } from '@src/lib/api';
import {
  ProjectCategoryType,
  ProjectPlatformType,
  ProjectResponse,
} from '@src/lib/types/project';

export const useGetProjectList = (
  category: ProjectCategoryType,
  platform: ProjectPlatformType,
  page = 1,
) => {
  const queryKey = ['getProjectList', category, platform, page];

  const { data } = useSuspenseQuery<ProjectResponse>({
    queryKey,
    queryFn: () => api.projectAPI.getProjectList(category, platform, page),
  });

  return {
    response: data,
  };
};
