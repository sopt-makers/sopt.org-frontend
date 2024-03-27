import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const SectionTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10.46rem;

  /* 태블릿 뷰 */
  @media (max-width: 768rem) {
    gap: 10.54rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 428rem) {
    gap: 10.46rem;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* 태블릿 뷰 */
  @media (max-width: 768rem) {
    gap: 1.5rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 428rem) {
    gap: 2rem;
  }
`;

export const EngTitle = styled.h1`
  color: #696969;

  text-align: center;
  font-family: SUIT;
  font-size: 17rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 23.8rem */
  letter-spacing: -0.34rem;

  /* 태블릿 뷰 */
  @media (max-width: 768rem) {
    font-size: 14rem;
    letter-spacing: -0.28rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 428rem) {
    font-size: 9rem;
    letter-spacing: -0.18rem;
  }
`;

export const KorTitle = styled.h1`
  color: ${colors.white};

  text-align: center;
  font-family: SUIT;
  font-size: 29rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 40.6rem */
  letter-spacing: -0.58rem;

  /* 태블릿 뷰 */
  @media (max-width: 768rem) {
    font-size: 22rem;
    letter-spacing: -0.44rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 428rem) {
    font-size: 15rem;
    letter-spacing: -0.3rem;
  }
`;

export const Description = styled.p`
  color: ${colors.white};

  text-align: center;
  font-family: SUIT;
  font-size: 19rem;
  font-style: normal;
  font-weight: 500;
  line-height: 151%; /* 26.6rem */
  letter-spacing: -0.38rem;

  white-space: pre-line;
  word-break: keep-all;

  /* 태블릿 뷰 */
  @media (max-width: 768rem) {
    font-size: 16rem;
    letter-spacing: -0.32rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 428rem) {
    font-size: 11rem;
    letter-spacing: -0.22rem;
  }
`;
