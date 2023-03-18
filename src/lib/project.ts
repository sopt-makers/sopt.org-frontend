import { BASE_URL, DEFAULT_TIMEOUT } from '@src/utils/const/client';
import { ProjectCategoryType } from '@src/views/ProjectPage/lib/constants';
import axios from 'axios';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

export const getProjectDetail = async (projectId: number) => {
  const { data } = await client.get(`/projects/${projectId}`);

  return data;
};

export const getProjectByCategory = async (category: Omit<ProjectCategoryType, 'ALL'>) => {
  const { data } = await client.get(`/projects?filter=${category}`);

  return data;
};

export const getProjectList = async () => {
  const { data } = await client.get('/projects');

  return data;
};
