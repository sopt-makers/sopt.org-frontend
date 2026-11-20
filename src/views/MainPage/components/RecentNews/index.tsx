import Image from 'next/image';
import { channels } from '@src/lib/constants/channels';
import { LatestNewsType } from '@src/lib/types/admin';
import * as S from './style';

interface RecentNewsProps {
  latestNews: LatestNewsType[];
}

export default function RecentNews({ latestNews }: RecentNewsProps) {
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
              <S.ChannelLink key={name} href={href} aria-label={name}>
                <Image src={icon} alt="" width={24} height={24} />
              </S.ChannelLink>
            ))}
          </S.Channels>
        </S.Header>
        <S.NewsList tabIndex={0} aria-label="최신 소식 목록">
          {latestNews.map(({ id, title, image, link, publishedDate, type }) => (
            <S.NewsItem key={id}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <S.NewsImage src={image} alt="" />
                <S.NewsCategory aria-hidden={!type}>{type}</S.NewsCategory>
                <S.NewsTitle>{title}</S.NewsTitle>
                {publishedDate && <S.Date>{publishedDate.split('T')[0].replace(/-/g, '.')}</S.Date>}
              </a>
            </S.NewsItem>
          ))}
        </S.NewsList>
      </S.Content>
    </S.RecentNews>
  );
}
