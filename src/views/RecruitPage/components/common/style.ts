import styled from '@emotion/styled';

export const SectionTitleWrapper = styled.div``;

export const SectionTitle = styled.h3`
  color: #fff;
  font-family: SUIT;
  font-size: 45rem;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.45px;
  white-space: pre-line;
  text-align: center;

  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    font-size: 28rem;
    line-height: 40px;
    letter-spacing: -0.28px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    font-size: 18rem;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: -0.18px;
    width: 360px;
  }
`;

export const SectionTitleTranslate = styled.h4<{ mainColor: string }>`
  color: ${({ mainColor }) => mainColor};
  text-align: center;
  font-size: 17rem;
  font-weight: 500;
  line-height: 140%; /* 23.8px */
  letter-spacing: -0.34px;
`;

export const SectionSubTitle = styled.h3`
  color: #787878;
  font-size: 30rem;
  font-weight: 400;
  line-height: 30px; /* 100% */
  letter-spacing: -0.3px;
  text-align: center;

  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    font-size: 20rem;
    line-height: 100%; /* 20px */
    letter-spacing: -0.2px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    color: #fff;
    font-family: SUIT;
    font-size: 14rem;
    font-weight: 400;
    line-height: 28px; /* 200% */
    letter-spacing: -0.14px;
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
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    font-size: 18rem;
    line-height: 100%; /* 18px */
    letter-spacing: -0.18px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    text-align: center;
    font-size: 16rem;
    line-height: 150%; /* 24px */
  }
`;
