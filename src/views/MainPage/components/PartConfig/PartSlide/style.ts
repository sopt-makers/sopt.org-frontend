import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';

export const PartSlide = styled.div`
  display: flex;
  flex-shrink: 0;
  position: relative;

  width: 100%;
  height: 428rem;
  border-radius: 19rem;
  background: linear-gradient(98deg, #1a2035 33.84%, #304f84 96.92%);

  @media (max-width: 1200px) {
    justify-content: center;
    position: static;

    height: 488.493rem;
    border-radius: none;
    background: none;
  }

  @media (max-width: 428px) {
    height: 280.74rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 77rem 0 62rem calc(4.375vw + 1.5625vw + 42px);

  @media (max-width: 1200px) {
    width: calc(100% - 5.46vw - 54px);
    position: relative;
    padding: 4.57vw 5.5vw 0 5.5vw;
    border-radius: 19rem;
    background: linear-gradient(98deg, #1a2035 33.84%, #304f84 96.92%);
  }

  @media (max-width: 768px) {
    padding: 6.57vw 6.5vw 0 6.5vw;
  }

  @media (max-width: 428px) {
    width: calc(100% - 5.46vw - 31px);
    padding: 6.78vw 6.71vw 0 6.71vw;
    border-radius: 10.919rem;
  }
`;

export const PartDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: calc(70rem + 20vw);

  @media (max-width: 1200px) {
    justify-content: normal;
    width: 100%;
  }
`;

export const PartTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17rem;

  @media (max-width: 1200px) {
    gap: calc(3rem + 0.4vw);
  }

  @media (max-width: 428px) {
    gap: 2.87rem;
  }
`;

export const PartBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  padding: 6rem 15rem;

  border-radius: 10.823rem;
  border: 1.281rem solid ${colors.white};
  background: rgba(255, 255, 255, 0.2);

  color: ${colors.white};
  font-family: SUIT;
  font-size: 19rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 19rem */
  letter-spacing: -0.38rem;

  @media (max-width: 1200px) {
    border-radius: 8.836rem;
    font-size: 15rem;
    letter-spacing: -0.3rem;
    padding: 4.899rem 12.247rem;
  }

  @media (max-width: 428px) {
    border-radius: 5.078rem;
    padding: 2.815rem 7.038rem;
    font-size: 9rem;
    letter-spacing: -0.18rem;
  }
`;

export const PartTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #fff;
  font-family: SUIT;
  font-size: calc(48rem + 0.41vw);
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 56rem */
  letter-spacing: -1.12rem;

  @media (max-width: 1200px) {
    height: calc(40rem + 1.8vw);
    font-size: max(30rem, 4.34vw);
    line-height: 96%; /* 36.48rem */
    letter-spacing: -0.76rem;

    margin-bottom: 1.82vw;
  }

  @media (max-width: 428px) {
    height: max(28rem, 7.21vw);
    font-size: max(20rem, 5.14vw);
    letter-spacing: -0.44rem;
    margin-bottom: 1.88vw;
  }
`;

export const PartDescription = styled.div`
  display: inline;
  color: #fff;
  font-family: SUIT;
  font-size: calc(16rem + 0.2vw);
  font-style: normal;
  font-weight: normal;
  line-height: 162%; /* 30.78rem */
  letter-spacing: -0.38rem;
  /* word-break: keep-all; */

  @media (max-width: 1200px) {
    font-size: 18rem;
    letter-spacing: -0.34rem;
  }

  @media (max-width: 768px) {
    font-size: max(16rem, 2.41vw);
    letter-spacing: -0.34rem;
  }

  @media (max-width: 428px) {
    font-size: max(9rem, 2.33vw);
    letter-spacing: -0.2rem;
  }
`;

export const Keyword = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  padding: calc(13rem + 0.26vw) calc(20rem + 0.26vw);
  border-radius: 33rem;

  color: #1b2136;
  font-family: SUIT;
  font-size: calc(16rem + 0.3vw);
  font-style: normal;
  font-weight: 600;
  line-height: 162%; /* 35.64rem */
  letter-spacing: -0.44rem;

  @media (max-width: 1200px) {
    padding: 13.115rem 18.215rem;
    font-size: max(16rem, 1.5vw);
    letter-spacing: -0.32rem;
  }

  @media (max-width: 768px) {
    padding: 11.115rem 16.215rem;
    font-size: max(14rem, 2vw);
    letter-spacing: -0.32rem;
  }

  @media (max-width: 428px) {
    padding: max(6rem, 1.76vw) max(8rem, 2.44vw);
    font-size: 9rem;
    letter-spacing: -0.18rem;
  }
`;
