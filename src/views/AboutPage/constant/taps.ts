import { ExtraTabType, Part, PartExtraType, TabType } from '@src/lib/types/universal';

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
    label: 'Android',
  },
  {
    value: Part.IOS,
    label: 'iOS',
  },
  {
    value: Part.WEB,
    label: 'Web',
  },
  {
    value: Part.SERVER,
    label: 'Server',
  },
];

export const tabs = extraTabs.slice(1) as TabType[];
