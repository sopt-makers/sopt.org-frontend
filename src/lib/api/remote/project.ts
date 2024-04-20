import { BASE_URL } from '@src/lib/constants/client';
import axios from 'axios';
import qs from 'qs';
import {
  GetProjectDetailResponse,
  ProjectAPI,
  ProjectCategoryType,
  ProjectPlatformType,
  ProjectResponse,
} from '../../types/project';

const client = axios.create({ baseURL: BASE_URL });

const getProjectDetail = async (projectId: number): Promise<GetProjectDetailResponse> => {
  const { data } = await client.get(`/projects/${projectId}`);
  const dataServiceType = data.serviceType;

  const serviceType = Array.isArray(dataServiceType) ? dataServiceType : [dataServiceType];

  return { project: { ...data, serviceType } };
};

const getProjectList = async (
  category: ProjectCategoryType,
  platform: ProjectPlatformType,
  pageNo: number,
): Promise<ProjectResponse> => {
  const categoryParameter = category === ProjectCategoryType.ALL ? {} : { filter: category };
  const platformParameter = platform === ProjectPlatformType.ALL ? {} : { platform };
  const parameter = qs.stringify({ ...categoryParameter, ...platformParameter, pageNo });
  const { data } = await client.get(`/projects?${parameter}`);
  return data;
};

export const remoteProjectAPI: ProjectAPI = {
  getProjectDetail,
  getProjectList,
};
