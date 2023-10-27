import { BASE_URL, DEFAULT_TIMEOUT } from '@src/lib/constants/client';
import { PartCategoryType } from '@src/lib/types/blog';
import axios from 'axios';
import qs from 'qs';
import { GetReviewsResponse, GetSampleReviewsResponse, ReviewAPI } from '../../types/review';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

const getResponse = async (
  majorTab: number,
  subTab: PartCategoryType,
  pageNo = 1,
): Promise<GetReviewsResponse> => {
  const generationParameter = majorTab === 0 ? {} : { generation: majorTab };
  const partParameter = subTab === PartCategoryType.ALL ? {} : { part: subTab };
  const pageParameter = { pageNo, limit: 6 };
  const parameter = qs.stringify({ ...partParameter, ...pageParameter, ...generationParameter });

  const { data } = await client.get(`/reviews?${parameter}`);

  return { hasNextPage: data.hasNextPage, response: data.data };
};

const getSampleReviews = async (): Promise<GetSampleReviewsResponse> => {
  const { data } = await client.get('/reviews/random');
  return { reviews: data };
};

export const remoteReviewAPI: ReviewAPI = {
  getResponse,
  getSampleReviews,
};
