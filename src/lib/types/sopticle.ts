import { PartCategoryType } from '@src/lib/types/blog';
import { BlogPostType } from './blog';

export type GetSopticlesResponse = {
  hasNextPage: boolean;
  response: BlogPostType[];
  currentPage: number;
};

export type PostSopticleLikeResponse = {
  currentLike: boolean;
  likeChanged: boolean;
};
export interface SopticleAPI {
  getResponse(
    majorTab: number,
    subTab: PartCategoryType,
    page: number,
  ): Promise<GetSopticlesResponse>;
  postSopticleLike(sopticleId: number, prevLike: boolean): Promise<PostSopticleLikeResponse>;
}
