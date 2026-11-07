import facebook from '@src/assets/icons/ic_facebook_filled.svg';
import instagram from '@src/assets/icons/ic_instagram_filled.svg';
import kakao from '@src/assets/icons/ic_kakao_filled.svg';
import mail from '@src/assets/icons/ic_mail.svg';
import youtube from '@src/assets/icons/ic_youtube_filled.svg';
import { EXTERNAL_LINKS } from './routes';

export const channels = [
  { name: '메일', href: `mailto:${EXTERNAL_LINKS.EMAIL}`, icon: mail },
  { name: '페이스북', href: EXTERNAL_LINKS.FACEBOOK, icon: facebook },
  { name: '인스타그램', href: EXTERNAL_LINKS.INSTAGRAM, icon: instagram },
  { name: '카카오톡 채널', href: EXTERNAL_LINKS.KAKAO, icon: kakao },
  { name: '유튜브', href: EXTERNAL_LINKS.YOUTUBE, icon: youtube },
];
