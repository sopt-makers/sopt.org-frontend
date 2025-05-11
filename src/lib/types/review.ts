import { BlogCategoryType, PartCategoryType } from '@src/lib/types/blog';
import { ActivitySelectType } from '@src/lib/types/main';
import { BlogPostType, BlogResponse } from './blog';

export type GetSampleReviewsResponse = {
  reviews: BlogPostType[];
};

export interface ReviewAPI {
  getResponse(
    category: BlogCategoryType,
    activity: ActivitySelectType | null,
    generation: number | null,
    part: PartCategoryType | null,
    pageNo?: number,
    limit?: number,
  ): Promise<BlogResponse>;
  getSampleReviews(): Promise<GetSampleReviewsResponse>;
}
