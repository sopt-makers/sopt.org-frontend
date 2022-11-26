import axios from 'axios';

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  timeout: 3000,
});

export const getMainLogo = async () => {
  const data = await client.get('/logos');

  return data?.data;
};

export const getPartnersData = async () => {
  const data = await client.get('/history/partners');

  return data?.data;
};

export const getHistoryDetailData = async (id: string | string[] | undefined) => {
  const data = await client.get(`/history/semesters/${id}`);

  return data?.data;
};

export const getAllHistoryData = async (page: number, limit: number) => {
  const data = await client.get(`/history/semesters?page=${page}&limit=${limit}`);

  return data?.data;
};
