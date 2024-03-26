import { default as ImgAppjam } from '@src/assets/images/img_appjam.jpg';
import { default as ImgEvent } from '@src/assets/images/img_event.jpg';
import { default as ImgIntroCard1 } from '@src/assets/images/img_intro_card1.png';
import { default as ImgIntroCard2 } from '@src/assets/images/img_intro_card2.png';
import { default as ImgIntroCard3 } from '@src/assets/images/img_intro_card3.png';
import { default as ImgMakersCardBigPc } from '@src/assets/images/img_main_makers_card_big_pc.png';
import { default as ImgMakersCardMo } from '@src/assets/images/img_main_makers_card_mo.png';
import { default as ImgMakersCardPc } from '@src/assets/images/img_main_makers_card_pc.png';
import { default as ImgMakersCardTa } from '@src/assets/images/img_main_makers_card_ta.png';
import { default as ImgManageCardBigPc } from '@src/assets/images/img_main_manage_card_big_pc.png';
import { default as ImgManageCardMo } from '@src/assets/images/img_main_manage_card_mo.png';
import { default as ImgManageCardPc } from '@src/assets/images/img_main_manage_card_pc.png';
import { default as ImgManageCardTa } from '@src/assets/images/img_main_manage_card_ta.png';
import { default as ImgMediaCardBigPc } from '@src/assets/images/img_main_media_card_big_pc.png';
import { default as ImgMediaCardMo } from '@src/assets/images/img_main_media_card_mo.png';
import { default as ImgMediaCardPc } from '@src/assets/images/img_main_media_card_pc.png';
import { default as ImgMediaCardTa } from '@src/assets/images/img_main_media_card_ta.png';
import { default as ImgMindCardBigPc } from '@src/assets/images/img_main_mind_card_big_pc.png';
import { default as ImgMindCardMo } from '@src/assets/images/img_main_mind_card_mo.png';
import { default as ImgMindCardPc } from '@src/assets/images/img_main_mind_card_pc.png';
import { default as ImgMindCardTa } from '@src/assets/images/img_main_mind_card_ta.png';
import { default as ImgRecentNews1 } from '@src/assets/images/img_recent_news_1.png';
import { default as ImgRecentNews2 } from '@src/assets/images/img_recent_news_2.jpg';
import { default as ImgRecentNews3 } from '@src/assets/images/img_recent_news_3.jpg';
import { default as ImgRecentNews4 } from '@src/assets/images/img_recent_news_4.webp';
import { default as ImgRecentNews5 } from '@src/assets/images/img_recent_news_5.png';
import { default as ImgSeminar } from '@src/assets/images/img_seminar.jpg';
import { default as ImgSoptkaton } from '@src/assets/images/img_soptkaton.jpg';
import { default as ImgSoptterm } from '@src/assets/images/img_soptterm.jpg';
import { default as ImgStudy } from '@src/assets/images/img_study.jpg';
import {
  ActivityListType,
  ActivityType,
  KeywordListType,
  PartListType,
  RecentNewsListType,
  SoptCommentType,
} from '@src/lib/types/main';
import { Part, TextWeightType } from '@src/lib/types/universal';

export const FIRST_INTRO_CONTENT = 1;
export const LAST_INTRO_CONTENT = 3;

