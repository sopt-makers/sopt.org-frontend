import { ProjectCategoryType } from '@src/lib/types/project';

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
