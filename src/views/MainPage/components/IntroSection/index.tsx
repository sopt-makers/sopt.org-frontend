import { INTRO_CONTENT_LIST } from '@src/lib/constants/main';
import IntroContent from '@src/views/MainPage/components/IntroSection/IntroContent';
import * as S from './style';

export default function IntroCardList() {
  return (
    <S.IntroSection>
      {INTRO_CONTENT_LIST.map((content) => (
        <IntroContent key={content.id} content={content} />
      ))}
    </S.IntroSection>
  );
}
