import { BASE_URL, DEFAULT_TIMEOUT } from '@src/utils/const/client';
import axios from 'axios';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

export const getMainLogo = async () => {
  const data = await client.get('/logos');

  return data?.data;
};

export const getCooperationPartner = async () => {
  const data = await client.get('/partners');

  return data?.data;
};

export const getCooperationProject = async () => {
  const data = await client.get('/cooperation-projects');

  return data?.data;
};

export const getHistoryDetailData = async (id: string | string[] | undefined) => {
  const data = await client.get(`/semesters/${id}`);

  return data?.data;
};

export const getAllHistoryData = async (page: number, limit: number) => {
  const data = await client.get(`/semesters?page=${page}&limit=${limit}`);

  return data?.data;
};
