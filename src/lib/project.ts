import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_END;

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

export const getProjectDetail = async (projectId: number) => {
  const { data } = await client.get(`/projects/${projectId}`);

  return data;
};
