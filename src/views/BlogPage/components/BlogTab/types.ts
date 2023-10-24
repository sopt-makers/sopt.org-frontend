export enum BlogTabType {
  REVIEW = 'review',
  ARTICLE = 'article',
}

type BlogTabContent = {
  title: string;
  description: string;
};

export type BlogTabMap = Record<BlogTabType, BlogTabContent>;
