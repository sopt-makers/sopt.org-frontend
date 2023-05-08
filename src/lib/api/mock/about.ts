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

const getMemberInfo = async (part?: Part): Promise<GetMembersInfoResponse> => ({
  members: Array.from({ length: 12 }, () =>
    (part ? [part] : [Part.PLAN, Part.ANDROID, Part.DESIGN, Part.IOS, Part.SERVER, Part.WEB]).map(
      (part) => ({
        id: Math.floor(Math.random() * 200),
        name: '이주함',
        description: `2023년 현존하는 최고의 ${part}`,
        part,
        src: SRC,
      }),
    ),
  ).flat(),
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
