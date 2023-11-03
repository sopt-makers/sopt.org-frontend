import { PartCategoryType } from '@src/lib/types/blog';
import { BlogPostType, BlogResponse } from './blog';

export type GetSampleReviewsResponse = {
  reviews: BlogPostType[];
};

export interface ReviewAPI {
  getResponse(majorTab: number, subTab: PartCategoryType, page: number): Promise<BlogResponse>;
  getSampleReviews(): Promise<GetSampleReviewsResponse>;
}
