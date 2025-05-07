import { useQuery } from '@tanstack/react-query';
import { getResponse as getReviewResponse } from '@src/lib/api/remote/review';
import { getResponse as getArticleResponse } from '@src/lib/api/remote/sopticle';
import {
  ActivityType,
  BlogCategoryType,
  BlogResponse,
  PartCategoryType,
} from '@src/lib/types/blog';
import { BlogTabType } from '../components/BlogTab/types';

const getTabResponse = (
  selectedTab: BlogTabType,
  generation: number,
  part: PartCategoryType,
  count: number,
): Promise<BlogResponse> => {
  return selectedTab === 'review'
    ? getReviewResponse(
        BlogCategoryType.DOCUMENT_INTERVIEW,
        ActivityType.ALL,
        generation,
        part,
        count,
      )
    : getArticleResponse(generation, part, count);
};

export const useGetResponse = (
  selectedTab: BlogTabType,
  generation: number,
  part: PartCategoryType,
) => {
  const queryKey = [selectedTab, generation, part];

  const { data, isFetching } = useQuery<BlogResponse>({
    queryKey,
    queryFn: () => getTabResponse(selectedTab, generation, part, 1),
  });

  return {
    response: data,
    isFetching,
  };
};
