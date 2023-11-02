import { PartCategoryType } from '@src/lib/types/blog';
import { BlogPostType } from './blog';

export type GetSampleReviewsResponse = {
  reviews: BlogPostType[];
};

export type GetReviewsResponse = {
  response: BlogPostType[];
  hasNextPage: boolean;
  currentPage: number;
};

export interface ReviewAPI {
  getResponse(
    majorTab: number,
    subTab: PartCategoryType,
    page: number,
  ): Promise<GetReviewsResponse>;
  getSampleReviews(): Promise<GetSampleReviewsResponse>;
}
