import { useQuery } from '@tanstack/react-query';
import { api } from '@src/lib/api';
import { ProjectCategoryType, ProjectPlatformType } from '@src/lib/types/project';

export default function useGetRelatedProjects(currentId: number) {
  return useQuery({
    queryKey: ['getProjectList', ProjectCategoryType.ALL, ProjectPlatformType.ALL, 1],
    queryFn: () =>
      api.projectAPI.getProjectList(ProjectCategoryType.ALL, ProjectPlatformType.ALL, 1),
    select: (response) => response.data.filter((project) => project.id !== currentId),
  });
}
