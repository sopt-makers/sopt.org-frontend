import { Part } from './universal';

export enum ReviewTabExtraType {
  ALL = 'ALL',
}

export type ReviewTabType = ReviewTabExtraType | Part;

export type TabType = {
  value: ReviewTabType;
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
  getReviews(tab: ReviewTabType, page: number): Promise<GetReviewsResponse>;
  getSampleReviews(): Promise<GetSampleReviewsResponse>;
}
