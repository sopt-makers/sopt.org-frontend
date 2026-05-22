import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { motion } from 'framer-motion';
import { media } from '@src/lib/styles/breakpoints';

const CARD_VARIANT = {
  active: {
    base: { width: '420px', height: '520px', borderRadius: '19px', padding: '44px 48px', cursor: 'default' },
    desktop: { width: '420px', height: '520px', padding: '44px 48px' },
    tablet: { width: '360px', height: '480px', padding: '32px 24px' },
  },
  inactive: {
    base: { width: '340px', height: '428px', borderRadius: '15px', padding: '32px 40px', cursor: 'pointer' },
    desktop: { width: '340px', height: '428px', padding: '32px 40px' },
    tablet: { width: '300px', height: '388px', padding: '24px 24px' },
  },
} as const;

export const Wrapper = styled(motion.div)<{ isActive: boolean }>(({ isActive }) => {
  const variant = CARD_VARIANT[isActive ? 'active' : 'inactive'];
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    flexShrink: 0,
    transition: 'width 0.4s ease, height 0.4s ease, padding 0.4s ease, border-radius 0.4s ease',
    ...variant.base,
    [media.desktop]: variant.desktop,
    [media.tablet]: variant.tablet,
    [media.mobile]: {
      width: '100%',
      height: '280px',
      borderRadius: '19px',
      padding: '32px 24px',
      cursor: 'default',
      transition: 'none',
    },
  };
});

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
