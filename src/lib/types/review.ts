export enum ReviewTab {
  ALL = 'ALL',
  PLAN = 'PLAN',
  DESIGN = 'DESIGN',
  ANDROID = 'ANDROID',
  IOS = 'iOS',
  WEB = 'WEB',
  SERVER = 'SERVER',
}

export type TabType = {
  value: ReviewTab;
  label: string;
};

export type ReviewType = {
  id: number;
  title: string;
  reviewer: string;
  semester: number;
  part: string;
  subject: string;
  platform: string;
  link: string;
};

export type GetSampleReviewsResponse = {
  reviews: ReviewType[];
};

export type GetReviewsResponse = {
  reviews: ReviewType[];
  hasNextPage: boolean;
};

export interface ReviewAPI {
  getReviews(tab: ReviewTab, page: number): Promise<GetReviewsResponse>;
  getSampleReviews(): Promise<GetSampleReviewsResponse>;
}
