import { forwardRef } from 'react';
import { RecentNewsList } from '@src/lib/constants/main';
import Card from './Card';
import * as S from './style';

function RecentNews(_props: unknown, ref: React.Ref<HTMLDivElement>) {
  return (
    <div id="news" ref={ref}>
      <S.TitleWrapper>
        <S.SubTitle>최신소식</S.SubTitle>
        <S.Title>SOPT의 최신 소식이 궁금하다면!</S.Title>
      </S.TitleWrapper>
      <S.SliderWrapper>
        <S.LeftGradient />
        <S.View>
          <S.SliderList>
            {RecentNewsList.concat(RecentNewsList).map(({ title, url, src }, index) => {
              return <Card key={index} title={title} url={url} src={src} />;
            })}
          </S.SliderList>
        </S.View>
        <S.RightGradient />
      </S.SliderWrapper>
      <S.GoToInstagram>
        <S.IcInstagram />
        <S.Description>더 많은 소식이 궁금하다면</S.Description>
      </S.GoToInstagram>
    </div>
  );
}

export default forwardRef(RecentNews);
