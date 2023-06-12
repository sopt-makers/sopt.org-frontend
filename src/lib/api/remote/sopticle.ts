import {
  GetSopticlesResponse,
  PostSopticleLikeResponse,
  SopticleAPI,
  SopticleResponseDto,
} from '@src/lib/types/sopticle';
import { ExtraPart, PartExtraType } from '@src/lib/types/universal';
import { BASE_URL, DEFAULT_TIMEOUT } from '@src/utils/const/client';
import { sanitizeImageUrl } from '@src/utils/sanitize';
import { getStorageHandler } from '@src/utils/storageHandler';
import axios from 'axios';
import { nanoid } from 'nanoid';
import qs from 'qs';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

const getSopticles = async (tab: ExtraPart, pageNo = 1): Promise<GetSopticlesResponse> => {
  const partParameter = tab === PartExtraType.ALL ? {} : { part: tab };
  const pageParameter = { pageNo, limit: 12 };
  const sessionStorageHandler = getStorageHandler('sessionStorage');
  const sessionId = sessionStorageHandler.getItemOrGenerate('session-id', nanoid);
  const parameter = qs.stringify({ ...partParameter, ...pageParameter });

  const { data } = await client.get<{ hasNextPage: boolean; data: SopticleResponseDto[] }>(
    `/sopticle?${parameter}`,
    { headers: { 'session-id': sessionId } },
  );

  return {
    hasNextPage: data.hasNextPage,
    sopticles: data.data.map((sopticle: SopticleResponseDto) => ({
      id: sopticle.id,
      title: sopticle.title,
      subtitle: sopticle.description,
      thumbnail: sanitizeImageUrl(sopticle.thumbnailUrl),
      author: sopticle.author,
      authorProfileUrl: sopticle.authorProfileImageUrl,
      semester: sopticle.generation,
      part: sopticle.part,
      link: sopticle.sopticleUrl,
      likesCount: sopticle.likeCount,
      publishedAt: new Date(sopticle.uploadedAt),
    })),
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
  getSopticles,
  postSopticleLike,
};
