import { useInfiniteQuery } from '@tanstack/react-query';
import { getResponse as getReviewResponse } from '@src/lib/api/remote/review';
import { getResponse as getArticleResponse } from '@src/lib/api/remote/sopticle';
import { BlogResponse, PartCategoryType } from '@src/lib/types/blog';
import { BlogTabType } from '../components/BlogTab/types';

const getTabResponse = (
  selectedTab: BlogTabType,
  generation: number,
  part: PartCategoryType,
  count: number | unknown,
): Promise<BlogResponse> => {
  return selectedTab === 'review'
    ? getReviewResponse(generation, part, count)
    : getArticleResponse(generation, part, count);
};

export const useGetResponse = (
  selectedTab: BlogTabType,
  generation: number,
  part: PartCategoryType,
) => {
  const queryKey = [selectedTab, generation, part];

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<BlogResponse>({
    queryKey,
    queryFn: ({ pageParam }: { pageParam: number | unknown }) =>
      getTabResponse(selectedTab, generation, part, pageParam),
    getNextPageParam: (lastPage) => (lastPage.hasNextPage ? lastPage.currentPage + 1 : undefined),
    initialPageParam: 1,
  });

  return {
    response: data?.pages.flatMap((page) => page.response),
    hasNextPage,
    fetchNextPage,
    isFetching,
  };
};
