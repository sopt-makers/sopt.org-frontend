import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const SectionTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10.46px;

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    gap: 10.54px;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    gap: 10.46px;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    gap: 1.5px;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    gap: 2px;
  }
`;

export const EngTitle = styled.h1`
  color: #696969;

  text-align: center;
  font-family: SUIT;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 23.8px */
  letter-spacing: -0.34px;

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    font-size: 14px;
    letter-spacing: -0.28px;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    font-size: 9px;
    letter-spacing: -0.18px;
  }
`;

export const KorTitle = styled.h1`
  color: ${colors.white};

  text-align: center;
  font-family: SUIT;
  font-size: 29px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 40.6px */
  letter-spacing: -0.58px;

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    font-size: 22px;
    letter-spacing: -0.44px;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    font-size: 15px;
    letter-spacing: -0.3px;
  }
`;

export const Description = styled.p`
  color: ${colors.white};

  text-align: center;
  font-family: SUIT;
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 151%; /* 26.6px */
  letter-spacing: -0.38px;

  white-space: pre-line;
  word-break: keep-all;

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    font-size: 16px;
    letter-spacing: -0.32px;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    font-size: 11px;
    letter-spacing: -0.22px;
  }
`;