export const Activity: ActivityListType = {
  [ActivityType.APPJAM]: {
    img: ImgAppjam.src,
    navKor: '앱잼',
    navEng: 'App jam',
    description: [
      { content: '4~5주간 ', color: 'yellow' },
      {
        content:
          '기획, 디자인, 개발 파트가 팀을 이뤄 하나의 웹 또는 앱 서비스를 제작하는 솝트 내 장기 ',
        color: 'white',
      },
      { content: '해커톤', color: 'yellow' },
      {
        content: '예요. 데모데이 에서 각 파트 현직자들에게 결과물에 대한 피드백을 받아요.',
        color: 'white',
      },
    ],
  },
  [ActivityType.SOPKATHON]: {
    img: ImgSoptkaton.src,
    navKor: '솝커톤',
    navEng: 'Sopkathon',
    description: [
      { content: '무박 2일', color: 'yellow' },
      {
        content: '간 기획, 디자인, 개발 파트가 팀을 이뤄 최소 단위의 서비스를 제작하는 솝트내 ',
        color: 'white',
      },
      { content: '단기 해커톤', color: 'yellow' },
      {
        content: '예요. 팀 단위의 협업과정을 빠르게 경험할 수 있어요.',
        color: 'white',
      },
    ],
  },
  [ActivityType.SOPTERM]: {
    img: ImgSoptterm.src,
    navKor: '솝텀',
    navEng: 'Sopt-term',
    description: [
      { content: '솝트를 ', color: 'white' },
      {
        content: '한 기수 이상 수료한 회원',
        color: 'yellow',
      },
      {
        content:
          '끼리 모여 자유로운 주제로 IT 프로젝트를 진행해요. SOPT에서 쌓은 실력을 기반으로 보다 ',
        color: 'white',
      },
      { content: '자율적인 프로젝트', color: 'yellow' },
      { content: '를 진행할 수 있어요.', color: 'white' },
    ],
  },
  [ActivityType.SEMINAR]: {
    img: ImgSeminar.src,
    navKor: '정기 세미나',
    navEng: 'Seminar',
    description: [
      { content: '활동 기간 동안 ', color: 'white' },
      { content: '총 8회의 파트별 세미나', color: 'yellow' },
      {
        content:
          '를 통해 각자 자신의 파트에서 실력을 다져요. 각 파트장의 강연, 파트원간의 지식 공유, 외부 연사 초정 등 다양한 세미나가 진행돼요.',
        color: 'white',
      },
    ],
  },
  [ActivityType.STUDY]: {
    img: ImgStudy.src,
    navKor: '스터디',
    navEng: 'Study',
    description: [
      { content: '실력을 심도있게 다질 수 있는 ', color: 'white' },
      { content: '스터디와 다양한 파트원들과 친목을 쌓을 수 있는 네트워킹', color: 'yellow' },
      {
        content: '이 열려요. 자율적으로 개설하고 참여할 수 있어요.',
        color: 'white',
      },
    ],
  },
  [ActivityType.EVENTS]: {
    img: ImgEvent.src,
    navKor: '행사',
    navEng: 'Events',
    description: [
      { content: '솝트 내 운영팀이 기획한 ', color: 'white' },
      { content: '1차, 2차 행사', color: 'yellow' },
      {
        content:
          '가 열려요. 행사 내 다양한 콘텐츠를 통해 모든 파트 회원들과 자연스럽게 유대감을 쌓고 잊지 못 할 즐거운 추억을 만들어요.',
        color: 'white',
      },
    ],
  },
};

export const INTRO_CONTENT_LIST = [
  {
    id: 1,
    title: '열정이 이끄는\n최고 수준의 몰입',
    detail:
      '열정 하나로 뭉친 솝트는 끊임 없이 집중하며 성장합니다.\n언제나 어떤 일에 대해서든 최고 수준의 몰입을 유지합니다.',
    src: ImgIntroCard1.src,
  },
  {
    id: 2,
    title: '가진 것은 무엇이든\n나누는 문화',
    detail:
      '솝트에서는 모두가 자신의 지식과 경험을\n적극적으로 나눕니다. 이를 통해 다양한 관점에서\n세상의 문제를 해결할 수 있습니다.',
    src: ImgIntroCard2.src,
  },
  {
    id: 3,
    title: '함께이기 때문에\n가능한 도전',
    detail:
      '200여 명의 활동 회원, 3000여 명의 명예 회원들과 함께이기에\n그 어떤 목표에도 용기 내어 도전할 수 있습니다.',
    src: ImgIntroCard3.src,
  },
];

