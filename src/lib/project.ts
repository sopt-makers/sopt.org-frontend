import { BASE_URL, DEFAULT_TIMEOUT } from '@src/utils/const/client';
import { ProjectCategoryType } from '@src/views/ProjectPage/lib/constants';
import { ProjectType } from '@src/views/ProjectPage/types';
import axios from 'axios';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

export const getProjectDetail = async (projectId: number) => {
  const { data } = await client.get(`/projects/${projectId}`);

  return data;
};

export const getProjectList = async (category?: ProjectCategoryType): Promise<ProjectType[]> => {
  const queryString = category !== ProjectCategoryType.ALL ? `?filter=${category}` : '';
  const { data } = await client.get(`/projects${queryString}`);
  return data;
};
