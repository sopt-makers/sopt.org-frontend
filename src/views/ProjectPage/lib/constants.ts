export enum ProjectCategoryType {
  ALL = 'ALL',
  APPJAM = 'APPJAM',
  SOPKATHON = 'SOPKATHON',
  SOPTERM = 'SOPTERM',
  STUDY = 'STUDY',
  JOINTSEMINAR = 'JOINTSEMINAR',
  ETC = 'ETC',
}

export const projectCategoryList: {
  type: ProjectCategoryType;
  name: string;
}[] = [
  { type: ProjectCategoryType.ALL, name: 'μ μ²΄' },
  { type: ProjectCategoryType.APPJAM, name: 'π μ±μΌ' },
  { type: ProjectCategoryType.SOPKATHON, name: 'π‘ μμ»€ν€' },
  { type: ProjectCategoryType.SOPTERM, name: 'π μν νλ‘μ νΈ' },
  { type: ProjectCategoryType.STUDY, name: 'π μ€ν°λ' },
  { type: ProjectCategoryType.JOINTSEMINAR, name: 'π₯ ν©λ μΈλ―Έλ' },
  { type: ProjectCategoryType.ETC, name: 'π¬ κΈ°ν' },
];
