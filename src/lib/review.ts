import { ReviewType, TAB } from '@src/views/ReviewPage/types';
import axios from 'axios';
import qs from 'qs';

const client = axios.create({
  baseURL: 'https://api-dev.sopt.org',
  timeout: 3000,
});

export const getReviews = async (tab: TAB): Promise<ReviewType[]> => {
  const partParameter = tab === TAB.ALL ? {} : { part: tab };
  const pageParameter = { pageNo: 1, limit: '120' };
  const parameter = qs.stringify({ ...partParameter, ...pageParameter });

  const { data } = await client.get(`/reviews?${parameter}`);
  return data.data;
};
