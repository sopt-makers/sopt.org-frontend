import { BlogPostType } from './blog';
import { ExtraPart } from './universal';

export type SopticleType = {
  id: number;
  title: string;
  subtitle: string;
  thumbnail: string;
  author: string;
  authorProfileUrl: string;
  semester: number;
  part: string;
  link: string;
  likesCount: number;
  publishedAt: Date;
};

export type GetSopticlesResponse = {
  hasNextPage: boolean;
  response: BlogPostType[];
};

export type PostSopticleLikeResponse = {
  currentLike: boolean;
  likeChanged: boolean;
};
export interface SopticleAPI {
  getResponse(generation: number, tab: ExtraPart, page: number): Promise<GetSopticlesResponse>;
  postSopticleLike(sopticleId: number, prevLike: boolean): Promise<PostSopticleLikeResponse>;
}

export interface SopticleResponseDto {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  author: string;
  authorProfileImageUrl: string;
  generation: number;
  part: string;
  sopticleUrl: string;
  likeCount: number;
  uploadedAt: string;
}
