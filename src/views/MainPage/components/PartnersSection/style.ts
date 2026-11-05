import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, typography } from '@sopt-mds/design-tokens';
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
  padding: 160px 0;
  background: #000;

  ${media.tablet} {
    padding: 120px 0;
  }

  ${media.mobile} {
    gap: 24px;
    padding: 80px 0;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
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
  gap: 48px;
  padding: 32px 48px 32px 0;

  ${media.mobile} {
    gap: 32px;
    padding-right: 32px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const LOGO_WIDTH = 180;
const MOBILE_LOGO_WIDTH = 140;

export const logoImageSizes = `(max-width: ${breakpoints.tablet - 1}px) ${MOBILE_LOGO_WIDTH}px, ${LOGO_WIDTH}px`;

export const Logo = styled.div`
  position: relative;
  flex: 0 0 ${LOGO_WIDTH}px;
  width: ${LOGO_WIDTH}px;
  height: 72px;

  img {
    object-fit: contain;
  }

  ${media.mobile} {
    flex-basis: ${MOBILE_LOGO_WIDTH}px;
    width: ${MOBILE_LOGO_WIDTH}px;
    height: 56px;
  }
`;

export const Link = styled.a`
  display: flex;
  gap: 4px;
  color: ${colors.fg.neutral.bold};
  ${typography.body2}

  &:hover > span {
    background: ${colors.bg.layer.default};
  }

  ${media.mobile} {
    ${typography.body3}
  }
`;

export const LinkText = styled.span`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid ${colors.stroke.neutral.subtle};
  border-radius: 10px;

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

  svg {
    width: 16px;
    height: 16px;
  }

  ${media.mobile} {
    width: 34px;
    height: 34px;
    border-color: ${colors.stroke.neutral.default};
  }
`;
