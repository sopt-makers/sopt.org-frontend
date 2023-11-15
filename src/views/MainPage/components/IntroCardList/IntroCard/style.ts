import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const IntroCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
`;

export const MotionCircle = styled(motion.div)`
  position: absolute;
  top: -266.19px;
  left: -463.69px;
  z-index: -1;
`;

export const MotionLine = styled(motion.svg)`
  position: absolute;
  top: 60px;
  left: -53px;
  z-index: -2;

  width: 20px;
  height: calc(100vh + 2px);

  stroke-width: 4px;
  stroke-linecap: round;
`;

export const MotionDiv = styled(motion.div)`
  display: grid;
  grid-template-areas:
    'title image'
    'desc image';
  grid-template-rows: 158px 1fr;
  grid-gap: 24px 57px;
`;

export const Box = styled(motion.div)`
  position: relative;
`;

export const CardTitle = styled(motion.h2)`
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

export const CardDetail = styled(motion.h3)`
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

export const CardImage = styled(Image)`
  grid-area: image;
  border-radius: 50px;
`;

export const BackLight = styled(motion.div)`
  position: absolute;
  top: -468.94px;
  left: 15.38px;
  z-index: -1000;

  width: 1954px;
  height: 1084px;
  transform: rotate(7.639deg);
  background: radial-gradient(45.16% 45.16% at 50% 50%, #2c3242 0%, rgba(15, 15, 18, 0) 100%);
`;
