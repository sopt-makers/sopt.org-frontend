import { Part, TextWeightType } from '@src/lib/types/universal';
import { TabTypeOption } from '@src/lib/types/universal';

export type IntroContentType = {
  id: number;
  title: string;
  detail: string;
  src: string;
};

export type TextColorType = {
  content: string;
  color: 'yellow' | 'white';
};

export enum ActivityType {
  APPJAM = 'APPJAM',
  SOPKATHON = 'SOPKATHON',
  SOPTERM = 'SOPTERM',
  STUDY = 'STUDY',
  SEMINAR = 'SEMINAR',
  EVENTS = 'EVENTS',
}

export interface ActivityContentType {
  img: string;
  navKor: string;
  navEng: string;
  description: TextColorType[];
}

export const activity: ActivityTypeList[] = [
  {
    value: ActivityType.APPJAM,
    label: '앱잼',
  },
  {
    value: ActivityType.SOPKATHON,
    label: '솝커톤',
  },
  {
    value: ActivityType.SOPTERM,
    label: '솝텀',
  },
  {
    value: ActivityType.STUDY,
    label: '스터디',
  },
  {
    value: ActivityType.SEMINAR,
    label: '정기 세미나',
  },
  {
    value: ActivityType.EVENTS,
    label: '행사',
  },
];

export type ActivityListType = Record<ActivityType, ActivityContentType>;
export type ActivityTypeList = TabTypeOption<ActivityType>;

type KeywordType = {
  content: string;
  backgroundColor: string;
  color: string;
  desktop: { top: string; right: string };
  tablet: { top: string; right: string };
  mobile: { top: string; right: string };
};

export type KeywordListType = Record<Part, KeywordType[]>;

type PartInfoType = {
  value: string;
  label: string;
  description: TextWeightType[];
};

export type PartListType = Record<Part, PartInfoType>;
