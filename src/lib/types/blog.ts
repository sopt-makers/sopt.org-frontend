/* TODO: 솝티클, 활동 후기 API 업데이트 후 수정 예정 */

export type PostType = {
  id: number;
  part: string;
  generation: number;
  thumbnailUrl: string;
  title: string;
  description: string;
  author: string;
  authorProfileImageUrl: string | null;
  sopticleUrl: string;
  uploadedAt: string;
  likeCount: number;
  liked: boolean;
};

export type GetPostListResponseType = {
  limit: number;
  totalCount: number;
  totalPage: number;
  currentPage: number;
  data: PostType[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
};
