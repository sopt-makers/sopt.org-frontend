import styled from '@emotion/styled';

export const SectionTitleWrapper = styled.div``;

export const SectionTitle = styled.h3`
  color: #fff;
  font-family: SUIT;
  font-size: 45rem;
  font-style: normal;
  font-weight: 700;
  line-height: 60rem;
  letter-spacing: -0.45rem;
  white-space: pre-line;
  text-align: center;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 28rem;
    line-height: 40rem;
    letter-spacing: -0.28rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 18rem;
    font-weight: 800;
    line-height: 28rem;
    letter-spacing: -0.18rem;
    width: 360rem;
  }
`;

export const SectionTitleTranslate = styled.h4`
  color: #bdec00;
  text-align: center;
  font-size: 17rem;
  font-weight: 500;
  line-height: 140%; /* 23.8rem */
  letter-spacing: -0.34rem;
`;

export const SectionSubTitle = styled.h3`
  color: #787878;
  font-size: 30rem;
  font-weight: 400;
  line-height: 30rem; /* 100% */
  letter-spacing: -0.3rem;
  text-align: center;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 20rem;
    line-height: 100%; /* 20rem */
    letter-spacing: -0.2rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    color: #fff;
    font-family: SUIT;
    font-size: 14rem;
    font-weight: 400;
    line-height: 28rem; /* 200% */
    letter-spacing: -0.14rem;
  }
`;

export const SectionDesc = styled.div`
  color: #fff;
  font-size: 28rem;
  font-family: SUIT;
  font-weight: 400;
  line-height: 150%;
  text-align: center;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 18rem;
    line-height: 100%; /* 18rem */
    letter-spacing: -0.18rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    text-align: center;
    font-size: 16rem;
    line-height: 150%; /* 24rem */
  }
`;
