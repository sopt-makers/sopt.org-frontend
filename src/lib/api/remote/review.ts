import { api } from '@src/lib/api/instance';
import { BlogCategoryType, BlogResponse, PartCategoryType } from '@src/lib/types/blog';
import { ActivitySelectType } from '@src/lib/types/main';
import { GetSampleReviewsResponse, ReviewAPI } from '@src/lib/types/review';
import qs from 'qs';

export const getResponse = async (
  category: BlogCategoryType,
  activity: ActivitySelectType | null,
  generation: number | null,
  part: PartCategoryType | null,
  pageNo = 1,
  limit = 10,
): Promise<BlogResponse> => {
  const parameters = {
    category,
    ...(activity && { activity }),
    ...(generation && { generation }),
    ...(part && part !== PartCategoryType.ALL && { part }),
    pageNo,
    limit,
  };

  const parameter = qs.stringify(parameters);
  const { data } = await api.get(`/reviews?${parameter}`);

  return {
    hasNextPage: data.hasNextPage,
    hasPrevPage: data.hasPrevPage,
    response: data.data,
    isLikedByUser: data.isLikedByUser,
    currentPage: data.currentPage,
    totalPage: data.totalPage,
    totalCount: data.totalCount,
  };
};

const getSampleReviews = async (): Promise<GetSampleReviewsResponse> => {
  const { data } = await api.get('/reviews/random');

  return data;
};

export const remoteReviewAPI: ReviewAPI = {
  getResponse,
  getSampleReviews,
};
