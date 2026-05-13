import projectThumbnail1 from '@src/assets/images/img_project_thumbnail1.png';
import projectThumbnail2 from '@src/assets/images/img_project_thumbnail2.png';
import projectThumbnail3 from '@src/assets/images/img_project_thumbnail3.png';
import projectThumbnail4 from '@src/assets/images/img_project_thumbnail4.png';
import { default as ImgProjectLogo1 } from '@src/assets/images/recent-release-project/img_project_logo1.avif';
import { default as ImgProjectLogo2 } from '@src/assets/images/recent-release-project/img_project_logo2.avif';
import {
  LinkType,
  ProjectCategoryType,
  ProjectPlatformType,
  StaticProjectType,
} from '@src/lib/types/project';

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

export const staticReleaseProjectList: StaticProjectType[] = [
  {
    name: '엄빠도 어렸다',
    summary: '부모-자식이 추억을 공유하며 공감대를 찾아가는 서비스',
    generation: 32,
    links: [
      {
        title: LinkType['앱 스토어'],
        url: 'https://apps.apple.com/kr/app/%EC%97%84%EB%B9%A0%EB%8F%84-%EC%96%B4%EB%A0%B8%EB%8B%A4/id6450973870',
      },
    ],
    logoImage: ImgProjectLogo1.src,
  },
  {
    name: '위니',
    summary: '긍정적인 소비 습관을 만드는 절약 SNS',
    generation: 32,
    links: [
      {
        title: LinkType['앱 스토어'],
        url: 'https://apps.apple.com/kr/app/%EC%9C%84%EB%8B%88-%EC%89%BD%EA%B3%A0-%EC%9E%AC%EB%B0%8C%EB%8A%94-%EA%B8%8D%EC%A0%95%EC%A0%81-%EC%86%8C%EB%B9%84%EC%8A%B5%EA%B4%80-%ED%98%95%EC%84%B1/id6463294662',
      },
      {
        title: LinkType['구글 플레이스토어'],
        url: 'https://play.google.com/store/apps/details?id=org.go.sopt.winey&hl=ko',
      },
    ],
    logoImage: ImgProjectLogo2.src,
  },
];

export const MAIN_PROJECT_LIST = [
  {
    thumbnail: projectThumbnail1.src,
    title: 'ELFISODE',
    category: 'APP',
    description:
      '익명으로 마음을 털어놓고, 또래의 이야기를 받아볼 수 있는\n아이슬란드 청소년 감정 공유 플랫폼',
    status: '',
    members: 10,
  },
  {
    thumbnail: projectThumbnail2.src,
    title: 'Walkie',
    category: 'APP',
    description:
      '걷기와 헬스케어를 결합해 일상을 더 건강하고 재미있게 즐길\n수 있도록 돕는 서비스입니다.',
    status: '서비스 이용 가능',
    members: 4,
  },
  {
    thumbnail: projectThumbnail3.src,
    title: 'Certi',
    category: 'APP',
    description: '취업을 위한 첫걸음, Certi',
    status: '창업 중',
    members: 13,
  },
  {
    thumbnail: projectThumbnail4.src,
    title: '솔플리',
    category: 'APP',
    description: '혼자만의 시간을 더 쉽게, 더 즐겁게 !',
    status: '창업 중',
    members: 15,
  },
];
