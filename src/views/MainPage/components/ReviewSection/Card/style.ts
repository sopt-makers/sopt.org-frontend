import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { motion } from 'framer-motion';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled(motion.div)<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  flex-shrink: 0;
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};

  width: ${({ isActive }) => (isActive ? '420px' : '340px')};
  height: ${({ isActive }) => (isActive ? '520px' : '428px')};
  border-radius: ${({ isActive }) => (isActive ? '19px' : '15px')};
  padding: ${({ isActive }) => (isActive ? '44px 48px' : '32px 40px')};

  transition: width 0.4s ease, height 0.4s ease, padding 0.4s ease, border-radius 0.4s ease;

  ${media.desktop} {
    width: ${({ isActive }) => (isActive ? '420px' : '340px')};
    height: ${({ isActive }) => (isActive ? '520px' : '428px')};
    padding: ${({ isActive }) => (isActive ? '44px 48px' : '32px 40px')};
  }

  ${media.tablet} {
    width: ${({ isActive }) => (isActive ? '360px' : '300px')};
    height: ${({ isActive }) => (isActive ? '480px' : '388px')};
    padding: ${({ isActive }) => (isActive ? '32px 24px' : '24px 24px')};
  }

  ${media.mobile} {
    width: 100%;
    height: 280px;
    border-radius: 19px;
    padding: 32px 24px;
    cursor: default;
    transition: none;
  }
`;

export const Comment = styled.p<{ isActive: boolean }>(({ isActive }) => ({
  flex: 1,
  overflow: 'hidden',
  color: isActive ? colors.white : colors.gray400,

  ...(isActive ? fontsObject.BODY_1_18_M : fontsObject.BODY_2_16_M),

  [media.mobile]: {
    ...fontsObject.BODY_3_14_M,
  },
}));

export const Footer = styled.div<{ isActive: boolean }>(({ isActive }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flexShrink: 0,
  color: isActive ? colors.white : colors.gray400,

  ...(isActive ? fontsObject.TITLE_6_16_SB : fontsObject.BODY_3_14_M),

  [media.mobile]: {
    ...fontsObject.TITLE_7_14_SB,
  },
}));
