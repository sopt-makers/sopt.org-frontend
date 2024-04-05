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

export const Shadow = styled.div`
  position: absolute;
  z-index: 90;
  width: 100%;
  height: 120rem;
`;

export const Header = styled(Shadow)`
  top: 0;
  background: linear-gradient(180deg, #0f1012 0%, rgba(15, 16, 16, 0) 100%);
`;

export const Footer = styled(Shadow)`
  bottom: 0;
  background: linear-gradient(360deg, #0f1012 0%, rgba(15, 16, 16, 0) 100%);
`;

export const Intro = styled.div`
  position: relative;
  padding: 0 60rem 0 104rem;

  @media (max-width: 768px) {
    padding: 0 30rem;
  }
`;

export const AnimatedLine = styled(motion.svg)`
  position: absolute;
  top: 46rem;
  left: 57rem;
  z-index: -1;

  width: 20rem;
  height: calc(100vh + 7px);
  stroke-width: 4rem;
  stroke-linecap: round;

  @media (max-width: 768px) {
    top: 285rem;
    left: 42rem;
  }
`;

export const Circle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -160rem;
  left: -300.91rem;
  z-index: 10;

  width: 735.833rem;
  height: 430rem;
  transform: rotate(-21.134deg);
  flex-shrink: 0;

  border-radius: 735.833rem;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(46, 57, 60, 0.35) 0%,
    rgba(7, 9, 12, 0) 100%
  );

  & > svg {
    width: 130rem;
    height: 130rem;
  }

  @media (max-width: 1440px) and (min-width: 769px) {
    grid-template-rows: auto 1fr;
    grid-gap: 24rem 0rem;
  }

  @media (max-width: 768px) {
    top: 80.19rem;
    left: -315.83rem;

    & > svg {
      width: 100rem;
      height: 100rem;
    }
  }
`;

export const Content = styled(motion.div)`
  display: grid;
  grid-template-areas:
    'title image'
    'desc image';
  grid-template-rows: auto 1fr;
  grid-template-columns: max(540rem, 30vw) minmax(323rem, auto);
  grid-gap: 24rem max(36rem, 2.96vw);

  position: relative;
  z-index: 20;

  @media (max-width: 1440px) and (min-width: 769px) {
    grid-template-columns: minmax(400rem, 1fr) minmax(auto, 1fr);
    grid-gap: 24rem 36rem;
  }

  @media (max-width: 768px) {
    grid-template-areas:
      'image'
      'title'
      'desc';
    grid-template-rows: auto auto 103rem;
    grid-template-columns: none;
    grid-gap: 16rem;
    font-size: 28rem;
  }
`;

export const ContentTitle = styled(motion.h2)`
  grid-area: title;
  margin-top: 1.97vw;

  background: linear-gradient(93deg, #e1edf0 78.65%, #fff 128.82%, #e6eff2 137.19%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: SUIT;
  font-size: max(40rem, 2.5vw);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: pre-wrap;

  @media (max-width: 1440px) and (min-width: 769px) {
    margin-top: 28rem;
    font-size: 40rem;
  }

  @media (max-width: 768px) {
    width: fit-content;
    margin-top: 48rem;
    margin-left: 58rem;
    font-size: 28rem;
  }
`;

export const ContentDetail = styled(motion.h3)`
  grid-area: desc;

  color: #b9c7c8;
  font-family: SUIT;
  font-size: max(20rem, 1.25vw);
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 38.4rem */
  letter-spacing: -0.48rem;
  white-space: pre-wrap;

  @media (max-width: 1440px) and (min-width: 769px) {
    font-size: 20rem;
    word-break: keep-all;
  }

  @media (max-width: 1091px) and (min-width: 769px) {
    white-space: normal;
  }

  @media (max-width: 768px) {
    max-width: 259rem;
    margin-left: 58rem;
    font-size: 16rem;
    letter-spacing: -0.32rem;
    white-space: normal;
    word-break: keep-all;
  }
`;

export const ContentImage = styled(Image)`
  grid-area: image;
  width: max(540rem, 36.8vw);
  height: auto;
  border-radius: max(36rem, 2.6vw);
  object-fit: cover;

  @media (max-width: 1440px) and (min-width: 769px) {
    width: 100%;
    max-width: 540rem;
    min-height: 270rem;
    border-radius: 36rem;
  }

  @media (max-width: 768px) {
    max-width: 323rem;
    min-width: 264rem;
    height: 215rem;
    border-radius: 25rem;
    box-shadow: 0rem 0rem 64rem 0rem rgba(15, 16, 18, 0.9);
  }
`;

export const BackLight = styled.div<{ isContentVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: calc(300rem - 5vw);
  z-index: -99;

  width: max(1500rem, 101.77vw);
  height: max(900rem, 56.45vw);
  transform: rotate(7.639deg) translateY(-50%);
  background: radial-gradient(45.16% 45.16% at 50% 50%, #2c3242 0%, rgba(15, 15, 18, 0) 100%);

  opacity: ${({ isContentVisible }) => (isContentVisible ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 768px) {
    opacity: 0;
  }
`;
