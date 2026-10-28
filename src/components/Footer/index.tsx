import Link from 'next/link';
import facebook from '@src/assets/icons/ic_facebook_filled.svg';
import instagram from '@src/assets/icons/ic_instagram_filled.svg';
import kakao from '@src/assets/icons/ic_kakao_filled.svg';
import mail from '@src/assets/icons/ic_mail.svg';
import youtube from '@src/assets/icons/ic_youtube_filled.svg';
import { imgLogoSopt } from '@src/assets/mainLogo';
import { EXTERNAL_LINKS, PATHS } from '@src/lib/constants/routes';
import * as S from './style';

const channels = [
  { name: '메일', href: `mailto:${EXTERNAL_LINKS.EMAIL}`, icon: mail },
  {
    name: '페이스북',
    href: EXTERNAL_LINKS.FACEBOOK,
    icon: facebook,
  },
  {
    name: '인스타그램',
    href: EXTERNAL_LINKS.INSTAGRAM,
    icon: instagram,
  },
  {
    name: '카카오톡 채널',
    href: EXTERNAL_LINKS.KAKAO,
    icon: kakao,
  },
  {
    name: '유튜브',
    href: EXTERNAL_LINKS.YOUTUBE,
    icon: youtube,
  },
];

export default function Footer() {
  return (
    <S.Container>
      <S.Brand>
        <S.Logo src={imgLogoSopt.src} alt="SOPT" width={87} height={30} />
        <S.Copyright>
          SOPT (솝트, 대학생연합 IT벤처창업 동아리)
          <br />
          Copyright © 2026 SOPT. All rights reserved.
        </S.Copyright>
      </S.Brand>

      <S.Columns>
        <S.Column>
          <S.Title>바로가기</S.Title>
          <Link href={PATHS.RULES}>SOPT 회칙</Link>
          <a href={EXTERNAL_LINKS.PRIVACY_POLICY} target="_blank" rel="noopener noreferrer">
            개인정보처리방침
          </a>
          <a href={EXTERNAL_LINKS.MAKERS} target="_blank" rel="noopener noreferrer">
            만든 사람들
          </a>
          <button
            type="button"
            onClick={() => window.Kakao.Channel.chat({ channelPublicId: '_sxaIWG' })}
          >
            의견 제안하기
          </button>
        </S.Column>

        <S.Column>
          <S.Title>문의 창구</S.Title>
          <a href={EXTERNAL_LINKS.KAKAO} target="_blank" rel="noopener noreferrer">
            지원 문의
          </a>
          <a href={`mailto:${EXTERNAL_LINKS.EMAIL}`}>후원·제휴 문의</a>
        </S.Column>

        <S.Column>
          <S.Title>SOPT 채널</S.Title>
          <S.Channels>
            {channels.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                <img src={icon} alt="" width={24} height={24} />
              </a>
            ))}
          </S.Channels>
        </S.Column>
      </S.Columns>
    </S.Container>
  );
}
