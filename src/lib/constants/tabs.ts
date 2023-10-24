import { ExtraPart, Part, PartExtraType } from '@src/lib/types/universal';

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

export const activePartCategoryList: ExtraPart[] = [
  PartExtraType.ALL,
  Part.PLAN,
  Part.DESIGN,
  Part.ANDROID,
  Part.IOS,
  Part.WEB,
  Part.SERVER,
];

export const partCategoryLabel: Record<ExtraPart, string> = {
  [PartExtraType.ALL]: '파트',
  [Part.PLAN]: '기획',
  [Part.DESIGN]: '디자인',
  [Part.ANDROID]: '안드로이드',
  [Part.IOS]: 'iOS',
  [Part.WEB]: '웹',
  [Part.SERVER]: '서버',
};
