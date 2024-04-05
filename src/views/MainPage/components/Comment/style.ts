import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';
import icArrowComment from '@src/assets/icons/ic_arrow_comment.svg';
import icLeftArrow from '@src/assets/icons/ic_arrow_left.svg';
import icRightArrow from '@src/assets/icons/ic_arrow_right.svg';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 256rem;

  @media (max-width: 768px) {
    padding-top: 149rem;
    padding-bottom: 200rem;
  }

  @media (max-width: 376px) {
    padding-top: 111rem;
  }
`;

export const TitleShadow = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: calc(100% + 250px);
  top: -120rem;
  left: 0;
  background: linear-gradient(#f6f8fc 72%, transparent);

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const TitleWrapper = styled.div`
  position: sticky;
  color: white;
  top: 200rem;
  left: 88rem;
  z-index: 2;
  margin-bottom: 200rem;

  @media (max-width: 1600px) {
    top: 120rem;
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    position: static;
    padding-top: 0;
    margin-bottom: 0;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-bottom: 200rem;
  @media (max-width: 1600px) {
    padding-bottom: 240rem;
  }
  @media (max-width: 768px) {
    padding-top: 64rem;
    padding-bottom: 0;
    flex-direction: row;
    align-items: center;
    gap: 22rem;
  }
  @media (max-width: 520px) {
    padding-top: 32rem;
    gap: 12rem;
  }
`;

export const SectionTitle = styled.div`
  position: relative;
  color: ${colors.black};
  font-family: SUIT;
  font-size: 55rem;
  font-style: normal;
  font-weight: 500;
  line-height: 61.6rem; /* 112% */
  letter-spacing: -1.65rem;
  z-index: 2;
  @media (max-width: 768px) and (min-width: 1600px) {
    padding-bottom: 200rem;
  }
  @media (max-width: 768px) {
    font-family: SUIT;
    font-size: 41rem;
    line-height: 45.956rem; /* 112.087% */
    letter-spacing: -1.23rem;
  }
  @media (max-width: 520px) {
    font-size: 21rem;
    font-style: normal;
    font-weight: 500;
    line-height: 24.28rem; /* 115.617% */
    letter-spacing: -0.63rem;
  }
  @media (max-height: 860px) and (max-width: 1600px) {
    font-size: 32rem;
    line-height: 32rem;
  }
`;

export const SectionSubTitle = styled.p`
  color: #5b88f8;
  font-family: SUIT;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 10rem;
  font-size: 20rem;
  line-height: 46.311rem; /* 257.282% */
  letter-spacing: -2%;
  z-index: 1;

  @media (max-width: 376px) {
    font-size: 11rem;
    line-height: 26.615rem; /* 241.956% */
    letter-spacing: -0.22rem;
  }
`;

export const Summary = styled(motion.div)<{ color: string }>`
  color: ${({ color }) => color};

  font-family: SUIT;
  font-size: 77rem;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -2.31rem;
  white-space: pre-line;
  padding-top: 36rem;
  padding-left: 76rem;
  position: relative;
  @media (max-width: 1640px) {
    font-size: 68rem;
    height: 185rem;
  }
  @media (max-width: 1600px) {
    white-space: unset;
    height: auto;
  }

  @media (max-width: 1100px) {
    white-space: pre-line;
  }

  @media (max-width: 976px) {
    font-size: 60rem;
    padding-top: 28rem;
    padding-left: 60rem;
  }

  @media (max-width: 768px) {
    font-size: 57rem;
    font-weight: 600;
    line-height: 60rem;
    letter-spacing: -1.71rem;
    padding-left: 48rem;
  }
  @media (max-width: 520px) {
    font-size: 30rem;
    font-style: normal;
    font-weight: 600;
    line-height: 32rem;
    letter-spacing: -0.9rem;
    padding-top: 12rem;
    padding-left: 32rem;
  }
  @media (max-height: 860px) and (max-width: 1600px) {
    font-size: 46rem;
    line-height: 48rem;
    padding-left: 48rem;
    padding-top: 24rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 52rem;
    mask-image: url(${icArrowComment});
    mask-size: contain;
    mask-repeat: no-repeat;
    background-color: ${({ color }) => color};
    width: 58rem;
    height: 58rem;
    @media (max-width: 976px) {
      width: 48rem;
      height: 48rem;
      top: 42rem;
    }
    @media (max-width: 768px) {
      width: 40rem;
      height: 40rem;
      top: 48rem;
    }
    @media (max-width: 520px) {
      width: 22rem;
      height: 22rem;
      top: 18rem;
    }
    @media (max-height: 860px) and (max-width: 1600px) {
      width: 38rem;
      height: 38rem;
      top: 30rem;
    }
  }
`;

const Arrow = styled.div`
  width: 26rem;
  height: 42rem;
  background-color: #b1c3d9b2;
  flex-shrink: 0;
  cursor: pointer;
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;

  @media (max-width: 520px) {
    width: 15rem;
    height: 24rem;
  }
`;

export const LeftArrow = styled(Arrow)`
  mask-image: url(${icLeftArrow});
`;

export const RightArrow = styled(Arrow)`
  mask-image: url(${icRightArrow});
`;
