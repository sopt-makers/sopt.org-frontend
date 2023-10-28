import { ProjectCategoryType, ProjectPlatformType } from '@src/lib/types/project';

export const activeProjectCategoryList: ProjectCategoryType[] = [
  ProjectCategoryType.ALL,
  ProjectCategoryType.APPJAM,
  ProjectCategoryType.SOPKATHON,
  ProjectCategoryType.SOPTERM,
];

export const projectCategoryLabel: Record<ProjectCategoryType, string> = {
  [ProjectCategoryType.ALL]: '전체',
  [ProjectCategoryType.APPJAM]: '앱잼',
  [ProjectCategoryType.SOPKATHON]: '솝커톤',
  [ProjectCategoryType.SOPTERM]: '솝텀',
};

export const projectCategoryDescription: Record<ProjectCategoryType, string> = {
  [ProjectCategoryType.ALL]: '',
  [ProjectCategoryType.APPJAM]:
    '5주간의 집중 협업을 통해 한 개의 온전한 프로덕트를 만드는 프로젝트, APPJAM',
  [ProjectCategoryType.SOPKATHON]:
    '무박 2일간의 해커톤을 통해 아이디어를 빠르게 프로덕트로 만들어보는 프로젝트, SOPKATHON',
  [ProjectCategoryType.SOPTERM]:
    '4개월간의 장기 협업을 통해 한 개의 온전한 프로덕트를 만드는 프로젝트, SOPT-TERM',
};

export const activeProjectPlatformList: ProjectPlatformType[] = [
  ProjectPlatformType.ALL,
  ProjectPlatformType.APP,
  ProjectPlatformType.WEB,
];

export const projectPlatformLabel: Record<ProjectPlatformType, string> = {
  [ProjectPlatformType.ALL]: '전체',
  [ProjectPlatformType.APP]: '앱',
  [ProjectPlatformType.WEB]: '웹',
};

export const projectCategoryDescription: Record<ProjectCategoryType, string> = {
  [ProjectCategoryType.ALL]: '',
  [ProjectCategoryType.APPJAM]:
    '5주간의 집중 협업을 통해 한 개의 온전한 프로덕트를 만드는 프로젝트, APPJAM',
  [ProjectCategoryType.SOPKATHON]:
    '무박 2일간의 해커톤을 통해 아이디어를 빠르게 프로덕트로 만들어보는 프로젝트, SOPKATHON',
  [ProjectCategoryType.SOPTERM]:
    '4개월간의 장기 협업을 통해 한 개의 온전한 프로덕트를 만드는 프로젝트, SOPT-TERM',
  [ProjectCategoryType.STUDY]:
    '2개월간 지식 공유를 진행하며 아이디어를 시각화 하거나 프로덕트로 만들어보는 프로젝트, 스터디',
  [ProjectCategoryType.JOINTSEMINAR]:
    '기획, 디자인, 개발 파트가 배운 내용을 통해 간단한 아이디어를 시각화 해보는 프로젝트, 합동 세미나',
  [ProjectCategoryType.ETC]: '',
};

export const activeProjectPlatformList: ProjectPlatformType[] = [
  ProjectPlatformType.ALL,
  ProjectPlatformType.APP,
  ProjectPlatformType.WEB,
];

export const projectPlatformLabel: Record<ProjectPlatformType, string> = {
  [ProjectPlatformType.ALL]: '전체',
  [ProjectPlatformType.APP]: '앱',
  [ProjectPlatformType.WEB]: '웹',
};
