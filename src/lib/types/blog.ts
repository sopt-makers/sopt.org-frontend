export type BlogPostListType = {
  limit: number;
  totalCount: number;
  totalPage: number;
  currentPage: number;
  data: BlogPostType[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export type BlogPostType = {
  id: number;
  part: string;
  generation: number;
  thumbnailUrl: string;
  title: string;
  description: string;
  author: string;
  authorProfileImageUrl: string | null;
  url: string;
  uploadedAt: string;

  /* article */
  likeCount?: number;
  liked?: boolean;

  /* review */
  subject?: string;
};
