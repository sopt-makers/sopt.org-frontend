import { introCardList } from '@src/lib/constants/main';
import IntroCard from '@src/views/MainPage/components/IntroCardList/IntroCard';
import * as S from './style';

export default function IntroCardList() {
  return (
    <S.IntroCardList>
      <S.Header />
      {introCardList.map((card) => (
        <IntroCard key={card.id} card={card} />
      ))}
      <S.Footer />
    </S.IntroCardList>
  );
}
