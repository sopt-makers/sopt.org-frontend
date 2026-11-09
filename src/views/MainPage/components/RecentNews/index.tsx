import Image from 'next/image';
import { channels } from '@src/lib/constants/channels';
import { LatestNewsType } from '@src/lib/types/admin';
import * as S from './style';

export default function RecentNews({ latestNews }: { latestNews: LatestNewsType[] }) {
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
          {latestNews.map(({ id, title, image, link, publishedDate }) => (
            <S.NewsItem key={id}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <S.NewsImage src={image} alt="" />
                <S.NewsTitle>{title}</S.NewsTitle>
                {publishedDate && <S.Date>{publishedDate}</S.Date>}
              </a>
            </S.NewsItem>
          ))}
        </S.NewsList>
      </S.Content>
    </S.RecentNews>
  );
}
