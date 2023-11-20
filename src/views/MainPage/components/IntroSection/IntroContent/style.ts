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
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const ContentWithCircle = styled(motion.div)`
  position: relative;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -148px;
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

  & > svg {
    width: 130px;
    height: 130px;
  }

  @media (max-width: 1440px) and (min-width: 769px) {
    grid-template-rows: auto 1fr;
    grid-gap: 24px 0px;
    top: -158px;
  }

  @media (max-width: 768px) {
    top: 80.19px;
    left: -345.83px;

    & > svg {
      width: 100px;
      height: 100px;
    }
  }
`;

export const Content = styled(motion.div)`
  display: grid;
  grid-template-areas:
    'title image'
    'desc image';
  grid-template-rows: auto 1fr;
  grid-gap: 24px 57px;

  position: relative;
  z-index: 40;

  @media (max-width: 1440px) and (min-width: 769px) {
    grid-template-rows: auto 1fr;
    grid-gap: 24px 0px;
  }

  @media (max-width: 768px) {
    grid-template-areas:
      'image'
      'title'
      'desc';
    grid-template-rows: auto auto 1fr;
    grid-gap: 16px;

    font-size: 28px;
  }
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

  @media (max-width: 1440px) and (min-width: 769px) {
    margin-top: 28px;
    font-size: 40px;
  }

  @media (max-width: 768px) {
    width: fit-content;
    margin-top: 48px;
    margin-left: 58px;
    font-size: 28px;
  }
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

  @media (max-width: 1440px) and (min-width: 769px) {
    font-size: 20px;
    letter-spacing: -0.4px;
  }

  @media (max-width: 768px) {
    width: 259px;
    margin-left: 58px;
    font-size: 16px;
    letter-spacing: -0.32px;
    white-space: normal;
  }
`;

export const ContentImage = styled(Image)`
  grid-area: image;
  border-radius: 50px;

  @media (max-width: 1440px) and (min-width: 769px) {
    width: 540px;
    height: 360px;
  }

  @media (max-width: 768px) {
    width: 323px;
    height: 215px;
    border-radius: 25px;
    box-shadow: 0px 0px 64px 0px rgba(15, 16, 18, 0.9);
  }
`;

export const BackLight = styled(motion.div)`
  position: absolute;
  top: -114.94px;
  left: calc(100vw - 80%);
  z-index: -99;

  width: 1954px;
  height: 1084px;
  transform: rotate(7.639deg);
  flex-shrink: 0;
  background: radial-gradient(45.16% 45.16% at 50% 50%, #2c3242 0%, rgba(15, 15, 18, 0) 100%);

  @media (max-width: 768px) {
    display: none;
  }
`;
