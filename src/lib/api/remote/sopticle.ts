import { BASE_URL, DEFAULT_TIMEOUT } from '@src/lib/constants/client';
import { BlogPostType } from '@src/lib/types/blog';
import {
  GetSopticlesResponse,
  PostSopticleLikeResponse,
  SopticleAPI,
} from '@src/lib/types/sopticle';
import { ExtraPart, PartExtraType } from '@src/lib/types/universal';
import { getStorageHandler } from '@src/lib/utils/storageHandler';
import axios from 'axios';
import { nanoid } from 'nanoid';
import qs from 'qs';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

const getResponse = async (
  generation = 1,
  tab: ExtraPart,
  pageNo = 1,
): Promise<GetSopticlesResponse> => {
  const partParameter = tab === PartExtraType.ALL ? {} : { part: tab };
  const generationParameter = { generation: 30 };
  const pageParameter = { pageNo, limit: 6 };
  const sessionStorageHandler = getStorageHandler('sessionStorage');
  const sessionId = sessionStorageHandler.getItemOrGenerate('session-id', nanoid);
  const parameter = qs.stringify({ ...partParameter, ...pageParameter });

  const { data } = await client.get<{ hasNextPage: boolean; data: BlogPostType[] }>(
    `/sopticle?${parameter}`,
    { headers: { 'session-id': sessionId } },
  );

  return {
    hasNextPage: data.hasNextPage,
    response: data.data,
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
    `sopticle/${sopticleId}/${prevLike ? 'unlike' : 'like'}`,
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
