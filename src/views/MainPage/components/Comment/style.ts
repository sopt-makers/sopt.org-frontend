import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 200px;
  padding-bottom: 800px;
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
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 1440px) {
    padding-top: 200px;
    padding-bottom: 600px;
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
    padding-top: 200px;
    font-family: SUIT;
    font-size: 41px;
    line-height: 45.956px; /* 112.087% */
    letter-spacing: -1.23px;
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
  @media (max-width: 768px) {
    font-size: 57px;
    font-weight: 600;
    line-height: 45.956px; /* 80.624% */
    letter-spacing: -1.71px;
  }
`;