export const partList: PartListType = {
  [Part.PLAN]: {
    value: 'Plan',
    label: '기획',
    description:
      '린스타트업에 기초해 고객 문제정의 - 고객 발굴 - 검증 과정을 거쳐 비즈니스 전략과 핵심지표 설계까지 고객 관점 프로덕트를 만들고 운영하기 위한 모든 과정을 다룹니다.',
  },
  [Part.DESIGN]: {
    value: 'Design',
    label: '디자인',
    description:
      'Figma를 활용하여 UX/UI 디자인의 전반적인 프로세스를 배우고, 세미나에서 학습한 UX심리학, 브랜딩, 디자인 시스템 등의 이론을 기획자, 개발자와의 협업 과정에 적용해 보며 근거에 기반한 문제 해결을 경험합니다.',
  },
  [Part.ANDROID]: {
    value: 'Android',
    label: '안드로이드',
    description:
      'Kotlin 언어를 활용해 안드로이드 UI(XML/Compose) 구현 기초/심화, 서버 통신 등 앱 제작에 필요한 내용들을 배웁니다. 세미나, 정규 미미나를 통해 다양한 문제 상황을 해결할 수 있는 역량을 기르며 타 파트와의 협업을 통해 직접 서비스를 제작하는 경험을 얻을 수 있습니다.',
  },
  [Part.IOS]: {
    value: 'iOS',
    label: 'iOS',
    description:
      'Swift와 UI Kit를 이용해 iOS 앱 서비스를 만들 수 있습니다. iOS가 처음인 분들을 위한왕초보 스터디와 보충 세미나, 실력적 도약을 위한 심화 세미나까지 존재합니다.',
  },
  [Part.WEB]: {
    value: 'Web',
    label: '웹',
    description:
      'HTML, CSS, JavaScript로 기초를 다지고 React를 활용해 UI구현, 서버 통신, 다양한 라이브러리 사용 등 웹 서비스 개발에 필요한 역량들을 기초부터 심화까지 학습합니다. 또한 기획자, 디자이너, 서버 개발자와의 협업을 통해 나만의 웹 서비스를 만드는 경험을 해보실 수 있습니다.',
  },
  [Part.SERVER]: {
    value: 'Server',
    label: '서버',
    description:
      '세미나를 통해 Spring 프레임워크, 관계형 데이터베이스, AWS, Docker를 기반으로 실제 서비스를 위한 서버 구축의 전반적인 내용을 배웁니다.또한 스터디와 코드리뷰, 미니 세미나를 등 개발 실력의 도약과 기획파트, 디자인파트, 클라이언트 파트와 협업을 통해 협업 방식을 익힐 수 있습니다.',
  },
};

const yellowStyle = {
  backgroundColor: '#FFB800',
  color: '#1B2136',
};

const blueStyle = {
  backgroundColor: 'rgba(64, 106, 255, 0.70)',
  color: '#fff',
};

const indigoStyle = {
  backgroundColor: 'rgba(27, 33, 54, 0.70)',
  color: '#fff',
};

const skyStyle = {
  backgroundColor: '#65D1FF',
  color: '#1B2136',
};

const greenStyle = {
  backgroundColor: '#9FFF40',
  color: '#1B2136',
};

