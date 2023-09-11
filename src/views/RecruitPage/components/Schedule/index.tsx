import styled from '@emotion/styled';
import { SectionTitle, SectionTitleTranslate, SectionTitleWrapper } from '../common/styles';

const Schedule = () => {
  return (
    <Wrapper>
      <SectionTitleWrapper>
        <SectionTitleTranslate>Schedule</SectionTitleTranslate>
        <SectionTitle>모집 일정</SectionTitle>
      </SectionTitleWrapper>
      <GridWrapper>
        <OddText> YB 서류 접수</OddText>
        <EvenText>
          9월 4일 <Highlight>11시</Highlight> - 9월 9일 <Highlight>18시</Highlight>
        </EvenText>
        <OddText>YB 면접</OddText>
        <EvenText>9월 16일 - 9월 17일</EvenText>
        <OddText>YB 최종 결과 발표</OddText>
        <EvenText>9월 20일</EvenText>
        <OddText>오리엔테이션</OddText>
        <EvenText>9월 23일</EvenText>
      </GridWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 8px;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 240px 300px;
  row-gap: 25px;
  column-gap: 220px;
  border-radius: 30px;
  background-color: #1a1a20;
  padding: 85px 88px;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    grid-template-columns: 300px auto;
    padding: 38px 54px;
    gap: 15px;
    border-radius: 20px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    grid-template-columns: 92px auto;
    padding: 18px 26px;
    row-gap: 7px;
    column-gap: 40px;
    border-radius: 12px;
  }
`;

const OddText = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  line-height: 150%; /* 42px */
  &::before {
    content: '🗓 ';
  }
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px; /* 166.667% */
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    color: #fff;
    font-size: 8.957px;
    font-weight: 700;
    line-height: 14.929px; /* 166.667% */
  }
`;

const Highlight = styled.span`
  color: #1deda2;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.48px;
  text-decoration-line: underline;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 18px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 8.957px;
  }
`;

const EvenText = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  line-height: 150%; /* 42px */
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 18px;
    font-weight: 300;
    line-height: 30px; /* 166.667% */
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 8.957px;
    font-weight: 300;
    line-height: 14.929px; /* 166.667% */
  }
`;

export default Schedule;
