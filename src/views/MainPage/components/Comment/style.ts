import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';
import icArrowComment from '@src/assets/icons/ic_arrow_comment.svg';
import icLeftArrow from '@src/assets/icons/ic_arrow_left.svg';
import icRightArrow from '@src/assets/icons/ic_arrow_right.svg';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 256px;

  @media (max-width: 48rem) {
    padding-top: 149px;
    padding-bottom: 200px;
  }

  @media (max-width: 23.5rem) {
    padding-top: 111px;
  }
`;

export const TitleShadow = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: calc(100% + 250px);
  top: -120px;
  left: 0;
  background: linear-gradient(#f6f8fc 72%, transparent);

  @media (max-width: 48rem) {
    height: 100%;
  }
`;

export const TitleWrapper = styled.div`
  position: sticky;
  color: white;
  top: 200px;
  left: 88px;
  z-index: 2;
  margin-bottom: 200px;

  @media (max-width: 100rem) {
    top: 120px;
    transition: 0.4s;
  }
  @media (max-width: 48rem) {
    position: static;
    padding-top: 0;
    margin-bottom: 0;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-bottom: 200px;
  @media (max-width: 100rem) {
    padding-bottom: 240px;
  }
  @media (max-width: 48rem) {
    padding-top: 64px;
    padding-bottom: 0;
    flex-direction: row;
    align-items: center;
    gap: 22px;
  }
  @media (max-width: 32.5rem) {
    padding-top: 32px;
    gap: 12px;
  }
`;

export const SectionTitle = styled.div`
  position: relative;
  color: ${colors.black};
  font-family: SUIT;
  font-size: 55rem;
  font-style: normal;
  font-weight: 500;
  line-height: 61.6px; /* 112% */
  letter-spacing: -1.65px;
  z-index: 2;
  @media (max-width: 48rem) and (min-width: 100rem) {
    padding-bottom: 200px;
  }
  @media (max-width: 48rem) {
    font-family: SUIT;
    font-size: 41rem;
    line-height: 45.956px; /* 112.087% */
    letter-spacing: -1.23px;
  }
  @media (max-width: 32.5rem) {
    font-size: 21rem;
    font-style: normal;
    font-weight: 500;
    line-height: 24.28px; /* 115.617% */
    letter-spacing: -0.63px;
  }
  @media (max-height: 53.75rem) and (max-width: 100rem) {
    font-size: 32rem;
    line-height: 32px;
  }
`;

export const SectionSubTitle = styled.p`
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
  }
`;

export const Summary = styled(motion.div)<{ color: string }>`
  color: ${({ color }) => color};

  font-family: SUIT;
  font-size: 77rem;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -2.31px;
  white-space: pre-line;
  padding-top: 36px;
  padding-left: 76px;
  position: relative;
  @media (max-width: 102.5rem) {
    font-size: 68rem;
    height: 185px;
  }
  @media (max-width: 100rem) {
    white-space: unset;
    height: auto;
  }

  @media (max-width: 68.75rem) {
    white-space: pre-line;
  }

  @media (max-width: 61rem) {
    font-size: 60rem;
    padding-top: 28px;
    padding-left: 60px;
  }

  @media (max-width: 48rem) {
    font-size: 57rem;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: -1.71px;
    padding-left: 48px;
  }
  @media (max-width: 32.5rem) {
    font-size: 30rem;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.9px;
    padding-top: 12px;
    padding-left: 32px;
  }
  @media (max-height: 53.75rem) and (max-width: 100rem) {
    font-size: 46rem;
    line-height: 48px;
    padding-left: 48px;
    padding-top: 24px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 52px;
    mask-image: url(${icArrowComment});
    mask-size: contain;
    mask-repeat: no-repeat;
    background-color: ${({ color }) => color};
    width: 58px;
    height: 58px;
    @media (max-width: 61rem) {
      width: 48px;
      height: 48px;
      top: 42px;
    }
    @media (max-width: 48rem) {
      width: 40px;
      height: 40px;
      top: 48px;
    }
    @media (max-width: 32.5rem) {
      width: 22px;
      height: 22px;
      top: 18px;
    }
    @media (max-height: 53.75rem) and (max-width: 100rem) {
      width: 38px;
      height: 38px;
      top: 30px;
    }
  }
`;

const Arrow = styled.div`
  width: 26px;
  height: 42px;
  background-color: #b1c3d9b2;
  flex-shrink: 0;
  cursor: pointer;
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;

  @media (max-width: 32.5rem) {
    width: 15px;
    height: 24px;
  }
`;

export const LeftArrow = styled(Arrow)`
  mask-image: url(${icLeftArrow});
`;

export const RightArrow = styled(Arrow)`
  mask-image: url(${icRightArrow});
`;