export const keywordList: KeywordListType = {
  [Part.PLAN]: [
    {
      content: '린스타트업 기초',
      ...yellowStyle,
      desktop: { top: '92.97px', right: '11.34vw' },
      tablet: { top: '258px', right: '8.59vw' },
      mobile: { top: '148px', right: '10.74vw' },
    },
    {
      content: 'IT 프로덕트 기획',
      ...indigoStyle,
      desktop: { top: '157.13px', right: '18.39vw' },
      tablet: { top: '297px', right: '29.03vw' },
      mobile: { top: '177px', right: '27.1vw' },
    },
    {
      content: '전반적인 매니징',
      ...blueStyle,
      desktop: { top: '282.28px', right: '12.55vw' },
      tablet: { top: '383px', right: '11.06vw' },
      mobile: { top: '223px', right: '12.86vw' },
    },
  ],
  [Part.DESIGN]: [
    {
      content: '피그마와 같은 협업툴',
      ...skyStyle,
      desktop: { top: '92.97px', right: '9.15vw' },
      tablet: { top: '259px', right: '5.72vw' },
      mobile: { top: '149.28px', right: '5.98vw' },
    },
    {
      content: 'UX/UI 전반적 과정',
      ...indigoStyle,
      desktop: { top: '157.13px', right: '17.09vw' },
      tablet: { top: '306px', right: '20.18vw' },
      mobile: { top: '176.14px', right: '20.9vw' },
    },
    {
      content: '새로운 프로덕트',
      ...blueStyle,
      desktop: { top: '282.28px', right: '12.55vw' },
      tablet: { top: '386px', right: '11.97vw' },
      mobile: { top: '222.02px', right: '12.38vw' },
    },
  ],
  [Part.ANDROID]: [
    {
      content: 'UI 구현 기초/심화',
      ...yellowStyle,
      desktop: { top: '117.6px', right: '6.16vw' },
      tablet: { top: '305px', right: '6.38vw' },
      mobile: { top: '174px', right: '6.07vw' },
    },
    {
      content: 'Kotlin 언어 활용',
      ...indigoStyle,
      desktop: { top: '96px', right: 'calc(115px + 10vw)' },
      tablet: { top: '289px', right: 'calc(110px + 10.15vw)' },
      mobile: { top: '165px', right: 'calc(50px + 14.06vw)' },
    },
    {
      content: '서버 통신',
      ...blueStyle,
      desktop: { top: '232px', right: '7.34vw' },
      tablet: { top: '372px', right: '8.85vw' },
      mobile: { top: '210px', right: '10.74vw' },
    },
    {
      content: '페어 프로그래밍',
      ...greenStyle,
      desktop: { top: '278.38px', right: 'calc(50px + 10vw)' },
      tablet: { top: '378px', right: '28.77vw' },
      mobile: { top: '213px', right: '29.43vw' },
    },
  ],
  [Part.IOS]: [
    {
      content: 'iOS 앱 서비스',
      ...indigoStyle,
      desktop: { top: '82.31px', right: 'calc(102px + 10vw)' },
      tablet: { top: '285px', right: 'calc(100px + 9.11vw)' },
      mobile: { top: '178px', right: 'calc(50px + 12vw)' },
    },
    {
      content: 'Swift와 UI Kit',
      ...yellowStyle,
      desktop: { top: '117.6px', right: '6.72vw' },
      tablet: { top: '314px', right: '6.38vw' },
      mobile: { top: '188px', right: '6.07vw' },
    },
    {
      content: '보충 및 심화 세미나',
      backgroundColor: '#D65438',
      color: '#fff',
      desktop: { top: '223.74px', right: 'calc(33px + 5vw)' },
      tablet: { top: '390px', right: '16.79vw' },
      mobile: { top: '235px', right: '15.42vw' },
    },
    {
      content: '왕초보 스터디',
      ...blueStyle,
      desktop: { top: '275.88px', right: '19.02vw' },
      tablet: { top: '350px', right: '33.97vw' },
      mobile: { top: '212px', right: '38.78vw' },
    },
  ],
  [Part.WEB]: [
    {
      content: '웹 서비스 개발',
      ...yellowStyle,
      desktop: { top: '92.97px', right: '12.06vw' },
      tablet: { top: '301px', right: '10.93vw' },
      mobile: { top: '170px', right: '13.08vw' },
    },
    {
      content: '기초부터 심화까지',
      ...indigoStyle,
      desktop: { top: '157.13px', right: '17.66vw' },
      tablet: { top: '354px', right: '27.47vw' },
      mobile: { top: '200px', right: '29vw' },
    },
    {
      content: 'UI구현과 서버 통신',
      ...skyStyle,
      desktop: { top: '282.28px', right: '11.25vw' },
      tablet: { top: '382px', right: '8.33vw' },
      mobile: { top: '215px', right: '10.74vw' },
    },
  ],
  [Part.SERVER]: [
    {
      content: '서버 애플리케이션 구축',
      ...greenStyle,
      desktop: { top: '92.97px', right: '8.16vw' },
      tablet: { top: '301px', right: '10.10vw' },
      mobile: { top: '178px', right: '15.42vw' },
    },
    {
      content: '관계형 데이터베이스',
      ...indigoStyle,
      desktop: { top: '157.13px', right: 'calc(30px + 3.69vw)' },
      tablet: { top: '346px', right: '4.2vw' },
      mobile: { top: '203px', right: '8.4vw' },
    },
    {
      content: 'AWS 기반',
      ...skyStyle,
      desktop: { top: '192px', right: 'calc(110px + 15.1vw)' },
      tablet: { top: '323px', right: 'calc(100px + 22vw)' },
      mobile: { top: '196px', right: '45.79vw' },
    },
    {
      content: 'Spring 프레임 워크',
      ...blueStyle,
      desktop: { top: '282.28px', right: '10.83vw' },
      tablet: { top: '389px', right: '23vw' },
      mobile: { top: '235px', right: '25.7vw' },
    },
  ],
};

