import { StaticImageData } from 'next/image';
import { ReactComponent as IcEmail } from '@src/assets/icons/ic_email.svg';
import { ReactComponent as IcFacebook } from '@src/assets/icons/ic_facebook.svg';
import { ReactComponent as IcKakao } from '@src/assets/icons/ic_kakao.svg';
import imgInstagram from '@src/assets/icons/img_instagram.png';

export enum ContactType {
  EMAIL = 'email',
  KAKAO = 'kakao',
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
}

export const contactInDisplayOrder: ContactType[] = [
  ContactType.EMAIL,
  ContactType.KAKAO,
  ContactType.INSTAGRAM,
  ContactType.FACEBOOK,
];

type ContactItem = {
  label: string;
  desc: string;
  thumbnail:
    | {
        type: 'icon';
        src: React.FC;
      }
    | {
        type: 'image';
        src: StaticImageData;
        alt: string;
      };
  link: {
    type: 'open' | 'change-window';
    href: string;
  };
};

export const contactMap: Record<ContactType, ContactItem> = {
  [ContactType.EMAIL]: {
    label: '이메일',
    desc: 'president@sopt.org',
    thumbnail: {
      type: 'icon',
      src: IcEmail,
    },
    link: {
      type: 'change-window',
      href: 'mailto:president@sopt.org',
    },
  },
  [ContactType.KAKAO]: {
    label: '카카오톡 플러스 친구',
    desc: 'SOPT',
    thumbnail: {
      type: 'icon',
      src: IcKakao,
    },
    link: {
      type: 'open',
      href: 'http://pf.kakao.com/_JdTKd',
    },
  },
  [ContactType.INSTAGRAM]: {
    label: '인스타그램',
    desc: '@sopt_official',
    thumbnail: {
      type: 'image',
      src: imgInstagram,
      alt: '@sopt_official',
    },
    link: {
      type: 'open',
      href: 'https://www.instagram.com/sopt_official/',
    },
  },
  [ContactType.FACEBOOK]: {
    label: '페이스북',
    desc: 'clubsopt',
    thumbnail: {
      type: 'icon',
      src: IcFacebook,
    },
    link: {
      type: 'open',
      href: 'https://www.facebook.com/clubsopt/',
    },
  },
};
