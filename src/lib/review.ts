import { ReviewType, TAB } from '@src/views/ReviewPage/types';
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api-dev.sopt.org',
  timeout: 3000,
});

export const getReviews = async (tab: TAB): Promise<ReviewType[]> => {
  const parameter = tab === TAB.ALL ? '' : `?part=${tab}`;
  const { data } = await client.get(`/reviews${parameter}`);
  return data.data;
};

export const getSampleReviews = async (): Promise<ReviewType[]> => {
  const { data } = await client.get('/reviews/random');
  return data;
};
