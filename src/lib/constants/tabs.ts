import { PartCategoryType, SortType } from '@src/lib/types/blog';
import { ActivitySelectType } from '@src/lib/types/main';
import { ExtraTabType, Part, PartExtraType, TabType } from '../types/universal';

export const extraTabs: ExtraTabType[] = [
  {
    value: PartExtraType.ALL,
    label: '전체',
  },
  {
    value: Part.PLAN,
    label: '기획',
  },
  {
    value: Part.DESIGN,
    label: '디자인',
  },
  {
    value: Part.ANDROID,
    label: '안드로이드',
  },
  {
    value: Part.IOS,
    label: 'iOS',
  },
  {
    value: Part.WEB,
    label: '웹',
  },
  {
    value: Part.SERVER,
    label: '서버',
  },
];

export const tabs = extraTabs.slice(1) as TabType[];

export const activeGenerationCategoryList: number[] = [0];

export const activitySelectLabel: Record<ActivitySelectType, string> = {
  [ActivitySelectType.ALL]: '전체 활동',
  [ActivitySelectType.APPJAM]: '앱잼',
  [ActivitySelectType.SOPKATHON]: '솝커톤',
  [ActivitySelectType.SEMINAR]: '세미나',
  [ActivitySelectType.STUDY]: '스터디',
  [ActivitySelectType.SOPTERM]: '솝텀',
  [ActivitySelectType.MAKERS]: '메이커스',
};

export const activities: ActivitySelectType[] = [
  ActivitySelectType.ALL,
  ActivitySelectType.APPJAM,
  ActivitySelectType.SOPKATHON,
  ActivitySelectType.SEMINAR,
  ActivitySelectType.STUDY,
  ActivitySelectType.SOPTERM,
  ActivitySelectType.MAKERS,
];

for (let i = 35; i >= 24; i--) {
  activeGenerationCategoryList.push(i);
}

export const generationCategoryLabel: Record<number, string> = {
  [0]: '전체',
};

for (let i = 35; i >= 24; i--) {
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
  [PartCategoryType.ALL]: '전체',
  [PartCategoryType.PLAN]: '기획',
  [PartCategoryType.DESIGN]: '디자인',
  [PartCategoryType.ANDROID]: '안드로이드',
  [PartCategoryType.IOS]: 'iOS',
  [PartCategoryType.WEB]: '웹',
  [PartCategoryType.SERVER]: '서버',
};

export const sortLabel: Record<SortType, string> = {
  [SortType.LATEST]: '최근 등록순',
  [SortType.LIKES]: '좋아요순',
};

export const sortValues: SortType[] = [SortType.LATEST, SortType.LIKES];
