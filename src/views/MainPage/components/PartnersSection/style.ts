import styled from '@emotion/styled';
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
  background: ${colors.bg.layer.basement};

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

  &:hover > div {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    overflow-x: auto;
  }
`;

export const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 52.5s linear infinite;

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

export const Link = styled.a<{ mainColor: string }>`
  display: flex;
  position: relative;
  isolation: isolate;
  gap: ${spacing.s4};
  color: ${colors.fg.neutral.bold};
  ${typography.body2}

  &::before {
    content: '';
    position: absolute;
    inset: -12px;
    z-index: -1;
    border-radius: 50%;
    background: color-mix(in srgb, ${({ mainColor }) => mainColor} 12%, transparent);
    filter: blur(28px);
    opacity: 0;
    transition: opacity 550ms cubic-bezier(0.2, 0.8, 0.3, 1);
    pointer-events: none;
  }

  &:hover::before,
  &:focus-visible::before {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      transition: none;
    }
  }

  ${media.mobile} {
    ${typography.body3}
  }
`;

export const LinkText = styled.span`
  display: flex;
  align-items: center;
  padding: ${spacing.s8} 15px;
  border: 1px solid ${colors.stroke.neutral.subtle};
  border-radius: 10px;
  transition: background-color 550ms cubic-bezier(0.2, 0.8, 0.3, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  ${Link}:hover &, ${Link}:focus-visible & {
    background: ${colors.bg.layer.default};
  }

  ${media.mobile} {
    padding: 7px 15px;
    border-color: ${colors.stroke.neutral.default};
  }
`;

export const DesktopSpace = styled.span`
  white-space: pre;

  ${media.mobile} {
    display: none;
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
  transition: background-color 550ms cubic-bezier(0.2, 0.8, 0.3, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  ${Link}:hover &, ${Link}:focus-visible & {
    background: ${colors.bg.layer.default};
  }

  ${media.mobile} {
    width: 34px;
    height: 34px;
    border-color: ${colors.stroke.neutral.default};
  }
`;

export const Arrow = styled(Image)`
  width: 14px;
  height: 14px;
  transform: rotate(-90deg);
  transition: transform 550ms cubic-bezier(0.2, 0.8, 0.3, 1);

  ${Link}:hover &, ${Link}:focus-visible & {
    transform: translate(2px, -2px) rotate(-90deg);
  }

  ${media.mobile} {
    width: 11px;
    height: 11px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
