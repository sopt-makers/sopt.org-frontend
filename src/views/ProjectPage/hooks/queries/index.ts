import { useQuery } from '@tanstack/react-query';
import { api } from '@src/lib/api';
import { ProjectCategoryType, ProjectPlatformType, ProjectType } from '@src/lib/types/project';
import { sortBy } from '@src/lib/utils/array';

export const useGetProjectList = (
  category: ProjectCategoryType,
  platform: ProjectPlatformType,
  sortType?: string,
) => {
  const queryKey = ['getProjectList', category, platform];

  return useQuery({
    queryKey,
    queryFn: () => api.projectAPI.getProjectList(category, platform),
    select: (data) => (sortType ? sortBy<ProjectType>(data, 'updatedAt') : data),
  });
};
