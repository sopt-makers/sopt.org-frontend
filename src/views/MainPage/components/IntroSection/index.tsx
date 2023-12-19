import { INTRO_CONTENT_LIST } from '@src/lib/constants/main';
import IntroContent from '@src/views/MainPage/components/IntroSection/IntroContent';
import * as S from './style';

export default function IntroCardList() {
  return (
    <S.IntroSection >
      <S.Header />
      <div id="value" style={{ overflow: 'hidden' }}>
        {INTRO_CONTENT_LIST.map((content) => (
          <IntroContent key={content.id} content={content} />
        ))}
      </div>
      <S.Footer />
    </S.IntroSection>
  );
}
