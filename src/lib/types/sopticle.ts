import { BlogResponse, SortType } from './blog';

export interface SopticleAPI {
  getResponse(sort: SortType, page: number): Promise<BlogResponse>;
  postSopticleLike(sopticleId: number): Promise<void>;
  postSopticleUnlike(sopticleId: number): Promise<void>;
}
