import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Background = styled(motion.main)`
  max-width: 465rem;
  width: 100%;
  height: 295rem;
  border-radius: 19rem;

  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    width: calc(100% - 5.46vw - 54px);
  }

  @media (max-width: 428px) and (min-width: 376px) {
    border-radius: 21rem;
    max-width: 296rem;
    width: calc(100% - 5.46vw - 31px);
    height: 188rem;
  }

  @media (max-width: 375px) {
    border-radius: 21rem;
    max-width: 258rem;
    height: 164rem;
  }
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 19rem;
  background: linear-gradient(0deg, rgba(70, 108, 166, 0) 51.31%, #2e4e80 100%);
  position: relative;
  z-index: 1;
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  border-radius: 19rem;
`;

export const CardKorNav = styled.nav`
  display: inline-flex;
  padding: 10rem 30rem;
  justify-content: center;
  align-items: center;
  border-radius: 13.763rem;
  border: 1.278rem solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.33);
  backdrop-filter: blur(2.949289321899414px);

  color: ${colors.white};
  font-family: SUIT;
  font-size: 21rem;
  font-style: normal;
  font-weight: 600;
  line-height: 28.288rem; /* 134.707% */
  letter-spacing: -0.84rem;

  position: absolute;
  top: 0;
  left: 0;
  margin-left: 26rem;
  margin-top: 26rem;
  z-index: 3;

  @media (max-width: 428px) and (min-width: 376px) {
    font-size: 13rem;
    line-height: 16.258rem; /* 135.48% */
    letter-spacing: -0.48rem;

    padding: 6rem 18rem;
    margin-left: 14rem;
    margin-top: 14rem;
    border-radius: 8rem;
  }

  @media (max-width: 375px) {
    font-size: 10rem;
    line-height: 14.188rem; /* 135.48% */
    letter-spacing: -0.419rem;

    padding: 5rem 15rem;
    margin-left: 12rem;
    margin-top: 12rem;
    border-radius: 6rem;
  }
`;

export const Blur = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  border-radius: 19rem;
  background: rgba(38, 51, 70, 0.74);
  backdrop-filter: blur(6.881675720214844px);
  z-index: 2;

  padding: 26rem;

  @media (max-width: 428px) and (min-width: 376px) {
    padding: 14rem;
  }

  @media (max-width: 375px) {
    padding: 12rem;
  }
`;

export const Content = styled.span<{ color: string }>`
  color: ${({ color }) => (color === 'yellow' ? '#ffe454' : '#fff')};
  font-family: SUIT;
  font-size: 18rem;
  font-style: normal;
  font-weight: 400;
  line-height: 30.476rem;
  letter-spacing: -0.708rem;

  @media (max-width: 428px) {
    font-size: 11rem;
    line-height: 19rem;
  }
`;
