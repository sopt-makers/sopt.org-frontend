export enum ProjectCategoryType {
  APPJAM = 'APPJAM',
  SOPKATHON = 'SOPSOPKATHON',
  SOPTERM = 'SOPTERM',
  STUDY = 'STUDY',
  JOINTSEMINAR = 'JOINTSEMINAR',
  ETC = 'ETC',
}

// ETC의 경우 description을 갖지 않는다
export const ProjectCategoryDescription = {
  APPJAM: '5주간의 집중 협업을 통해 한 개의 온전한 프로덕트를 만드는 프로젝트',
  SOPKATHON: '무박 2일간의 해커톤을 통해 아이디어를 빠르게 프로덕트로 만들어보는 프로젝트',
  SOPTERM: '4개월간의 장기 협업을 통해 한 개의 온전한 프로덕트를 만드는 프로젝트',
  STUDY:
    '2개월간 지식 공유를 진행하며 아이디어를 시각화 하거나 프로덕트로 만들어보는 프로젝트, 스터디',
  JOINTSEMINAR:
    '기획, 디자인, 개발 파트가 배운 내용을 통해 간단한 아이디어를 시각화 해보는 프로젝트, 합동 세미나',
};

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
