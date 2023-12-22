import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';
import icArrowComment from '@src/assets/icons/ic_arrow_comment.svg';
import icLeftArrow from '@src/assets/icons/ic_arrow_left.svg';
import icRightArrow from '@src/assets/icons/ic_arrow_right.svg';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 200px;
  padding-bottom: 240px;
  @media (max-width: 768px) {
    height: 130vh;
    padding-top: 0;
  }
  @media (max-width: 520px) {
    height: inherit;
    padding-top: 0;
    padding-bottom: 200px;
  }
`;

export const TitleWrapper = styled.div<{ activeIdx: number }>`
  position: sticky;
  color: white;
  top: 200px;
  left: 88px;
  z-index: 2;
  @media (max-width: 1440px) {
    top: 0;
    padding-top: 120px;
    padding-bottom: 80px;
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    position: static;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 1440px) {
    padding-top: 200px;
    padding-bottom: 240px;
  }
  @media (max-width: 768px) {
    padding-top: 64px;
    flex-direction: row;
    align-items: center;
    gap: 22px;
  }
  @media (max-width: 520px) {
    padding-top: 32px;
    padding-bottom: 0;
    gap: 12px;
  }
`;

export const SectionTitle = styled.div`
  color: ${colors.white};
  font-family: SUIT;
  font-size: 55px;
  font-style: normal;
  font-weight: 500;
  line-height: 61.6px; /* 112% */
  letter-spacing: -1.65px;
  @media (max-width: 768px) and (min-width: 1440px) {
    padding-bottom: 200px;
  }
  @media (max-width: 768px) {
    font-family: SUIT;
    font-size: 41px;
    line-height: 45.956px; /* 112.087% */
    letter-spacing: -1.23px;
  }
  @media (max-width: 520px) {
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: 24.28px; /* 115.617% */
    letter-spacing: -0.63px;
  }
`;

export const Summary = styled(motion.div)<{ color: string }>`
  color: ${({ color }) => color};

  font-family: SUIT;
  font-size: 77px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -2.31px;
  white-space: pre-line;
  padding-top: 36px;
  padding-left: 76px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 57px;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: -1.71px;
    height: 156px;
    padding-left: 48px;
  }
  @media (max-width: 520px) {
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.9px;
    padding-top: 12px;
    height: 80px;
    padding-left: 32px;
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
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      top: 48px;
    }
    @media (max-width: 520px) {
      width: 22px;
      height: 22px;
      top: 18px;
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

  @media (max-width: 520px) {
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
