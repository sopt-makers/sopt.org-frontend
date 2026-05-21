import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 372px 0 480px 0;
  gap: 48px;

  ${media.tablet} {
    padding: 458px 0 119px 0;
  }

  ${media.mobile} {
    padding: 226px 0 358px 0;
    gap: 24px;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Title = styled.h1`
  color: ${colors.white};
  text-align: center;
  font-family: SUIT;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.8px;

  ${media.mobile} {
    ${fontsObject.HEADING_4_24_B}
  }
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  white-space: pre-line;
  ${fontsObject.TITLE_3_24_SB}

  ${media.mobile} {
    ${fontsObject.TITLE_6_16_SB}
  }
`;

export const GoToRecruit = styled.a`
  cursor: pointer;
  border-radius: 25px;
  box-shadow: 0 0 0 2.218px #5b88f8 inset;
  background: #40578d;
  width: 281px;
  height: 83px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #e8f1ff;
  font-family: SUIT;
  font-size: 30rem;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 100% */
  letter-spacing: -0.6px;

  @media (max-width: 48rem) {
    width: 216px;
    height: 64px;

    border-radius: 19.221px;
    box-shadow: 0 0 0 1.705px #5b88f8 inset;

    font-size: 23rem;
    line-height: 23.065px; /* 100.282% */
    letter-spacing: -0.46px;
  }

  @media (max-width: 23.5rem) {
    width: 124px;
    height: 36px;
    border-radius: 11.046px;
    box-shadow: 0 0 0 0.98px #5b88f8 inset;

    font-size: 13.218rem;
    line-height: 13.256px; /* 100.282% */
    letter-spacing: -0.264px;
  }
`;
