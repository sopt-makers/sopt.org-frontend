import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: relative;
  padding: 0 88px;
`;

export const TitleWrapper = styled.div`
  position: sticky;
  color: white;
  top: 200px;
  left: 88px;
  z-index: 2;
  @media (max-width: 1440px) {
    top: 0;
    padding-top: 120px;
    padding-bottom: 60px;
    background: linear-gradient(to bottom, ${colors.background} 80%, transparent);
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 1440px) {
    padding-top: 200px;
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
`;
