import { useQuery } from '@tanstack/react-query';
import { getResponse as getReviewResponse } from '@src/lib/api/remote/review';
import { getResponse as getArticleResponse } from '@src/lib/api/remote/sopticle';
import {
  ActivityType,
  BlogCategoryType,
  BlogResponse,
  PartCategoryType,
  SortType,
} from '@src/lib/types/blog';
import { BlogTabType } from '../components/BlogTab/types';

const getTabResponse = (
  selectedTab: BlogTabType,
  generation: number,
  part: PartCategoryType,
  page: number,
  sort: SortType,
): Promise<BlogResponse> => {
  return selectedTab === BlogTabType.REVIEW
    ? getReviewResponse(
        BlogCategoryType.DOCUMENT_INTERVIEW,
        ActivityType.ALL,
        generation,
        part,
        page,
      )
    : getArticleResponse(sort, page);
};

export const useGetResponse = (
  selectedTab: BlogTabType,
  generation: number,
  part: PartCategoryType,
  sort: SortType,
  page: number = 1,
) => {
  const queryKey = [selectedTab, generation, part, sort, page];

  const { data, isFetching } = useQuery<BlogResponse>({
    queryKey,
    queryFn: () => getTabResponse(selectedTab, generation, part, page, sort),
  });

  return {
    response: data,
    isFetching,
  };
};
