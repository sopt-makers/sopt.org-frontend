import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Tab = styled.h2`
  color: #5b88f8;
  font-family: SUIT;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 20rem;
  line-height: 46.311px; /* 257.282% */
  letter-spacing: -2%;
  z-index: 1;

  @media (max-width: 23.5rem) {
    font-size: 11rem;
    line-height: 26.615px; /* 241.956% */
    letter-spacing: -0.22px;
    margin-bottom: 0px;
  }
`;

export const Title = styled.h1`
  font-family: SUIT;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.8px;
  word-break: keep-all;

  ${media.tablet} {
    ${fontsObject.HEADING_2_32_B}
  }
  ${media.mobile} {
    ${fontsObject.HEADING_5_20_B}
  }
`;

export const Description = styled.p`
  color: ${colors.gray100};
  ${fontsObject.BODY_1_18_M}
  word-break: keep-all;
  white-space: pre-line;

  ${media.tablet} {
    ${fontsObject.BODY_2_16_M}
  }
  ${media.mobile} {
    ${fontsObject.LABEL_5_11_SB}
    white-space: normal;
  }
`;
