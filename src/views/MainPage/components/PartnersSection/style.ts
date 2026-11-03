import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
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
  color: #fcfcfc;
  font-size: 32rem;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.64px;
  text-align: center;

  ${media.mobile} {
    font-size: 20rem;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.4px;
  }
`;

export const Marquee = styled.div`
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);

  &:hover > div, &:focus-visible > div {
    animation-play-state: paused;
  }

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
  color: #fcfcfc;
  font-size: 14rem;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.21px;

  &:hover > span {
    background: #171719;
  }

  ${media.mobile} {
    font-size: 12rem;
    line-height: 18px;
    letter-spacing: -0.24px;
  }
`;

export const LinkText = styled.span`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid #3f3f47;
  border-radius: 10px;
`;

export const LinkIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #3f3f47;
  border-radius: 10px;

  svg {
    width: 16px;
    height: 16px;
  }

  ${media.mobile} {
    width: 34px;
    height: 34px;
  }
`;
