import { PartCategoryType } from '@src/lib/types/blog';

export const activeGenerationCategoryList: number[] = [0];

for (let i = 31; i >= 24; i--) {
  activeGenerationCategoryList.push(i);
}

export const generationCategoryLabel: Record<number, string> = {
  [0]: '전체',
};

for (let i = 31; i >= 24; i--) {
  generationCategoryLabel[i] = `${i}기`;
}

export const activePartCategoryList: PartCategoryType[] = [
  PartCategoryType.ALL,
  PartCategoryType.PLAN,
  PartCategoryType.DESIGN,
  PartCategoryType.ANDROID,
  PartCategoryType.IOS,
  PartCategoryType.WEB,
  PartCategoryType.SERVER,
];

export const partCategoryLabel: Record<PartCategoryType, string> = {
  [PartCategoryType.ALL]: '파트',
  [PartCategoryType.PLAN]: '기획',
  [PartCategoryType.DESIGN]: '디자인',
  [PartCategoryType.ANDROID]: '안드로이드',
  [PartCategoryType.IOS]: 'iOS',
  [PartCategoryType.WEB]: '웹',
  [PartCategoryType.SERVER]: '서버',
};
