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
