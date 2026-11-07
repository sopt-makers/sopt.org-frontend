import Image from 'next/image';
import { channels } from '@src/lib/constants/channels';
import { news } from './mock';
import * as S from './style';

export default function RecentNews() {
  return (
    <S.RecentNews id="news" aria-labelledby="news-title">
      <S.Content>
        <S.Header>
          <div>
            <S.Title id="news-title">NEWS</S.Title>
            <S.Subtitle>SOPT의 최신 소식</S.Subtitle>
          </div>
          <S.Channels aria-label="SOPT 채널">
            {channels.map(({ name, href, icon }) => (
              <a key={name} href={href} aria-label={name}>
                <Image src={icon} alt="" width={24} height={24} />
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
