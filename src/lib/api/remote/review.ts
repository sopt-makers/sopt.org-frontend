import { BASE_URL, DEFAULT_TIMEOUT } from '@src/lib/constants/client';
import { ExtraPart, PartExtraType } from '@src/lib/types/universal';
import axios from 'axios';
import qs from 'qs';
import { GetReviewsResponse, GetSampleReviewsResponse, ReviewAPI } from '../../types/review';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

const getResponse = async (
  generation = 1,
  tab: ExtraPart,
  pageNo = 1,
): Promise<GetReviewsResponse> => {
  const partParameter = tab === PartExtraType.ALL ? {} : { part: tab };
  const generationParameter = { generation: 30 };
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