export const OWN_ORGANIZATION_LIST: {
  nameKor: string;
  nameEng: string;
  description: TextWeightType[];
  frontSideBg: { mo: string; pc: string; ta: string; bigPc: string };
  backSideBg: string;
}[] = [
  {
    nameKor: '운영팀',
    nameEng: 'Manage',
    description: [
      { content: '운영팀은 솝트의 ', weight: 'normal' },
      { content: '1, 2차 행사와 다양한 이벤트를 직접 브랜딩, 기획, 진행하며', weight: 'bold' },
      {
        content:
          ' 회원들간의 네트워킹을 도모해요. 솝트 구성원들이 재미있게 행사를 즐기고, 다양한 사람들과의 네트워킹을 통해 ',
        weight: 'normal',
      },
      { content: '더욱 더 소중하고 기억에 남는 솝트 생활', weight: 'bold' },
      {
        content: '을 만들어 가실 수 있도록 도와요.',
        weight: 'normal',
      },
    ],
    frontSideBg: {
      bigPc: ImgManageCardBigPc.src,
      pc: ImgManageCardPc.src,
      ta: ImgManageCardTa.src,
      mo: ImgManageCardMo.src,
    },
    backSideBg: '#FFC700',
  },
  {
    nameKor: '미디어팀',
    nameEng: 'Media',

    description: [
      { content: '미디어팀은 솝트의 핵심 가치를 실현하는 ', weight: 'normal' },
      {
        content:
          '구성원들의 다양한 활동을 기록하고 인스타그램과 유튜브 등의 매체를 통해 솝트를 대내외적으로 홍보해요.',
        weight: 'bold',
      },
      {
        content:
          ' 다양한 활동 스케치 영상, 인터뷰 등 솝트에서의 잊지 못할 기억을 기록하고 있어요. ',
        weight: 'normal',
      },
    ],
    frontSideBg: {
      bigPc: ImgMediaCardBigPc.src,
      pc: ImgMediaCardPc.src,
      ta: ImgMediaCardTa.src,
      mo: ImgMediaCardMo.src,
    },
    backSideBg: '#3E74FD',
  },
  {
    nameKor: '마인드',
    nameEng: 'Mind',
    description: [
      { content: '솝트 MIND는 솝트 내외에 ', weight: 'normal' },
      { content: '기업가정신과 창업도전 문화 확산 목적', weight: 'bold' },
      {
        content:
          '으로 하는 기구입니다. 매 기수 솝트 앱잼 팀이 더 적극적이고 똑똑하게 창업에 도전할 수 있도록 필요한 콘텐츠와 시스템을 고민하고 있어요. ',
        weight: 'normal',
      },
      {
        content:
          '솝트가 창업동아리 임을 잊지 않도록, 그리고 전국에 열정으로 도전하는 솝트의 MIND가 널리 공유되도록',
        weight: 'bold',
      },
      { content: ' MIND도 도전하겠습니다.', weight: 'normal' },
    ],
    frontSideBg: {
      bigPc: ImgMindCardBigPc.src,
      pc: ImgMindCardPc.src,
      ta: ImgMindCardTa.src,
      mo: ImgMindCardMo.src,
    },
    backSideBg: '#F66FF8',
  },
  {
    nameKor: '메이커스',
    nameEng: 'Makers',
    description: [
      { content: '솝트를 한 기수 이상 수료한 사람들이 모여 ', weight: 'normal' },
      { content: '솝트에 필요한 프로덕트를 만드는', weight: 'bold' },
      {
        content:
          ' 정식 기구 입니다. 3천여 명의 구성원들을 연결하고 새로운 가치를 제공하기 위한 방법을 끊임없이 고민해요. ',
        weight: 'normal',
      },
      { content: '앞으로도 솝트를 지속적으로 운영하고자, ', weight: 'bold' },
      {
        content:
          '어떻게 하면 우리의 활동이 더 즐거울 수 있을지, 대내외적으로 잘 알릴 수 있을지 고민할 거예요. ',
        weight: 'normal',
      },
    ],
    frontSideBg: {
      bigPc: ImgMakersCardBigPc.src,
      pc: ImgMakersCardPc.src,
      ta: ImgMakersCardTa.src,
      mo: ImgMakersCardMo.src,
    },
    backSideBg: '#FF7C53',
  },
];

