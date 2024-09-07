import { GetAboutInfoResponse, GetMembersInfoResponse } from '@src/lib/types/about';
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
      name: '정건',
      position: '회장',
      currentProject: '건국대학교, 티키',
      description: '동아리, 그 이상의 가치',
      imageSrc: '/images/members/1.png',
      gmail: 'president@sopt.org',
      linkedin: '건-정-4aa699303/?trk=public-profile-join-page',
    },
    {
      id: 12,
      name: '김송이',
      position: '부회장',
      currentProject: '아주대학교',
      description: '빛나는 열정을 펼칠 수 있도록',
      imageSrc: '/images/members/12.png',
      gmail: 'v_president@sopt.org',
    },
    {
      id: 2,
      name: '윤영서',
      position: '총무',
      currentProject: '동국대학교, doorip',
      description: '열정을 쏟을 이곳에서 동료들과',
      imageSrc: '/images/members/2.png',
      gmail: 'manager@sopt.org',
      github: '0seoYun',
    },
    {
      id: 5,
      name: '이현진',
      position: '운영 팀장',
      currentProject: '가톨릭대학교, dateroad',
      description: '매 순간을 소중한 추억으로!',
      imageSrc: '/images/members/5.png',
      gmail: 'master@sopt.org',
      github: '2hyunjinn',
    },
    {
      id: 4,
      name: '방민지',
      position: '미디어 팀장',
      currentProject: 'PINGLE',
      description: '우리의 발자취를 기록하다.',
      imageSrc: '/images/members/4.png',
      gmail: 'media@sopt.org',
      github: 'bangMinjI98',
    },
    {
      id: 3,
      name: '김가연',
      position: '메이커스 팀장',
      currentProject: '이화여자대학교, OFFROAD',
      description: 'SOPT다움을 찾아서',
      imageSrc: '/images/members/3.png',
      gmail: 'makers@sopt.org',
    },
    {
      id: 6,
      name: '김소희',
      position: '기획 파트장',
      currentProject: '성신여자대학교',
      description: '함께라면, 어떤 꿈도 현실이 됩니다',
      imageSrc: '/images/members/6.png',
      gmail: 'plan@sopt.org',
    },
    {
      id: 7,
      name: '송예솔',
      position: '디자인 파트장',
      currentProject: 'Lecue, 선약',
      description: '세상을 바꾸는 디자이너들',
      imageSrc: '/images/members/7.png',
      gmail: 'design@sopt.org',
      behance: '208a08e8',
    },
    {
      id: 8,
      name: '배지현',
      position: '안드로이드 파트장',
      currentProject: '건빵, PINGLE, dateroad',
      description: '함께의 힘을 믿습니다.',
      imageSrc: '/images/members/8.png',
      gmail: 'develop@sopt.org',
      github: 'jihyunniiii',
    },
    {
      id: 9,
      name: '한지석',
      position: 'iOS 파트장',
      currentProject: '수원대학교, Recordy',
      description: '나는 더 나은 미래를 위해 싸운다',
      imageSrc: '/images/members/9.png',
      gmail: 'develop@sopt.org',
      github: 'sozohoy',
    },
    {
      id: 10,
      name: '유태승',
      position: '웹 파트장',
      currentProject: '건국대학교, PICKPLE',
      description: '저와 함께 도약할 준비 되셨나요?',
      imageSrc: '/images/members/10.png',
      gmail: 'develop@sopt.org',
      github: 'gudusol',
    },
    {
      id: 11,
      name: '계대환',
      position: '서버 파트장',
      currentProject: 'smeem',
      description: '부드럽고, 성실하고, 능숙하게',
      imageSrc: '/images/members/11.png',
      gmail: 'develop@sopt.org',
    },
  ],
});

export const mockAboutAPI = {
  getAboutInfo,
  getMemberInfo,
};
