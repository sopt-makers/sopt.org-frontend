import { BASE_URL, DEFAULT_TIMEOUT } from '@src/lib/constants/client';
import axios from 'axios';
import {
  GetProjectDetailResponse,
  GetProjectListResponse,
  ProjectAPI,
  ProjectCategoryType,
} from '../../types/project';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

const getProjectDetail = async (projectId: number): Promise<GetProjectDetailResponse> => {
  const { data } = await client.get(`/projects/${projectId}`);
  const dataServiceType = data.serviceType;

  const serviceType = Array.isArray(dataServiceType) ? dataServiceType : [dataServiceType];

  return { project: { ...data, serviceType } };
};

const getProjectList = async (category?: ProjectCategoryType): Promise<GetProjectListResponse> => {
  const queryString = category !== ProjectCategoryType.ALL ? `?filter=${category}` : '';
  const { data } = await client.get(`/projects${queryString}`);
  return { projects: data };
};

export const remoteProjectAPI: ProjectAPI = {
  getProjectDetail,
  getProjectList,
};
