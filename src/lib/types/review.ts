import { ActivityType, BlogCategoryType, PartCategoryType } from '@src/lib/types/blog';
import { BlogPostType, BlogResponse } from './blog';

export type GetSampleReviewsResponse = {
  reviews: BlogPostType[];
};

export interface ReviewAPI {
  getResponse(
    category: BlogCategoryType,
    activity: ActivityType | null,
    generation: number | null,
    part: PartCategoryType | null,
    pageNo?: number,
    limit?: number,
  ): Promise<BlogResponse>;
}
