import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const IntroContentWrapper = styled.section`
  position: relative;
  height: 100vh;
`;

export const Shadow = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 120px;
`;

export const HeaderShadow = styled(Shadow)`
  top: 0;
  background: linear-gradient(180deg, #0f1012 0%, rgba(15, 16, 16, 0) 100%);
`;

export const FooterShadow = styled(Shadow)`
  bottom: 0;
  background: linear-gradient(360deg, #0f1012 0%, rgba(15, 16, 16, 0) 100%);
`;

export const MotionSvg = styled(motion.svg)<{ top: number }>`
  position: absolute;
  top: ${({ top }) => `${top + 160}px`};
  left: 317px;
  z-index: 20;

  width: 20px;
  height: calc(100vh + 2px);

  stroke-width: 4px;
  stroke-linecap: round;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const ContentWithCircle = styled(motion.div)`
  position: relative;
  margin-left: 370px;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -48px;
  left: -410.91px;
  z-index: 30;

  width: 735.833px;
  height: 430px;
  transform: rotate(-21.134deg);
  flex-shrink: 0;

  border-radius: 735.833px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(46, 57, 60, 0.35) 0%,
    rgba(7, 9, 12, 0) 100%
  );
`;

export const Content = styled(motion.div)`
  display: grid;
  grid-template-areas:
    'title image'
    'desc image';
  grid-template-rows: 158px 1fr;
  grid-gap: 24px 57px;

  position: relative;
  z-index: 40;
  margin-top: 100px;
`;

export const ContentTitle = styled(motion.h2)`
  grid-area: title;
  width: 590px;
  margin-top: 38px;

  background: linear-gradient(93deg, #e1edf0 78.65%, #fff 128.82%, #e6eff2 137.19%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: SUIT;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: pre-wrap;
`;

export const ContentDetail = styled(motion.h3)`
  grid-area: desc;
  width: 590px;

  color: #b9c7c8;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 38.4px */
  letter-spacing: -0.48px;
  white-space: pre-wrap;
`;

export const ContentImage = styled(Image)`
  grid-area: image;
  border-radius: 50px;
`;

export const BackLight = styled(motion.div)`
  position: absolute;
  top: -114.94px;
  left: 385.37px;
  z-index: -99;

  width: 1954px;
  height: 1084px;
  transform: rotate(7.639deg);
  background: radial-gradient(45.16% 45.16% at 50% 50%, #2c3242 0%, rgba(15, 15, 18, 0) 100%);
`;
