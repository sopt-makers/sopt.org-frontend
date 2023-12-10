import { default as ImgIntroCard1 } from '@src/assets/images/img_intro_card1.png';
import { default as ImgIntroCard2 } from '@src/assets/images/img_intro_card2.png';
import { default as ImgIntroCard3 } from '@src/assets/images/img_intro_card3.png';
import { KeywordListType, PartListType } from '@src/lib/types/main';
import { Part } from '@src/lib/types/universal';

export const INTRO_CONTENT_LIST = [
  {
    id: 1,
    title: '열정이 이끄는\n최고 수준의 몰입',
    detail:
      '열정 하나로 뭉친 SOPT는 끊임 없이 집중하며 성장합니다.\n언제나 어떤 일에 대해서든 최고 수준의 몰입을 유지합니다.',
    src: ImgIntroCard1.src,
  },
  {
    id: 2,
    title: '가진 것은 무엇이든\n나누는 문화',
    detail:
      'SOPT에서는 모두가 자신의 지식과 경험을\n적극적으로 나눕니다. 이를 통해 다양한 관점에서\n세상의 문제를 해결할 수 있습니다.',
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

export const FIRST_INTRO_CONTENT = 1;
export const LAST_INTRO_CONTENT = 3;

export const partList: PartListType = {
  [Part.PLAN]: {
    value: 'Plan',
    label: '기획',
    description: [
      { content: '린스타트업에 기초', weight: 'bold' },
      {
        content: '하여 고객 시장 분석 - 문제정의 - 가설 검증 - 솔루션/BM 도출- 전략 수립까지 ',
        weight: 'normal',
      },
      { content: 'IT 프로덕트를 기획', weight: 'bold' },
      { content: '하고 ', weight: 'normal' },
      { content: '매니징하는 전과정을 경험', weight: 'bold' },
      { content: '합니다.', weight: 'normal' },
    ],
  },
  [Part.DESIGN]: {
    value: 'Design',
    label: '디자인',
    description: [
      { content: '피그마와 같은 협업툴', weight: 'bold' },
      { content: '을 통해 ', weight: 'normal' },
      { content: 'UX/UI 디자인의 전반적인 과정', weight: 'bold' },
      { content: '을 배우고 기획자, 개발자와 함께 ', weight: 'normal' },
      { content: '새로운 프로덕트', weight: 'bold' },
      { content: '를 만들어 내는 과정에 참여합니다.', weight: 'normal' },
    ],
  },
  [Part.ANDROID]: {
    value: 'Android',
    label: '안드로이드',
    description: [
      { content: 'Kotlin 언어를 활용', weight: 'bold' },
      { content: '해 안드로이드 ', weight: 'normal' },
      { content: 'UI 구현 기초/심화', weight: 'bold' },
      { content: '부터 ', weight: 'normal' },
      { content: '서버 통신 ', weight: 'bold' },
      {
        content: '등 앱 제작에 필요한 내용들을 배웁니다. 안드로이드에 몰입할 수 있는 세미나, ',
        weight: 'normal',
      },
      { content: '페어 프로그래밍', weight: 'bold' },
      { content: '을 통한 실습, 스터디, 합동세미나 등 여러 활동에 참여합니다.', weight: 'normal' },
    ],
  },
  [Part.IOS]: {
    value: 'iOS',
    label: 'iOS',
    description: [
      { content: 'Swift와 UI Kit', weight: 'bold' },
      { content: '를 이용해서 ', weight: 'normal' },
      { content: 'iOS 앱 서비스', weight: 'bold' },
      {
        content: '를 만들 수 있는 능력을 기를 수 있습니다. iOS가 처음인 분들을 위한',
        weight: 'normal',
      },
      { content: '왕초보 스터디', weight: 'bold' },
      { content: '와 ', weight: 'normal' },
      { content: '보충 세미나', weight: 'bold' },
      { content: ', 그리고 실력적 도약을 위한 ', weight: 'normal' },
      { content: '심화 세미나', weight: 'bold' },
      {
        content:
          '까지. 자신의 성장을 위해 열정적으로 도전하는 사람들과 함께 활동에 필요한 부분들을 학습할 수 있습니다.',
        weight: 'normal',
      },
    ],
  },
  [Part.WEB]: {
    value: 'Web',
    label: '웹',
    description: [
      { content: 'UI 구현, 서버 통신 등 ', weight: 'normal' },
      { content: '웹 서비스 개발', weight: 'bold' },
      { content: '에 필요한 역량들을 ', weight: 'normal' },
      { content: '기초부터 심화까지 ', weight: 'bold' },
      {
        content:
          '학습합니다. 또한 기획자, 디자이너, 서버 개발자와의 협업 경험을 통해 개발 협업 방식을 익힐 수 있습니다.',
        weight: 'normal',
      },
    ],
  },
  [Part.SERVER]: {
    value: 'Server',
    label: '서버',
    description: [
      { content: 'Spring 프레임 워크', weight: 'bold' },
      { content: ', ', weight: 'normal' },
      { content: '관계형 데이터베이스', weight: 'bold' },
      {
        content: '와',
        weight: 'normal',
      },
      { content: 'AWS를 기반', weight: 'bold' },
      { content: '으로 ', weight: 'normal' },
      { content: '서버 애플리케이션을 구축', weight: 'bold' },
      {
        content:
          '하고 운영하는 과정을 학습합니다. 또한 세미나, 코드리뷰, 스터디를 통해 개발 실력을 증진시키고, 기획자, 디자이너, 클라이언트 개발자와의 협업을 통해 협업 방식을 익힐 수 있습니다.',
        weight: 'normal',
      },
    ],
  },
};

export const keywordList: KeywordListType = {
  [Part.PLAN]: [
    {
      content: '린스타트업 기초',
      backgroundColor: '#FFB800',
      color: '#1B2136',
      top: '92.97px',
      right: '217.71px',
    },
    {
      content: 'IT 프로덕트 기획',
      backgroundColor: 'rgba(27, 33, 54, 0.70)',
      color: '#fff',
      top: '157.13px',
      right: '353.2px',
    },
    {
      content: '전반적인 매니징',
      backgroundColor: 'rgba(64, 106, 255, 0.70)',
      color: '#fff',
      top: '282.28px',
      right: '241.04px',
    },
  ],
  [Part.DESIGN]: [
    {
      content: '피그마와 같은 협업툴',
      backgroundColor: '#65D1FF',
      color: '#1B2136',
      top: '92.97px',
      right: '175.71px',
    },
    {
      content: 'UX/UI 전반적 과정',
      backgroundColor: 'rgba(27, 33, 54, 0.70)',
      color: '#fff',
      top: '157.13px',
      right: '328.2px',
    },
    {
      content: '새로운 프로덕트',
      backgroundColor: 'rgba(64, 106, 255, 0.70)',
      color: '#fff',
      top: '282.28px',
      right: '241.04px',
    },
  ],
  [Part.ANDROID]: [
    {
      content: 'UI 구현 기초/심화',
      backgroundColor: '#FFB800',
      color: '#1B2136',
      top: '117.6px',
      right: '118.42px',
    },
    {
      content: 'Kotlin 언어 활용',
      backgroundColor: 'rgba(27, 33, 54, 0.70)',
      color: '#fff',
      top: '96px',
      right: '307.71px',
    },
    {
      content: '서버 통신',
      backgroundColor: 'rgba(64, 106, 255, 0.70)',
      color: '#fff',
      top: '232px',
      right: '141.08px',
    },
    {
      content: '페어 프로그래밍',
      backgroundColor: '#9FFF40',
      color: '#1B2136',
      top: '278.38px',
      right: '241.04px',
    },
  ],
  [Part.IOS]: [
    {
      content: 'iOS 앱 서비스',
      backgroundColor: 'rgba(27, 33, 54, 0.70)',
      color: '#fff',
      top: '82.31px',
      right: '294.93px',
    },
    {
      content: 'Swift와 UI Kit',
      backgroundColor: '#FFB800',
      color: '#1B2136',
      top: '117.6px',
      right: '129.08px',
    },
    {
      content: '보충 및 심화 세미나',
      backgroundColor: '#D65438',
      color: '#fff',
      top: '223.74px',
      right: '129.08px',
    },
    {
      content: '왕초보 스터디',
      backgroundColor: 'rgba(64, 106, 255, 0.70)',
      color: '#fff',
      top: '275.88px',
      right: '365.24px',
    },
  ],
  [Part.WEB]: [
    {
      content: '웹 서비스 개발',
      backgroundColor: '#FFB800',
      color: '#1B2136',
      top: '92.97px',
      right: '231.71px',
    },
    {
      content: '기초부터 심화까지',
      backgroundColor: 'rgba(27, 33, 54, 0.70)',
      color: '#fff',
      top: '157.13px',
      right: '339.2px',
    },
    {
      content: 'UI구현과 서버 통신',
      backgroundColor: '#65D1FF',
      color: '#1B2136',
      top: '282.28px',
      right: '216.04px',
    },
  ],
  [Part.SERVER]: [
    {
      content: '서버 애플리케이션 구축',
      backgroundColor: '#9FFF40',
      color: '#1B2136',
      top: '92.97px',
      right: '156.71px',
    },
    {
      content: '관계형 데이터베이스',
      backgroundColor: 'rgba(27, 33, 54, 0.70)',
      color: '#fff',
      top: '157.13px',
      right: '101.2px',
    },
    {
      content: 'AWS 기반',
      backgroundColor: '#65D1FF',
      color: '#1B2136',
      top: '192px',
      right: '400.2px',
    },
    {
      content: 'Spring 프레임 워크',
      backgroundColor: 'rgba(64, 106, 255, 0.70)',
      color: '#fff',
      top: '282.28px',
      right: '208.04px',
    },
  ],
};
