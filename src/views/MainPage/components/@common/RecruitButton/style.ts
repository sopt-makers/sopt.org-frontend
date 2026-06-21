import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { css } from '@emotion/react';
import { BackgroundMove } from '@src/lib/styles/animation';
import { media } from '@src/lib/styles/breakpoints';
import type { RecruitButtonSize } from '@src/views/MainPage/components/@common/RecruitButton';

const recruitButtonInnerSizeStyle: Record<RecruitButtonSize, ReturnType<typeof css>> = {
  md: css`
    ${media.desktopLarge} {
      padding: 18px 40px;
      ${fontsObject.HEADING_4_24_B}
    }

    ${media.desktop} {
      padding: 18px 40px;
      ${fontsObject.HEADING_4_24_B}
    }

    ${media.tablet} {
      padding: 16px 32px;
      ${fontsObject.LABEL_1_18_SB}
    }

    ${media.mobile} {
      padding: 12px 24px;
      ${fontsObject.LABEL_2_16_SB}
    }
  `,

  sm: css`
    ${media.desktopLarge} {
      padding: 18px 40px;
      ${fontsObject.HEADING_4_24_B}
    }

    ${media.desktop} {
      padding: 18px 40px 18px 32px;
      ${fontsObject.HEADING_4_24_B}
    }

    ${media.tablet} {
      padding: 16px 26px;
      ${fontsObject.LABEL_1_18_SB}
    }

    ${media.mobile} {
      padding: 12px 20px;
      ${fontsObject.LABEL_2_16_SB}
    }
  `,
};

export const RecruitButtonWrapper = styled.button<{
  mainColor: string;
  highColor: string;
  size: RecruitButtonSize;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 99px;

  background: ${({ mainColor, highColor }) =>
    `linear-gradient(274deg,${mainColor}, ${highColor}, ${highColor})`};
  background-size: 200% 200%;
  animation: ${BackgroundMove} 1.8s ease-out infinite alternate;

  ${({ size }) => recruitButtonInnerSizeStyle[size]}

  color: ${colors.gray800};
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ highColor }) => highColor};
  }
`;

export const MouseTrackerWrapper = styled.div<{
  x: number;
  y: number;
  mainColor: string;
  highColor: string;
  size: RecruitButtonSize;
}>`
  border-radius: 99px;
  border: none;
  background: transparent;

  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 100%;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${({ x, y, mainColor, highColor }) => `
    radial-gradient(
        circle 110px at ${x}px ${y}px,
        ${mainColor},
        transparent
      ), radial-gradient(
        circle 180px at ${x}px ${y}px,
       ${highColor},
        transparent
      )
    `};
    opacity: 0;
    transition-duration: 0.4s;
  }

  &:hover::before {
    opacity: 1;
  }

  > * {
    transition: transform 0.2s;
  }

  &:hover > * {
    transform: scale(0.96);
  }

  & > div {
    color: ${colors.white};

    font-size: 100%;
  }
`;