export const RecentNewsList: RecentNewsListType[] = [
  {
    title: 'SOPT effect : 창업가 초청 토크 세션',
    url: 'https://www.instagram.com/p/CyfhEG9vfYd/?igshid=MXN0YWlnaGppbXZrZw==',
    src: ImgRecentNews1.src,
  },
  {
    title: 'DO SOPT OT',
    url: 'https://www.instagram.com/reel/CySiLMNPRAk/?igshid=MW1icW5rZWI3dXJrbQ==',
    src: ImgRecentNews2.src,
  },
  {
    title: '[매쉬업엔젤스 X SOPT] Open Office Hours',
    url: 'https://disquiet.io/@mashupangels/makerlog/%EB%A7%A4%EC%89%AC%EC%97%85%EC%97%94%EC%A0%A4%EC%8A%A4-open-office-hours-%EC%B0%B8%EC%97%AC%EC%9E%90%EB%A5%BC-%EB%AA%A8%EC%A7%91%ED%95%A9%EB%8B%88%EB%8B%A4-1697441246806',
    src: ImgRecentNews3.src,
  },
  {
    title: 'MIND 23 : IT PEOPLE CONFERENCE',
    url: 'https://disquiet.io/product/mind-23-%EC%98%A4%EB%8A%98%EB%8F%84-%EB%A9%88%EC%B6%94%EC%A7%80-%EC%95%8A%EB%8A%94-it%EC%9D%B8%EB%93%A4',
    src: ImgRecentNews4.src,
  },
  {
    title: 'DO SOPT 1차 행사',
    url: 'https://www.instagram.com/p/Cz3GJOpvcBz/?img_index=1',
    src: ImgRecentNews5.src,
  },
];

