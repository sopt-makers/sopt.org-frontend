import { PartCategoryType } from '@src/lib/types/blog';
import { BlogResponse } from './blog';

export type PostSopticleLikeResponse = {
  currentLike: boolean;
  likeChanged: boolean;
};
export interface SopticleAPI {
  getResponse(majorTab: number, subTab: PartCategoryType, page: number): Promise<BlogResponse>;
  postSopticleLike(sopticleId: number, prevLike: boolean): Promise<PostSopticleLikeResponse>;
}
