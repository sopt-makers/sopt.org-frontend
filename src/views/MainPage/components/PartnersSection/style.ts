import styled from '@emotion/styled';
import { IconArrowUpRight } from '@sopt-makers/icons';
import { colors, spacing, typography } from '@sopt-mds/design-tokens';
import Image from 'next/image';
import { keyframes } from '@emotion/react';
import { breakpoints, media } from '@src/lib/styles/breakpoints';

const scroll = keyframes`
  to { transform: translateX(-50%); }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 49px;
  width: 100%;
  padding: ${spacing.s160} 0;
  background: #000;

  ${media.tablet} {
    padding: ${spacing.s120} 0;
  }

  ${media.mobile} {
    gap: ${spacing.s24};
    padding: ${spacing.s80} 0;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.s8};
`;

export const Title = styled.h2`
  color: ${colors.fg.neutral.bold};
  ${typography.heading1}
  text-align: center;

  ${media.mobile} {
    ${typography.title3}
  }
`;

export const Marquee = styled.div`
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);

  @media (prefers-reduced-motion: reduce) {
    overflow-x: auto;
  }
`;

export const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 30s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const LogoList = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.s48};
  padding: ${spacing.s32} ${spacing.s48} ${spacing.s32} 0;

  ${media.mobile} {
    gap: ${spacing.s32};
    padding-right: ${spacing.s32};
    padding-top: ${spacing.s40};
    padding-bottom: ${spacing.s40};
  }
`;

const LOGO_WIDTH = 180;
const MOBILE_LOGO_WIDTH = 140;

export const logoImageSizes = `(max-width: ${
  breakpoints.tablet - 1
}px) ${MOBILE_LOGO_WIDTH}px, ${LOGO_WIDTH}px`;

export const Logo = styled.div`
  position: relative;
  flex: 0 0 ${LOGO_WIDTH}px;
  width: ${LOGO_WIDTH}px;
  height: 72px;

  ${media.mobile} {
    flex-basis: ${MOBILE_LOGO_WIDTH}px;
    width: ${MOBILE_LOGO_WIDTH}px;
    height: 56px;
  }
`;

export const LogoImage = styled(Image)`
  object-fit: contain;
`;

export const Link = styled.a`
  display: flex;
  gap: ${spacing.s4};
  color: ${colors.fg.neutral.bold};
  ${typography.body2}

  ${media.mobile} {
    ${typography.body3}
  }
`;

export const LinkText = styled.span`
  display: flex;
  align-items: center;
  padding: ${spacing.s8} ${spacing.s16};
  border: 1px solid ${colors.stroke.neutral.subtle};
  border-radius: 10px;

  ${Link}:hover & {
    background: ${colors.bg.layer.default};
  }

  ${media.mobile} {
    border-color: ${colors.stroke.neutral.default};
  }
`;

export const LinkIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${colors.stroke.neutral.subtle};
  border-radius: 10px;

  ${Link}:hover & {
    background: ${colors.bg.layer.default};
  }

  ${media.mobile} {
    width: 34px;
    height: 34px;
    border-color: ${colors.stroke.neutral.default};
  }
`;

export const Arrow = styled(IconArrowUpRight)`
  width: 16px;
  height: 16px;
`;
