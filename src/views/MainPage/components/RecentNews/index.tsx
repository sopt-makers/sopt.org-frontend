import { forwardRef } from 'react';
import { RecentNewsList } from '@src/lib/constants/main';
import Card from './Card';
import * as S from './style';

function RecentNews(_props: unknown, ref: React.Ref<HTMLDivElement>) {
  return (
    <S.RecentNews id="news" ref={ref}>
      <S.Title>솝트의 최신 소식이 궁금하다면!</S.Title>
      <S.SliderWrapper>
        <S.LeftGradient />
        <S.View>
          <S.SliderList>
            {RecentNewsList.concat(RecentNewsList)
              .concat(RecentNewsList)
              .map(({ title, url, src }, index) => {
                return <Card key={index} title={title} url={url} src={src} />;
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

export default forwardRef(RecentNews);
