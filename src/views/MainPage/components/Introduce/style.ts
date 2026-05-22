import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { motion } from 'framer-motion';
import { media } from '@src/lib/styles/breakpoints';

export const Background = styled.section`
  display: flex;
  height: 135vh;
  justify-content: center;
  align-items: flex-start;
  background: ${colors.gray950};
  position: relative;
`;

export const Wrapper = styled.section`
  height: 100vh;
  top: 0;
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const TextContainer = styled(motion.span)`
  position: relative;
  overflow: hidden;
  display: block;
  text-align: center;

  font-family: SUIT;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;

  ${media.tablet} {
    ${fontsObject.HEADING_2_32_B}
  }

  ${media.mobile} {
    ${fontsObject.HEADING_4_24_B}
  }
`;

export const MotionTitle = styled(motion.span)`
  position: absolute;
  inset: 0;
  font-size: 100%;
  white-space: pre-line;
  background: linear-gradient(93deg, #c9d8dd 78.65%, #fff 128.82%, #c9d8dd 137.19%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const BackgroundTitle = styled.span`
  font-size: 100%;
  background: linear-gradient(93deg, #c9d8dd -34.77%, #fff -14.77%, #636770 6.12%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: pre-line;
`;
