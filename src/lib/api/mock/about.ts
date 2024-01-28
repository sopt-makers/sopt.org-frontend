import {
  GetAboutInfoResponse,
  GetMembersInfoResponse,
  GetStudyInfoResponse,
} from '@src/lib/types/about';
import { Part } from '@src/lib/types/universal';

const BANNER_SRC = 'https://i.ibb.co/84ybMKQ/image-76.png';
const SRC = 'https://avatars.githubusercontent.com/u/47105088?v=4';
const SRC_MAIN = 'https://avatars.githubusercontent.com/u/48249505?v=4';

const getAboutInfo = async (): Promise<GetAboutInfoResponse> => ({
  aboutInfo: {
    generation: 32,
    title: 'GO SOPT',
    bannerImage: BANNER_SRC,
    coreValue: {
      mainDescription:
        '32기 Go SOPT는 협업을 중시하는 멤버들과 함께 나아가며\n끊임없이 실천하는 태도를 지향합니다.',
      eachValues: [
        {
          title: 'Protect',
          description: '몸살으로부터\n주함을 지킵니다.',
          src: SRC,
        },
        {
          title: 'Health',
          description: '주함 항상\n건강해야 합니다.',
          src: SRC,
        },
        {
          title: 'Retrieve',
          description: '푹 쉬고 건강을\n되찾습니다.',
          src: SRC,
        },
      ],
    },
    curriculums: {
      [Part.PLAN]: SRC_MAIN,
      [Part.DESIGN]: BANNER_SRC,
      [Part.ANDROID]: BANNER_SRC,
      [Part.IOS]: BANNER_SRC,
      [Part.SERVER]: BANNER_SRC,
      [Part.WEB]: SRC,
    },
    records: {
      memberCount: 200,
      projectCount: 24,
      studyCount: 300,
    },
  },
});

const getMemberInfo = async (): Promise<GetMembersInfoResponse> => ({
  members: [
    {
      id: 80,
      name: '양정윤',
      position: '회장',
      currentProject: 'palmspring',
      description: '알은 세계이다. 태어나려는 자는 세계를 부숴야 한다.',
      imageSrc: '/images/members/80.png',
      gmail: 'oilburner0320@gmail.com',
    },
    {
      id: 291,
      name: '김대덕',
      position: '부회장',
      currentProject: 'palmspring',
      imageSrc: '/images/members/291.png',
      gmail: 'psalm1266@gmail.com',
    },
    {
      id: 49,
      name: '이호재',
      position: '총무',
      currentProject: 'ZOOC',
      description: '함께 성장하는 환경',
      imageSrc: '/images/members/49.png',
      gmail: 'artjr97@naver.com',
    },
    {
      id: 246,
      name: '김해린',
      position: '미디어 팀장',
      currentProject: '타투어',
      description: '순간의 감정까지 쌓이도록 온 마음을 담아 기록합니다',
      imageSrc: '/images/members/246.png',
      gmail: 'gogolyn@gmail.com',
      linkedin: '해린-김-bb4a8027a',
    },
    {
      id: 354,
      name: '이승준',
      position: '운영 팀장',
      currentProject: '엄빠도 어렸다',
      description: '안녕하세요',
      imageSrc: '/images/members/354.png',
      gmail: 'tmdwns0527@gmail.com',
    },
    {
      id: 408,
      name: '서지원',
      position: '기획 파트장',
      currentProject: 'ASAP',
      description: '프로덕트 성공에 대한 모든 책임을 질 것',
      imageSrc: '/images/members/408.png',
      gmail: 'smallbae99@gmail.com',
    },
    {
      id: 174,
      name: '김채현',
      position: '디자인 파트장',
      currentProject: '타투어',
      imageSrc: '/images/members/174.png',
      gmail: 'elina001106@gmail.com',
    },
    {
      id: 57,
      name: '이태희',
      position: '안드로이드 파트장',
      currentProject: 'SPARKLE',
      description: '안드로이드 그 자체가 되고 싶은 남자',
      imageSrc: '/images/members/57.png',
      gmail: 't9h9@naver.com',
      github: 'taeheeL',
      linkedin: '태희-이-b4988a272',
    },
    {
      id: 387,
      name: '박익범',
      position: 'iOS 파트장',
      currentProject: 'SPARKLE',
      imageSrc: '/images/members/387.png',
      gmail: 'pibum@naver.com',
      github: 'parkikbum',
    },
    {
      id: 209,
      name: '김서현',
      position: '웹 파트장',
      currentProject: 'palmspring',
      description: '사용자를 생각하는 개발자',
      imageSrc: '/images/members/209.png',
      gmail: 'seobbangway@ewhain.net',
      github: 'seobbang',
      linkedin: 'seohyun-kim-9784ab29a',
    },
    {
      id: 152,
      name: '최윤한',
      position: '서버 파트장',
      currentProject: '스밈, 포포리, 캐쳡',
      description: '아슈파',
      imageSrc: '/images/members/152.png',
      gmail: 'unusualc@likelion.org',
      github: 'unanchoi',
    },
  ],
});

const getStudyInfo = async (): Promise<GetStudyInfoResponse> => ({
  studies: Array.from({ length: 23 }, (idx: number) => ({
    id: idx,
    generation: 30,
    joinableParts: [Part.ANDROID, Part.PLAN],
    title: '안드러와',
    src: SRC,
    startDate: new Date('2022-01-01'),
    endDate: new Date('2022-08-01'),
    membersCount: 40,
  })),
  hasNextPage: true,
});

export const mockAboutAPI = {
  getAboutInfo,
  getMemberInfo,
  getStudyInfo,
};
