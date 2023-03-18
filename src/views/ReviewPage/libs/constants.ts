import * as L from '@src/assets/mainLogo';
import { TAB, TabType } from '../types';

export const tabs: TabType[] = [
  {
    value: TAB.ALL,
    label: '전체',
  },
  {
    value: TAB.PLAN,
    label: '기획',
  },
  {
    value: TAB.DESIGN,
    label: '디자인',
  },
  {
    value: TAB.ANDROID,
    label: '안드로이드',
  },
  {
    value: TAB.IOS,
    label: 'iOS',
  },
  {
    value: TAB.WEB,
    label: '웹',
  },
  {
    value: TAB.SERVER,
    label: '서버',
  },
];

export const logoPath: Record<number, string> = {
  11: L.logo11,
  12: L.logo12,
  14: L.logo14,
  15: L.logo15,
  16: L.logo16,
  17: L.logo17,
  18: L.logo18,
  19: L.logo19,
  20: L.logo20,
  21: L.logo21,
  22: L.logo22,
  23: L.logo23,
  24: L.logo24,
  25: L.logo25,
  26: L.logo26,
  27: L.logo27,
  28: L.logo28,
  29: L.logo29,
  30: L.logo30,
  31: L.logo31,
};
