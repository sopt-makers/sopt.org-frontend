import { BlogPostType } from './blog';
import { ExtraPart } from './universal';

export type GetSampleReviewsResponse = {
  reviews: BlogPostType[];
};

export type GetReviewsResponse = {
  response: BlogPostType[];
  hasNextPage: boolean;
};

export interface ReviewAPI {
  getResponse(generation: number, tab: ExtraPart, page: number): Promise<GetReviewsResponse>;
  getSampleReviews(): Promise<GetSampleReviewsResponse>;
}
