import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';
import icArrowComment from '@src/assets/icons/ic_arrow_comment.svg';
import icLeftArrow from '@src/assets/icons/ic_arrow_left.svg';
import icRightArrow from '@src/assets/icons/ic_arrow_right.svg';

export const Wrapper = styled.div`
  position: relative;
  @media (max-width: 768px) {
    padding-bottom: 200px;
  }
`;

export const TitleShadow = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: calc(100% + 120px);
  top: 0;
  left: 0;
  background: linear-gradient(#0d111f 72%, transparent);
`;

export const TitleWrapper = styled.div`
  position: sticky;
  color: white;
  top: 200px;
  left: 88px;
  z-index: 2;
  margin-bottom: 200px;

  @media (max-width: 1480px) {
    top: 0;
    padding-top: 120px;
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
  padding-bottom: 200px;
  @media (max-width: 1480px) {
    padding-bottom: 240px;
  }
  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 0;
    flex-direction: row;
    align-items: center;
    gap: 22px;
  }
  @media (max-width: 520px) {
    padding-top: 32px;
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
  position: relative;
  z-index: 2;
  @media (max-width: 768px) and (min-width: 1480px) {
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

export const SectionSubTitle = styled.p`
  color: #5b88f8;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 46.311px; /* 257.282% */
  letter-spacing: -0.36px;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) and (min-width: 429px) {
    font-size: 18px;
    line-height: 46.311px; /* 257.282% */
    letter-spacing: -0.36px;
  }
  @media (max-width: 428px) {
    font-size: 11px;
    line-height: 26.615px; /* 241.956% */
    letter-spacing: -0.22px;
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
  @media (max-width: 1640px) {
    font-size: 68px;
    height: 185px;
  }

  @media (max-width: 976px) {
    font-size: 60px;
    padding-top: 28px;
    padding-left: 60px;
    height: 160px;
  }

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
    @media (max-width: 976px) {
      width: 48px;
      height: 48px;
      top: 42px;
    }
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
