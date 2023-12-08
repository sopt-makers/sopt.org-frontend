import { default as ImgIntroCard1 } from '@src/assets/images/img_intro_card1.png';
import { default as ImgIntroCard2 } from '@src/assets/images/img_intro_card2.png';
import { default as ImgIntroCard3 } from '@src/assets/images/img_intro_card3.png';
import { default as ImgMakersCard } from '@src/assets/images/img_main_makers_card.png';
import { default as ImgMindCard } from '@src/assets/images/img_main_mind_card.png';
import { TextWeightType } from '../types/universal';

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

export const OWN_ORGANIZATION_LIST: {
  nameKor: string;
  nameEng: string;
  description: TextWeightType[];
  frontSideBg: string;
  backSideBg: string;
}[] = [
  {
    nameKor: '메이커스',
    nameEng: 'Makers',
    description: [
      { content: 'SOPT를 한 기수 이상 수료한 사람들이 모여 ', weight: 'normal' },
      { content: 'SOPT에 필요한 프로덕트를 만드는 정식 기구', weight: 'bold' },
      {
        content:
          '입니다. 3천여 명의 구성원들을 연결하고 새로운 가치를 제공하기 위한 방법을 끊임없이 고민해요. ',
        weight: 'normal',
      },
      { content: '앞으로도 SOPT를 지속적으로 운영하고자, ', weight: 'bold' },
      {
        content:
          '어떻게 하면 우리의 활동이 더 즐거울 수 있을지, 대내외적으로 잘 알릴 수 있을지 고민할 거예요. ',
        weight: 'normal',
      },
    ],
    frontSideBg: ImgMakersCard.src,
    backSideBg: '#FF7C53',
  },
  {
    nameKor: '마인드',
    nameEng: 'Mind',
    description: [
      { content: 'SOPT MIND는 SOPT 내외에 ', weight: 'normal' },
      { content: '기업가정신과 창업도전 문화 확산 목적', weight: 'bold' },
      {
        content:
          '으로 설립된 기구입니다. 매 기수 SOPT 앱잼 팀이 더 적극적이고 똑똑하게 창업에 도전할 수 있도록 필요한 컨텐츠와 시스템을 고민하고 있어요. ',
        weight: 'normal',
      },
      {
        content:
          'SOPT가 창업동아리임을 잊지 않도록, 그리고 전국에 열정으로 도전하는 SOPT의 MIND가 널리 공유되도록 ',
        weight: 'bold',
      },
      { content: 'MIND도 도전하겠습니다.', weight: 'normal' },
    ],
    frontSideBg: ImgMindCard.src,
    backSideBg: '#F66FF8',
  },
];
