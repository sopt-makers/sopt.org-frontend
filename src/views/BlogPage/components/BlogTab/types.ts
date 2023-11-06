import type { PartCategoryType } from '@src/lib/types/blog';

export enum BlogTabType {
  REVIEW = 'review',
  ARTICLE = 'article',
}

type BlogTabContent = {
  title: string;
  description: string;
};

export type BlogTabMap = Record<BlogTabType, BlogTabContent>;

export type selectedType = {
  selectedTab: BlogTabType;
  selectedMajorCategory: number;
  selectedSubCategory: PartCategoryType;
};
