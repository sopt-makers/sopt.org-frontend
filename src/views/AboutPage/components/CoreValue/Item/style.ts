import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { css } from '@emotion/react';
import { FadeInDown } from '@src/lib/styles/animation';
import { media } from '@src/lib/styles/breakpoints';

export const ItemContainer = styled.div<{ src: string; isInView: boolean; order: number }>`
  position: relative;
  width: 298px;
  height: 330px;
  padding: 36px 100px;
  gap: 24px;
  border-radius: 24px;
  background: center bottom 36px no-repeat ${colors.gray900} url(${({ src }) => src});
  background-size: calc(120px + 7vw);
  opacity: 0;
  color: ${colors.white};
  ${fontsObject.HEADING_3_28_B};

  ${FadeInDown(50)}
  animation: fadeindown 0.6s forwards;
  animation-play-state: ${({ isInView }) => (isInView ? 'running' : 'paused')};
  animation-delay: ${({ order }) => `${order * 0.2}s`};

  &:hover {
    backdrop-filter: blur(3.5px);
  }

  ${media.desktopLarge} {
    width: 384px;
  }

  ${media.tablet} {
    width: 213px;
    height: 202px;
    padding: 20px 80px;
    gap: 8px;
    border-radius: 14px;
    background-size: 134px 134px;
    background-position: center bottom 14px;
    white-space: nowrap;
  }

  ${media.mobile} {
    width: 100%;
    height: 202px;
    padding: 20px 80px;
    gap: 8px;
    border-radius: 14px;
    background-size: 134px 134px;
    background-position: center bottom 12px;
    white-space: nowrap;
  }
`;

export const BackgroundBlur = styled.div<{ isHovered: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  transition: 0.3s ease-in-out;

  ${({ isHovered }) =>
    isHovered &&
    css`
      backdrop-filter: blur(3.5px);
      background-color: rgba(0, 0, 0, 60%);
    `};

  ${media.tablet} {
    border-radius: 14px;
  }
  ${media.mobile} {
    border-radius: 14px;
  }
`;

export const CoreValue = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ValueTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  white-space: nowrap;

  ${media.tablet} {
    ${fontsObject.TITLE_5_18_SB};
  }

  ${media.mobile} {
    ${fontsObject.TITLE_5_18_SB};
  }
`;

export const ValueTitle = styled.h2`
  color: ${colors.white};
  ${fontsObject.HEADING_3_28_B};
  text-align: center;

  ${media.tablet} {
    ${fontsObject.TITLE_5_18_SB};
  }
  ${media.mobile} {
    ${fontsObject.TITLE_5_18_SB};
  }
`;

export const ValueDescription = styled.div<{ isHovered: boolean }>`
  display: flex;
  width: 240px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  transition: 0.3s;
  white-space: pre-line;
  word-break: keep-all;

  color: ${colors.white};
  text-align: center;
  font-family: SUIT;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px; /* 150% */
  letter-spacing: -0.56px;
  opacity: 0;
  ${({ isHovered }) => isHovered && 'opacity: 1'};

  ${media.tablet} {
    width: 200px;
    ${fontsObject.HEADING_6_18_B};
  }
  ${media.mobile} {
    width: 200px;
    ${fontsObject.HEADING_6_18_B};
  }
`;
