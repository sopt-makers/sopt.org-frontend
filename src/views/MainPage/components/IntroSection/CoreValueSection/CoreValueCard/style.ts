import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import Image from 'next/image';
import { css } from '@emotion/react';
import { media } from '@src/lib/styles/breakpoints';

export const CardContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 20px;
  transition: width 0.7s ease;

  ${media.desktopLarge} {
    width: 236px;
    height: 446px;

    ${({ isActive }) =>
      isActive &&
      css`
        width: 664px;
      `};
  }

  ${media.desktop} {
    width: 127px;
    height: 446px;

    ${({ isActive }) =>
      isActive &&
      css`
        width: 626px;
      `};
  }

  ${media.tablet} {
    width: 135px;
    height: 300px;
    border-radius: 20px;
    ${({ isActive }) =>
      isActive &&
      css`
        width: 386px;
      `};
  }

  ${media.mobile} {
    width: 100%;
    height: 154px;
    border-radius: 20px;
  }
`;

export const CoreValueImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
`;

export const GradientOverlay = styled.div<{ isActive: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  transition: opacity 0.3s ease;
  background: ${({ isActive }) =>
    isActive
      ? 'linear-gradient(180deg, rgba(0, 0, 0, 0) 29.56%, #000 100%)'
      : 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)'};
`;

export const CardContent = styled.div<{ isActive: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 36px;
  gap: 12px;
  z-index: 20;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.2s ease;
  transition-delay: ${({ isActive }) => (isActive ? '0.25s' : '0s')};
  will-change: opacity;

  ${media.tablet} {
    width: 100%;
    padding: 20px;
  }

  ${media.mobile} {
    width: 100%;
    padding: 12px;
    gap: 8px;
  }
`;

export const CardTitle = styled.h3`
  font-family: SUIT;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  ${media.tablet} {
    width: 100%;
    font-size: 24px;
  }

  ${media.mobile} {
    position: relative;
    width: 100%;
    z-index: 1;
    ${fontsObject.HEADING_7_16_B}
  }
`;

export const CardDetail = styled.p`
  color: ${colors.gray100};
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: -0.48px;
  word-break: keep-all;
  white-space: pre-line;

  ${media.tablet} {
    width: 100%;
    font-size: 14px;
  }

  ${media.mobile} {
    width: 100%;
    ${fontsObject.LABEL_5_11_SB}
  }
`;

export const CardValue = styled.p<{ isActive: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ isActive }) => (isActive ? 0 : 1)};
  transition: opacity 0.5s ease;
  z-index: 40;
  white-space: nowrap;

  font-family: SUIT;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.8px;

  ${media.tablet} {
    font-size: 24px;
  }

  ${media.mobile} {
    ${fontsObject.HEADING_7_16_B}
  }
`;

export const MobilePrimaryColorCircle = styled.div<{ highColor: string }>`
  position: absolute;
  top: 12px;
  left: -10px;
  transform: translate(15%, -85%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ highColor }) => highColor};
  opacity: 0.8;
  z-index: -1;
`;

export const PrimaryColorCircle = styled.div<{ isActive: boolean; highColor: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(15%, -85%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${({ highColor }) => highColor};
  z-index: 30;
  opacity: ${({ isActive }) => (isActive ? 0 : 0.7)};
  transition: opacity 0.5s ease;

  ${media.tablet} {
    width: 24px;
    height: 24px;
    transform: translate(30%, -105%);
  }

  ${media.mobile} {
    width: 24px;
    height: 24px;
    transform: translate(30%, -105%);
  }
`;
