import { AboutAPI } from './about';
import { JobAPI } from './job';
import { ProjectAPI } from './project';
import { ReviewAPI } from './review';
import { SopticleAPI } from './sopticle';

export interface API {
  projectAPI: ProjectAPI;
  reviewAPI: ReviewAPI;
  aboutAPI: AboutAPI;
  sopticleAPI: SopticleAPI;
  jobAPI: JobAPI;
}

export enum Part {
  PLAN = 'PLAN',
  DESIGN = 'DESIGN',
  ANDROID = 'ANDROID',
  IOS = 'iOS',
  WEB = 'WEB',
  SERVER = 'SERVER',
}

export enum PartExtraType {
  ALL = 'ALL',
}

export type ExtraPart = PartExtraType | Part;

type TapTypeOption<T> = {
  value: T;
  label: string;
};

export type TabType = TapTypeOption<Part>;
export type ExtraTabType = TapTypeOption<ExtraPart>;
