import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const IntroWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Intro = styled.div`
  position: relative;

  @media (min-width: 769px) {
    padding: 0 75px;
    /* padding: 0 60px 0 104px; */
  }
`;

export const AnimatedLine = styled(motion.svg)`
  position: absolute;
  top: 65px;
  left: 16px;
  z-index: -1;

  width: 20px;
  height: calc(100vh + 2px);
  stroke-width: 4px;
  stroke-linecap: round;

  /* @media (max-width: 1440px) and (min-width: 769px) {
    top: 43px;
    left: 57px;
  } */

  @media (max-width: 768px) {
    top: 284px;
    left: 12px;
  }
`;

export const Circle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -148px;
  left: -340.91px;
  z-index: 10;

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
    /* top: -170px;
    left: -300.91px; */
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
  grid-template-columns: minmax(250px, 1fr) minmax(323px, 1fr);
  grid-gap: 24px 57px;
  /* grid-template-columns: minmax(459px, 1fr) minmax(160px, 1fr);
  grid-gap: 24px minmax(36px, 57px); */

  position: relative;
  z-index: 20;

  @media (max-width: 1440px) and (min-width: 769px) {
    grid-template-rows: auto 1fr;
    grid-gap: 24px 15px;
  }

  @media (max-width: 768px) {
    grid-template-areas:
      'image'
      'title'
      'desc';
    grid-template-rows: auto auto 1fr;
    grid-template-columns: none;
    grid-gap: 16px;
    font-size: 28px;
  }
`;

export const ContentTitle = styled(motion.h2)`
  grid-area: title;
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
    /* margin-top: 16px; */
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
    word-break: keep-all;
  }
`;

export const ContentImage = styled(Image)`
  grid-area: image;
  border-radius: 50px;

  @media (max-width: 1440px) and (min-width: 769px) {
    width: 100%;
    max-width: 540px;
    min-width: 323px;
    min-height: 215px;
    /* min-width 제거 */
    /* min-height: 200px; */
    height: auto;
    border-radius: 36px;
  }

  @media (max-width: 768px) {
    width: 323px;
    height: 215px;
    border-radius: 25px;
    box-shadow: 0px 0px 64px 0px rgba(15, 16, 18, 0.9);
  }
`;

export const BackLight = styled.div<{ isContentVisible: boolean }>`
  position: absolute;
  z-index: -99;

  width: 100vw;
  height: 100vh;

  background: radial-gradient(45.16% 45.16% at 50% 50%, #2c3242 0%, rgba(15, 15, 18, 0) 100%);
  background-position: calc(50% + 300px) center;
  background-repeat: no-repeat;
  background-size: 1300px 1000px;

  opacity: ${({ isContentVisible }) => (isContentVisible ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 1440px) and (min-width: 769px) {
    background-size: 1000px 800px;
  }

  @media (max-width: 768px) {
    opacity: 0;
  }
`;
