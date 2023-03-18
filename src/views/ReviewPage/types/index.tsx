export enum TAB {
  ALL = 'ALL',
  PLAN = 'PLAN',
  DESIGN = 'DESIGN',
  ANDROID = 'ANDROID',
  IOS = 'iOS',
  WEB = 'WEB',
  SERVER = 'SERVER',
}

export type TabType = {
  value: TAB;
  label: string;
};

export type ReviewType = {
  id: number;
  title: string;
  reviewer: string;
  semester: number;
  part: string;
  subject: string;
  platform: string;
  link: string;
};
