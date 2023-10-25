import { BlogPostType } from './blog';
import { ExtraPart } from './universal';

export type GetSopticlesResponse = {
  hasNextPage: boolean;
  response: BlogPostType[];
};

export type PostSopticleLikeResponse = {
  currentLike: boolean;
  likeChanged: boolean;
};
export interface SopticleAPI {
  getResponse(majorTab: number, subTab: ExtraPart, page: number): Promise<GetSopticlesResponse>;
  postSopticleLike(sopticleId: number, prevLike: boolean): Promise<PostSopticleLikeResponse>;
}
