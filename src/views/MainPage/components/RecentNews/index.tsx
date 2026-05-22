import { LatestNewsType } from '@src/lib/types/admin';
import Card from './Card';
import * as S from './style';

export default function RecentNews({ latestNews }: { latestNews: LatestNewsType[] }) {
  const newsList = latestNews.concat(latestNews);

  return (
    <S.RecentNews id="news">
      <S.Title>솝트의 최신 소식이 궁금하다면!</S.Title>
      <S.SliderWrapper>
        <S.LeftGradient />
        <S.View>
          <S.SliderList>
            {newsList.map(({ title, link, image }, idx) => {
              return <Card key={`${title}-${idx}`} title={title} url={link} src={image} />;
            })}
          </S.SliderList>
        </S.View>
        <S.RightGradient />
      </S.SliderWrapper>
      <S.GoToInstagram>
        <S.IcInstagram />
        <S.Description href="https://www.instagram.com/sopt_official/">
          더 많은 소식이 궁금하다면
        </S.Description>
      </S.GoToInstagram>
    </S.RecentNews>
  );
}
