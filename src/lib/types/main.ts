import { Part } from '@src/lib/types/universal';

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
  },
  {
    value: ActivityType.SOPKATHON,
  },
  {
    value: ActivityType.SOPTERM,
  },
  {
    value: ActivityType.STUDY,
  },
  {
    value: ActivityType.SEMINAR,
  },
  {
    value: ActivityType.EVENTS,
  },
];

export type ActivityListType = Record<ActivityType, ActivityContentType>;
export type ActivityTypeList = {
  value: ActivityType;
};

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
  description: string;
};

export type PartListType = Record<Part, PartInfoType>;
export interface RecentNewsListType {
  title: string;
  url: string;
  src: string;
}

export type SoptCommentType = {
  summary: string;
  color: string;
  comment: string;
  commenter: {
    name: string;
    history: string;
    part: string;
  };
};