export const SOPT_COMMENT_LIST: SoptCommentType[] = [
  {
    summary: '후회없는 활동',
    color: '#FF7C53',
    comment:
      '후회없는 활동. 좋은 사람들도 많이 만났고 기획분야를 제대로 배울 수 있었던 기회였어요. 대학생활 마지막 대외 활동이었지만, 회사 일을 하면서도 미련을 못버리고 메이커스나 솝텀을 기웃거려요. 엄청 오랜 기간동안 애정을 담고 있는 단체예요.',
    commenter: {
      name: '김나연',
      history: '25, 26, 27기 활동',
      part: '기획',
    },
  },
  {
    summary: '넓어지는 시야',
    color: '#FFC700',
    comment:
      '나름 많은 경험을 해왔다고 자부했는데, SOPT에서 제가 여전히 "우물 안 개구리"라는 것을 깨달았어요. SOPT를 통해 세상을 더 넓은 시야로 볼 수 있게 됐습니다. 자신의 것을 아낌없이 공유하는 건강한 조직과 똑똑한 사람들에게 많이 그리고 즐겁게 배웠어요.',
    commenter: {
      name: '조성아',
      history: '32기 활동',
      part: '기획',
    },
  },

  {
    summary: '인생의\n터닝포인트',
    color: '#3E74FD',
    comment:
      '활동을 더 일찍 시작하지 못한 것이 유일하게 남는 후회일 정도로 SOPT를 통해 많이 성장했다고 느껴요. 커리어적인 부분에서 방향성을 정할 수 있었던, 인생의 터닝포인트와 같은 활동이었어요.',
    commenter: {
      name: '권소희',
      history: '27, 28, 29, 31기 활동',
      part: '웹',
    },
  },
  {
    summary: '함께하는 도전,\n열정의 실천',
    color: '#F66FF8',
    comment:
      'IT에 대한 배경지식이 많이 부족한 상태로 왔었지만, 정말 후회없고 행복한 시간이었어요. 모르는 것에 대해 부끄러워하는 것이 아닌 함께 알려주고 성장하는 문화, 도전을 두려워하지 않는 멋진 사람들, 활동하며 배우고 체화하게 되는 세미나 내용 등 SOPT와 함께 열정을 실천하는 과정에서 정말 많이 배우고 즐거웠어요.',
    commenter: {
      name: '이승헌',
      history: '30, 33기 활동',
      part: '기획',
    },
  },
  {
    summary: '깊이있는 학습,\n협업의 즐거움',
    color: '#FF7C53',
    comment:
      'YB 때는 개발의 시작을 SOPT에서 했는데 다양한 분야의 동료들과 협업하며 도움을 받아 빠르게 성장할 수 있었어요. OB 때는 기술적인 고민들을 동료들과 나누며 더욱 깊이있게 학습해 내실을 다질 수 있었고, 이를 YB들에게 공유하면서 소통하며 협업하는 것의 즐거움과 함께 성장하는 가치를 배울 수 있어 좋았어요.',
    commenter: {
      name: '한승현',
      history: '28, 29, 30기 활동',
      part: '안드로이드',
    },
  },
  {
    summary: '성취감, 자신감',
    color: '#FFC700',
    comment:
      '열정 넘치는 사람들과 함께하면서 긍정적인 에너지를 많이 얻었고, 혼자였다면 해내기 어려웠을 일들을 성취하는데 많은 도움이 되었어요. 미친듯이 몰입하는 경험을 통해 성취감 및 자신감을 얻었을뿐만 아니라, 앱잼 등 프로젝트를 진행하며 효율적으로 협업하는 방법을 배웠어요.',
    commenter: {
      name: '권소희',
      history: '27, 28, 29, 31기 활동',
      part: '웹',
    },
  },
  {
    summary: '유의미한 배움',
    color: '#3E74FD',
    comment:
      '솝트에서 안드로이드를 처음 접하게 되었는데요, 세미나로 내용을 익히고 과제를 하며 금잔디 조원들과 디스코드에서 코드 띄워 놓고 토론도 해보고 코드리뷰로 서로 도움을 주고 받으며 성장했습니다. 그리고 솝커톤으로 무박2일의 개발 경험도 가져보고 앱잼으로 밤낮 없이 합숙하고 끝내 릴리즈 경험까지! 그리고 가장 중요한 저희 팀이 생겼습니다! 너무 유의미하고 재미있는 1년이었어요.',
    commenter: {
      name: '김하정',
      history: '31, 32기 활동',
      part: '안드로이드',
    },
  },
];
