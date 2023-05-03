import { ExtraPart } from './universal';

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
  getReviews(tab: ExtraPart, page: number): Promise<GetReviewsResponse>;
  getSampleReviews(): Promise<GetSampleReviewsResponse>;
}
