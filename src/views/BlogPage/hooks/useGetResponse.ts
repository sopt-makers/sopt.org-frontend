import { useQuery } from '@tanstack/react-query';
import { getResponse as getReviewResponse } from '@src/lib/api/remote/review';
import { getResponse as getArticleResponse } from '@src/lib/api/remote/sopticle';
import { BlogCategoryType, BlogResponse, PartCategoryType, SortType } from '@src/lib/types/blog';
import { ActivitySelectType } from '@src/lib/types/main';
import { BlogTabType, SelectedType } from '../components/BlogTab/types';

const getTabResponse = (
  selectedTab: BlogTabType,
  generation: number,
  part: PartCategoryType,
  page: number,
  sort: SortType,
  selected: SelectedType,
): Promise<BlogResponse> => {
  return selectedTab === BlogTabType.REVIEW
    ? getReviewResponse(
        selected.tag === 'recruit'
          ? BlogCategoryType.DOCUMENT_INTERVIEW
          : BlogCategoryType.ALL_ACTIVITIES,
        selected.tag === 'activity' ? selected.selectedActivity : ActivitySelectType.ALL,
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
  page = 1,
  selected: SelectedType,
) => {
  const queryKey = [selectedTab, generation, part, sort, page, selected];

  const { data, isFetching } = useQuery<BlogResponse>({
    queryKey,
    queryFn: () => getTabResponse(selectedTab, generation, part, page, sort, selected),
  });

  return {
    response: data,
    isFetching,
  };
};
