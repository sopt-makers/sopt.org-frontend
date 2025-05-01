import type { PartCategoryType } from '@src/lib/types/blog';

export enum BlogTabType {
  REVIEW = 'review',
  ARTICLE = 'article',
}

export type BlogTabMap = Record<BlogTabType, string>;

export type selectedType = {
  selectedTab: BlogTabType;
  selectedMajorCategory: number;
  selectedSubCategory: PartCategoryType;
};
