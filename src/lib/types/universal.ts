import { AboutAPI } from './about';
import { ProjectAPI } from './project';
import { ReviewAPI } from './review';

export interface API {
  projectAPI: ProjectAPI;
  reviewAPI: ReviewAPI;
  aboutAPI: AboutAPI;
}

export enum Part {
  PLAN = 'PLAN',
  DESIGN = 'DESIGN',
  ANDROID = 'ANDROID',
  IOS = 'iOS',
  WEB = 'WEB',
  SERVER = 'SERVER',
}

export type TabType = {
  value: Part;
  label: string;
};

export enum PartExtraType {
  ALL = 'ALL',
}

export type ExtraPart = PartExtraType | Part;

export type ExtraTabType = {
  value: ExtraPart;
  label: string;
};
