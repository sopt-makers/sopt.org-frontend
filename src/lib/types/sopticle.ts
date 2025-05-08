import { BlogResponse, SortType } from './blog';

export type PostSopticleLikeResponse = {
  currentLike: boolean;
  likeChanged: boolean;
};
export interface SopticleAPI {
  getResponse(sort: SortType, page: number): Promise<BlogResponse>;
  postSopticleLike(sopticleId: number, prevLike: boolean): Promise<PostSopticleLikeResponse>;
}
