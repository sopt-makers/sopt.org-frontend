import { SectionTitle, SectionTitleTranslate, SectionTitleWrapper } from '../common/styles';
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
          3월 3일 <S.Highlight>10시</S.Highlight> - 3월 8일 <S.Highlight>18시</S.Highlight>
        </S.EvenText>
        <S.OddText>YB 면접</S.OddText>
        <S.EvenText>3월 16일 - 3월 17일</S.EvenText>
        <S.OddText>YB 최종 결과 발표</S.OddText>
        <S.EvenText>3월 20일</S.EvenText>
        <S.OddText>오리엔테이션</S.OddText>
        <S.EvenText>3월 23일</S.EvenText>
      </S.GridWrapper>
    </S.Wrapper>
  );
};

export default Schedule;
