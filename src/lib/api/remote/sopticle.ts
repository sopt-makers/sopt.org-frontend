import { api } from '@src/lib/api/instance';
import { DEFAULT_TIMEOUT } from '@src/lib/constants/client';
import { BlogPostType, BlogResponse, SortType } from '@src/lib/types/blog';
import { SopticleAPI } from '@src/lib/types/sopticle';
import { getStorageHandler } from '@src/lib/utils/storageHandler';
import { nanoid } from 'nanoid';
import qs from 'qs';

export const getResponse = async (
  sort: SortType,
  pageNo = 1,
  limit = 10,
): Promise<BlogResponse> => {
  const sortParameter = { sort };
  const pageParameter = { pageNo };
  const limitParameter = { limit };
  const sessionStorageHandler = getStorageHandler('sessionStorage');
  const sessionId = sessionStorageHandler.getItemOrGenerate('session-id', nanoid);
  const parameter = qs.stringify({ ...sortParameter, ...pageParameter, ...limitParameter });

  const { data } = await api.get<{
    hasNextPage: boolean;
    content: BlogPostType[];
    currentPage: number;
    hasPrevPage: boolean;
    totalPage: number;
    isLikedByUser: boolean;
    totalCount: number;
  }>(`/soptstory?${parameter}`, {
    headers: { 'session-id': sessionId },
    timeout: DEFAULT_TIMEOUT,
  });

  return {
    hasNextPage: data.hasNextPage,
    response: data.content,
    currentPage: data.currentPage,
    hasPrevPage: data.hasPrevPage,
    totalPage: data.totalPage,
    isLikedByUser: data.isLikedByUser,
    totalCount: data.totalCount,
  };
};

const postSopticleLike = async (sopticleId: number): Promise<void> => {
  const response = await api.post(`soptstory/${sopticleId}/like`, {}, { timeout: DEFAULT_TIMEOUT });

  return response.data;
};

const postSopticleUnlike = async (sopticleId: number): Promise<void> => {
  const response = await api.post(`soptstory/${sopticleId}/unlike`, {}, { timeout: DEFAULT_TIMEOUT });

  return response.data;
};

export const remoteSopticleAPI: SopticleAPI = {
  getResponse,
  postSopticleLike,
  postSopticleUnlike,
};
