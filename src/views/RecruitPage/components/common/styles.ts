import styled from '@emotion/styled';

export const SectionTitle = styled.h3`
  color: #fff;
  font-family: SUIT;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.45px;
  white-space: pre-line;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 28px;
    line-height: 40px;
    letter-spacing: -0.28px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 18px;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: -0.18px;
    width: 360px;
    text-align: center;
  }
`;

export const SectionSubTitle = styled.h3`
  color: #787878;
  font-size: 30px;
  font-weight: 400;
  line-height: 30px; /* 100% */
  letter-spacing: -0.3px;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 20px;
    line-height: 100%; /* 20px */
    letter-spacing: -0.2px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    color: #fff;
    font-family: SUIT;
    font-size: 14px;
    font-weight: 400;
    line-height: 28px; /* 200% */
    letter-spacing: -0.14px;
    text-align: center;
  }
`;

export const SectionDesc = styled.div`
  color: #fff;
  font-size: 28px;
  font-family: SUIT;
  font-weight: 400;
  line-height: 150%;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 18px;
    line-height: 100%; /* 18px */
    letter-spacing: -0.18px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    text-align: center;
    font-size: 16px;
    line-height: 150%; /* 24px */
    text-align: center;
  }
`;
