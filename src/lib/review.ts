import { ReviewType, TAB } from '@src/views/ReviewPage/types';
import axios from 'axios';
import qs from 'qs';

const client = axios.create({
  baseURL: 'https://api-dev.sopt.org',
  timeout: 3000,
});

export const getReviews = async (
  tab: TAB,
  pageNo = 1,
  setCanGetMoreReviews: () => void,
  setCanNotGetMoreReviews: () => void,
): Promise<ReviewType[]> => {
  const partParameter = tab === TAB.ALL ? {} : { part: tab };
  const pageParameter = { pageNo, limit: 6 };
  const parameter = qs.stringify({ ...partParameter, ...pageParameter });

  setCanNotGetMoreReviews();

  const { data } = await client.get(`/reviews?${parameter}`);

  data.hasNextPage ? setCanGetMoreReviews() : setCanNotGetMoreReviews();

  return data.data;
};

export const getSampleReviews = async (): Promise<ReviewType[]> => {
  const { data } = await client.get('/reviews/random');
  return data;
};
