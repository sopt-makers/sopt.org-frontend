import { Activity } from '@src/lib/constants/main';
import { ActivityLinkType, ActivityType } from '@src/lib/types/main';

export interface ActivityItem {
  type: ActivityType;
  ko: string;
  en: string;
  img: string;
  description: string;
  link?: ActivityLinkType;
}

const ORDER: { type: ActivityType; en: string }[] = [
  { type: ActivityType.APPJAM, en: 'App jam' },
  { type: ActivityType.SOPKATHON, en: 'Sopkathon' },
  { type: ActivityType.JOIN_SEMINAR, en: 'Joint Seminar' },
  { type: ActivityType.EVENTS, en: 'Networking' },
  { type: ActivityType.SEMINAR, en: 'Seminar' },
  { type: ActivityType.STUDY, en: 'Study' },
];

export const ACTIVITIES: ActivityItem[] = ORDER.map(({ type, en }) => {
  const { navKor, img, description, link } = Activity[type];
  return {
    type,
    ko: navKor,
    en,
    img,
    description: description.map(({ content }) => content.trim()).join(' '),
    link,
  };
});
