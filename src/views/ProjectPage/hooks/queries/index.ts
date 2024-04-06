import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '@src/lib/api';
import { ProjectCategoryType, ProjectPlatformType } from '@src/lib/types/project';

export const useGetProjectList = (category: ProjectCategoryType, platform: ProjectPlatformType) => {
  const queryKey = ['getProjectList', category, platform];

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 1 }: { pageParam: number }) =>
      api.projectAPI.getProjectList(category, platform, pageParam),
    getNextPageParam: (lastPage) => (lastPage.hasNextPage ? lastPage.currentPage + 1 : undefined),
  });

  return { data: data?.pages.flatMap((page) => page.data), hasNextPage, fetchNextPage };
};
