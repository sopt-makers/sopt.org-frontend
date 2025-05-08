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
  thumbnailUrl: string;
  title: string;
  description: string;
  url: string;
  uploadedAt: string;

  /* article */
  likeCount?: number;
  liked?: boolean;

  /* review */
  generation?: number;
  subject?: string;
  author?: string;
  authorProfileImageUrl?: string | null;
};

export enum PartCategoryType {
  ALL = 'ALL',
  PLAN = 'PLAN',
  DESIGN = 'DESIGN',
  ANDROID = 'ANDROID',
  IOS = 'iOS',
  WEB = 'WEB',
  SERVER = 'SERVER',
}

export type BlogResponse = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  response: BlogPostType[];
  currentPage: number;
  totalPage: number;
  totalCount: number;
};

export enum SortType {
  LATEST = 'latest',
  LIKES = 'likes',
}

export enum BlogCategoryType {
  DOCUMENT_INTERVIEW = '서류/면접',
  ALL_ACTIVITIES = '전체 활동',
}

export enum ActivityType {
  ALL = '전체',
}
