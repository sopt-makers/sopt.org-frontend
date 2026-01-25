import { INTRO_CONTENT_LIST } from '@src/lib/constants/main';
import CoreValueCardList from '@src/views/MainPage/components/IntroSection/CoreValueCardList';
import * as S from './style';

export default function IntroCardList() {
  return (
    <S.IntroSection>
      <S.CoreValueSection>
        <CoreValueCardList cards={INTRO_CONTENT_LIST} />
      </S.CoreValueSection>
    </S.IntroSection>
  );
}
