import type { PartCategoryType } from '@src/lib/types/blog';
import { ActivitySelectType } from '@src/lib/types/main';

export enum BlogTabType {
  REVIEW = 'review',
  ARTICLE = 'article',
}

export type BlogTabMap = Record<BlogTabType, string>;

export type SelectedType = {
  selectedTab: BlogTabType;
  selectedMajorCategory: number;
  selectedSubCategory: PartCategoryType;
  selectedActivity: ActivitySelectType;
  tag: 'recruit' | 'activity';
};

export interface BlogTabProps {
  selected: SelectedType;
  setSelected: (newValue: SelectedType) => void;
  setSelectedTab: (newValue: BlogTabType) => void;
  setMajorCategory: (newValue: number) => void;
  setSubCategory: (newValue: PartCategoryType) => void;
  setSelectedActivity: (newValue: ActivitySelectType) => void;
}
