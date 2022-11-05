export enum ProjectCategoryType {
  APPJAM = 'APPJAM',
  SOPKATHON = 'SOPSOPKATHON',
  SOPTERM = 'SOPTERM',
  STUDY = 'STUDY',
  JOINTSEMINAR = 'JOINTSEMINAR',
  ETC = 'ETC',
}

export type SelectionType = 'NO_SELECT' | keyof typeof ProjectCategoryType;

export const projectCategoryList: {
  type: ProjectCategoryType;
  name: string;
}[] = [
  { type: ProjectCategoryType.APPJAM, name: '🎊 앱잼' },
  { type: ProjectCategoryType.SOPKATHON, name: '💡 솝커톤' },
  { type: ProjectCategoryType.SOPTERM, name: '🛎 솝텀 프로젝트' },
  { type: ProjectCategoryType.STUDY, name: '📖 스터디' },
  { type: ProjectCategoryType.JOINTSEMINAR, name: '👥 합동 세미나' },
  { type: ProjectCategoryType.ETC, name: '💬 기타' },
];
