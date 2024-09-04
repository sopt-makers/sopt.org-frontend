import { SectionTitle, SectionTitleTranslate, SectionTitleWrapper } from '../common/style';
import * as S from './style';

const Schedule = () => {
  return (
    <S.Wrapper>
      <SectionTitleWrapper>
        <SectionTitleTranslate>Schedule</SectionTitleTranslate>
        <SectionTitle>모집 일정</SectionTitle>
      </SectionTitleWrapper>
      <S.GridWrapper>
        <S.OddText> YB 서류 접수</S.OddText>
        <S.EvenText>
          9월 8일 <S.Highlight>10시</S.Highlight> - 9월 13일 <S.Highlight>18시</S.Highlight>
        </S.EvenText>
        <S.OddText>YB 서류 결과 발표</S.OddText>
        <S.EvenText>
          9월 19일 <S.Highlight>14시</S.Highlight>
        </S.EvenText>
        <S.OddText>YB 면접</S.OddText>
        <S.EvenText>9월 21일 - 9월 22일</S.EvenText>
        <S.OddText>YB 최종 결과 발표</S.OddText>
        <S.EvenText>
          9월 25일 <S.Highlight>16시</S.Highlight>
        </S.EvenText>
      </S.GridWrapper>
    </S.Wrapper>
  );
};

export default Schedule;
