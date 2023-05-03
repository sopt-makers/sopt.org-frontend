import { ExtraPart, PartExtraType } from '@src/lib/types/universal';
import { BASE_URL, DEFAULT_TIMEOUT } from '@src/utils/const/client';
import axios from 'axios';
import qs from 'qs';
import { GetReviewsResponse, GetSampleReviewsResponse, ReviewAPI } from '../../types/review';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

const getReviews = async (tab: ExtraPart, pageNo = 1): Promise<GetReviewsResponse> => {
  const partParameter = tab === PartExtraType.ALL ? {} : { part: tab };
  const pageParameter = { pageNo, limit: 6 };
  const parameter = qs.stringify({ ...partParameter, ...pageParameter });

  const { data } = await client.get(`/reviews?${parameter}`);

  return { hasNextPage: data.hasNextPage, reviews: data.data };
};

const getSampleReviews = async (): Promise<GetSampleReviewsResponse> => {
  const { data } = await client.get('/reviews/random');
  return { reviews: data };
};

export const remoteReviewAPI: ReviewAPI = {
  getReviews,
  getSampleReviews,
};
