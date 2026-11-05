import { ReactComponent as FacebookIcon } from './assets/facebook.svg';
import { ReactComponent as InstagramIcon } from './assets/instagram.svg';
import { ReactComponent as KakaoIcon } from './assets/kakao.svg';
import { ReactComponent as MailIcon } from './assets/mail.svg';
import { ReactComponent as YoutubeIcon } from './assets/youtube.svg';
import { news } from './mock';
import * as S from './style';

const channels = [
  { name: '메일', href: 'mailto:president@sopt.org', Icon: MailIcon },
  { name: '페이스북', href: 'https://www.facebook.com/clubsopt/', Icon: FacebookIcon },
  { name: '인스타그램', href: 'https://www.instagram.com/sopt_official/', Icon: InstagramIcon },
  { name: '카카오톡 채널', href: 'https://pf.kakao.com/_sxaIWG', Icon: KakaoIcon },
  { name: '유튜브', href: 'https://www.youtube.com/c/SOPTMEDIA', Icon: YoutubeIcon },
];

export default function RecentNews() {
  return (
    <S.RecentNews id="news" aria-labelledby="news-title">
      <S.Content>
        <S.Header>
          <>
            <S.Title id="news-title">NEWS</S.Title>
            <S.Subtitle>SOPT의 최신 소식</S.Subtitle>
          </>
          <S.Channels aria-label="SOPT 채널">
            {channels.map(({ name, href, Icon }) => (
              <a key={name} href={href} aria-label={name}>
                <Icon aria-hidden="true" />
              </a>
            ))}
          </S.Channels>
        </S.Header>
        <S.NewsList tabIndex={0} aria-label="최신 소식 목록">
          {news.map(({ id, category, title, date }) => (
            <S.NewsItem key={id}>
              <S.ImagePlaceholder isSquare={category === 'INSTAGRAM'} />
              <S.NewsBody>
                <S.Category>{category}</S.Category>
                <S.NewsTitle>{title}</S.NewsTitle>
                <S.Date>{date}</S.Date>
              </S.NewsBody>
            </S.NewsItem>
          ))}
        </S.NewsList>
      </S.Content>
    </S.RecentNews>
  );
}
