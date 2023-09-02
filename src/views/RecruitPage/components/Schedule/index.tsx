import styled from '@emotion/styled';
import { SectionTitle } from '../common/styles';

const Schedule = () => {
  return (
    <Wrapper>
      <SectionTitle>모집 일정</SectionTitle>
      <GridWrapper>
        <OddText>YB 서류 접수</OddText>
        <EvenText>9월 4일 - 9월 9일</EvenText>
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
  grid-template-columns: 560px auto;
  border-radius: 10px;
  background-color: #000;
  padding: 85px 88px;
  gap: 25px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    grid-template-columns: 340px auto;
    padding: 38px 54px;
    background: linear-gradient(to right, #000 30%, transparent);
    gap: 15px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    grid-template-columns: 170px auto;
    padding: 18px 26px;
    background: linear-gradient(to right, #000 30%, transparent);
    gap: 7px;
  }
`;

const OddText = styled.div`
  color: #fff;
  font-family: SUIT;
  font-size: 28px;
  font-weight: 700;
  line-height: 150%; /* 42px */
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    color: #fff;
    font-family: SUIT;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px; /* 166.667% */
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    color: #fff;
    font-family: SUIT;
    font-size: 8.957px;
    font-weight: 700;
    line-height: 14.929px; /* 166.667% */
  }
`;

const EvenText = styled.div`
  color: #fff;
  font-family: SUIT;
  font-size: 28px;
  font-weight: 400;
  line-height: 150%; /* 42px */
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    color: rgba(255, 255, 255, 0.8);
    font-family: SUIT;
    font-size: 18px;
    font-weight: 300;
    line-height: 30px; /* 166.667% */
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    color: rgba(255, 255, 255, 0.8);
    font-family: SUIT;
    font-size: 8.957px;
    font-weight: 300;
    line-height: 14.929px; /* 166.667% */
  }
`;

export default Schedule;
