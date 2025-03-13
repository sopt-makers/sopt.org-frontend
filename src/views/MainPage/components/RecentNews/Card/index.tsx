import { RecentNewsListType } from '@src/lib/types/main';
import * as S from './style';

export default function Card({ title, url, src }: RecentNewsListType) {
  return (
    <S.Background
      onClick={() => {
        window.open(url);
      }}
    >
      <S.Title>{title}</S.Title>
      <S.CardImage src={src} alt="최근뉴스 이미지" fill sizes="auto" priority={true} unoptimized />
    </S.Background>
  );
}
