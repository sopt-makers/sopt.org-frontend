import { GetSopticlesResponse, SopticleAPI, SopticleResponseDto } from '@src/lib/types/sopticle';
import { ExtraPart, PartExtraType } from '@src/lib/types/universal';
import { BASE_URL, DEFAULT_TIMEOUT } from '@src/utils/const/client';
import axios from 'axios';
import qs from 'qs';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
});

const getSopticles = async (tab: ExtraPart, pageNo = 1): Promise<GetSopticlesResponse> => {
  const partParameter = tab === PartExtraType.ALL ? {} : { part: tab };
  const pageParameter = { pageNo, limit: 12 };
  const parameter = qs.stringify({ ...partParameter, ...pageParameter });

  const { data } = await client.get<{ hasNextPage: boolean; data: SopticleResponseDto[] }>(
    `/sopticle?${parameter}`,
  );

  return {
    hasNextPage: data.hasNextPage,
    sopticles: data.data.map((sopticle: SopticleResponseDto) => ({
      id: sopticle.id,
      title: sopticle.title,
      subtitle: sopticle.description,
      thumbnail: sopticle.thumbnailUrl,
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

export const remoteSopticleAPI: SopticleAPI = {
  getSopticles,
};
