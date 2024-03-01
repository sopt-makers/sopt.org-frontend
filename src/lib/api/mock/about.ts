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
      id: 1,
      name: '조승우',
      position: '회장',
      currentProject: 'Tutice',
      description: '솝트의 지금, 여러분과 함께',
      imageSrc: '/images/members/1.png',
      gmail: 'seungwoo.sp@gmail.com',
    },
    {
      id: 2,
      name: '박세은',
      position: '총무',
      currentProject: 'doorip',
      description: '나와 우리의 성장을 위해 파이팅!',
      imageSrc: '/images/members/2.png',
      gmail: 'seeun_player@naver.com',
    },
    {
      id: 3,
      name: '정동규',
      position: '메이커스 팀장',
      currentProject: 'Palmspring',
      description: '하고 싶은건 모두 도전합니다.',
      imageSrc: '/images/members/3.png',
      gmail: 'bang2brew@gmail.com',
      github: 'yummygyudon',
    },
    {
      id: 4,
      name: '정채은',
      position: '미디어 팀장',
      currentProject: 'PINGLE',
      description: '이상적인 기억을 기록합니다.',
      imageSrc: '/images/members/4.png',
      gmail: 'cce523@hanmail.net',
      github: 'chaentopia',
    },
    {
      id: 5,
      name: '곽성준',
      position: '운영 팀장',
      currentProject: 'doorip',
      description: '잊지 못할 추억을 드립니다.',
      imageSrc: '/images/members/5.png',
      gmail: 'seongjoonkwak@gmail.com',
      github: 'sjk4618',
    },
    {
      id: 6,
      name: '여민서',
      position: '기획 파트장',
      currentProject: '하면함',
      description: '성장에 미쳐있는 사람',
      imageSrc: '/images/members/6.png',
      gmail: 'minseo200113@naver.com',
    },
    {
      id: 7,
      name: '황현진',
      position: '디자인 파트장',
      currentProject: 'doorip',
      description: '디자인의 지니어스',
      imageSrc: '/images/members/7.png',
      gmail: 'hhs7871@naver.com',
    },
    {
      id: 8,
      name: '곽의진',
      position: '안드로이드 파트장',
      currentProject: '하면함',
      description: '인간 안드가 되어봅시다.',
      imageSrc: '/images/members/8.png',
      gmail: 'yuijin0909@gmail.com',
      github: 'KwakEuiJin',
    },
    {
      id: 9,
      name: '류희재',
      position: 'iOS 파트장',
      currentProject: 'ZOOC',
      description: '낭만 사과 꽃길 같이 걸어가요',
      imageSrc: '/images/members/9.png',
      gmail: 'fbgmlwo123@naver.com',
      github: 'HELLOHIDI',
    },
    {
      id: 10,
      name: '이재훈',
      position: '웹 파트장',
      currentProject: 'Mile',
      description: '소속감에 미쳐있는 사람',
      imageSrc: '/images/members/10.png',
      gmail: 'm98m@naver.com',
      github: 'ljh0608',
    },
    {
      id: 11,
      name: '도소현',
      position: '서버 파트장',
      currentProject: 'Mile',
      description: '단단한 서비스를 제공합니다.',
      imageSrc: '/images/members/11.png',
      gmail: 'lyny.doh@gmail.com',
      github: 'sohyundoh',
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
