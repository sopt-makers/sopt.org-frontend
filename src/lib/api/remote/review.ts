import { BASE_URL, DEFAULT_TIMEOUT } from '@src/lib/constants/client';
import {
  ActivityType,
  BlogCategoryType,
  BlogResponse,
  PartCategoryType,
} from '@src/lib/types/blog';
import { ReviewAPI } from '@src/lib/types/review';
import axios from 'axios';
import qs from 'qs';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

export const getResponse = async (
  category: BlogCategoryType,
  activity: ActivityType | null,
  generation: number | null,
  part: PartCategoryType | null,
  pageNo: number = 1,
  limit: number = 10,
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
  const { data } = await client.get(`/reviews?${parameter}`);

  return {
    hasNextPage: data.hasNextPage,
    hasPrevPage: data.hasPrevPage,
    response: data.data,
    currentPage: data.currentPage,
    totalPages: data.totalPages,
    totalCount: data.totalCount,
  };
};

export const remoteReviewAPI: ReviewAPI = {
  getResponse,
};
