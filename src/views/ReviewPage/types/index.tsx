export enum TAB {
  ALL = 'all',
  PLAN = 'plan',
  DESIGN = 'design',
  ANDROID = 'android',
  IOS = 'ios',
  WEB = 'web',
  SERVER = 'server',
}

export type TabType = {
  value: TAB;
  label: string;
};

export type ReviewType = {
  id: number;
  title: string;
  writer: string;
  url: string;
  thumbnail: string;
  semester: number;
  department: string;
  preview: string;
};
