import { ProjectAPI } from './project';
import { ReviewAPI } from './review';

export interface API {
  projectAPI: ProjectAPI;
  reviewAPI: ReviewAPI;
}

export enum Part {
  PLAN = 'PLAN',
  DESIGN = 'DESIGN',
  ANDROID = 'ANDROID',
  IOS = 'iOS',
  WEB = 'WEB',
  SERVER = 'SERVER',
}
