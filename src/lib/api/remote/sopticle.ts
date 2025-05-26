import { BASE_URL, DEFAULT_TIMEOUT } from '@src/lib/constants/client';
import { BlogPostType, BlogResponse, SortType } from '@src/lib/types/blog';
import { PostSopticleLikeResponse, SopticleAPI } from '@src/lib/types/sopticle';
import { getStorageHandler } from '@src/lib/utils/storageHandler';
import axios from 'axios';
import { nanoid } from 'nanoid';
import qs from 'qs';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

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

  const { data } = await client.get<{
    hasNextPage: boolean;
    data: BlogPostType[];
    currentPage: number;
    hasPrevPage: boolean;
    totalPage: number;
    totalCount: number;
  }>(`/soptstory?${parameter}`, { headers: { 'session-id': sessionId } });

  return {
    hasNextPage: data.hasNextPage,
    response: data.data,
    currentPage: data.currentPage,
    hasPrevPage: data.hasPrevPage,
    totalPage: data.totalPage,
    totalCount: data.totalCount,
  };
};

const postSopticleLike = async (
  sopticleId: number,
  prevLike: boolean,
): Promise<PostSopticleLikeResponse> => {
  const sessionStorageHandler = getStorageHandler('sessionStorage');
  const sessionId = sessionStorageHandler.getItemOrGenerate('session-id', nanoid);
  const headers = { 'session-id': sessionId };
  const response = await client.post(
    `soptstory/${sopticleId}/${prevLike ? 'unlike' : 'like'}`,
    {},
    { headers },
  );

  switch (response.status) {
    case 200:
    case 201:
      return { currentLike: !prevLike, likeChanged: true };
    case 400:
    default:
      return { currentLike: prevLike, likeChanged: false };
  }
};

export const remoteSopticleAPI: SopticleAPI = {
  getResponse,
  postSopticleLike,
};
