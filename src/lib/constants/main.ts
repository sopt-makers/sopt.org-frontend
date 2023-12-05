import { default as ImgAppjam } from '@src/assets/images/img_appjam.jpg';
import { default as ImgEvent } from '@src/assets/images/img_event.jpg';
import { default as ImgIntroCard1 } from '@src/assets/images/img_intro_card1.png';
import { default as ImgIntroCard2 } from '@src/assets/images/img_intro_card2.png';
import { default as ImgIntroCard3 } from '@src/assets/images/img_intro_card3.png';
import { default as ImgSeminar } from '@src/assets/images/img_seminar.jpg';
import { default as ImgSoptkaton } from '@src/assets/images/img_soptkaton.jpg';
import { default as ImgSoptterm } from '@src/assets/images/img_soptterm.jpg';
import { default as ImgStudy } from '@src/assets/images/img_study.jpg';
import { ActivityType } from '../types/main';

export const FIRST_INTRO_CONTENT = 1;
export const LAST_INTRO_CONTENT = 3;

export const Activity: ActivityType[] = [
  {
    img: ImgAppjam.src,
    navKor: '앱잼',
    navEng: 'App jam',
    description: [
      { content: '3~5주간 ', color: 'yellow' },
      {
        content:
          '기획, 디자인, 개발 파트가 팀을 이뤄 하나의 웹 또는 앱 서비스를 제작하는 SOPT 내 장기 프로젝트예요. IT 창업을 위한 협업 과정을 경험하고, 최종 ',
        color: 'white',
      },
      { content: '데모데이 ', color: 'yellow' },
      { content: '에서 ', color: 'white' },
      { content: '각 파트 현직자들', color: 'yellow' },
      { content: '과 결과물을 공유하고 피드백을 받아요.', color: 'white' },
    ],
  },
  {
    img: ImgSoptkaton.src,
    navKor: '솝커톤',
    navEng: 'Sopkaton',
    description: [
      { content: '무박 2일 ', color: 'yellow' },
      {
        content: '간 기획, 디자인, 개발 파트가 팀을 이뤄 최소 단위의 서비스를 제작하는 SOPT내 ',
        color: 'white',
      },
      { content: '단기 프로젝트', color: 'yellow' },
      {
        content:
          '예요. 앱잼에 앞서 팀 단위의 협업 과정을 빠르게 경험하며, IT 프로젝트에 대한 협업 감각을 익힐 수 있어요.',
        color: 'white',
      },
    ],
  },
  {
    img: ImgSoptterm.src,
    navKor: '솝텀',
    navEng: 'Sopt-term',
    description: [
      { content: 'SOPT를 ', color: 'white' },
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
  {
    img: ImgSeminar.src,
    navKor: '정기 세미나',
    navEng: 'Seminar',
    description: [
      { content: '활동 기간 동안 ', color: 'white' },
      { content: '총 8회의 파트별 세미나', color: 'yellow' },
      {
        content:
          '를 통해 각자 자신의 파트에서 실력을 다져요. 각 파트장의 강연, 파트원간의 지식 공유, 외부 연사 초정 등 다양한 유형의 세미나가 진행돼요.',
        color: 'white',
      },
    ],
  },
  {
    img: ImgStudy.src,
    navKor: '스터디',
    navEng: 'Study',
    description: [
      { content: '각 파트의 실력을 심도있게 다질 수 있는 ', color: 'white' },
      { content: '스터디와 다양한 파트원들과 친목을 쌓을 수 있는 네트워킹', color: 'yellow' },
      {
        content: '이 열려요. 자율적으로 참여하며 SOPT 활동을 더욱 유익하게 만들어 나갈 수 있어요.',
        color: 'white',
      },
    ],
  },
  {
    img: ImgEvent.src,
    navKor: '행사',
    navEng: 'Events',
    description: [
      { content: '운영팀', color: 'yellow' },
      { content: '에서는 SOPT 회원들의 원활한 ', color: 'white' },
      { content: '네트워킹', color: 'yellow' },
      { content: '을 위한 다양한 행사를 기획해요. ', color: 'white' },
      { content: '미디어팀', color: 'yellow' },
      { content: '에서는 SOPT의 활동과 관련된 ', color: 'white' },
      { content: '콘텐츠를 제작', color: 'yellow' },
      {
        content: '하여 SOPT를 대내외적으로 알려요.',
        color: 'white',
      },
    ],
  },
];

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
