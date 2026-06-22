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

// 35%는 대충 맞춘 값 — 버튼이 너무 밝거나 흐리면 이 % 값만 조정
const HIGHLIGHT_WHITE_MIX = '35%';
const highlightColor = (mainColor: string) =>
  `color-mix(in srgb, ${mainColor}, white ${HIGHLIGHT_WHITE_MIX})`;

export const RecruitButtonWrapper = styled.button<{
  mainColor: string;
  size: RecruitButtonSize;
  x: number;
  y: number;
}>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 99px;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;

  background: ${({ mainColor }) =>
    `linear-gradient(274deg,${mainColor}, ${highlightColor(mainColor)}, ${highlightColor(mainColor)})`};
  background-size: 200% 200%;
  animation: ${BackgroundMove} 1.8s ease-out infinite alternate;

  ${({ size }) => recruitButtonInnerSizeStyle[size]}

  color: ${colors.gray800};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-image: ${({ x, y, mainColor }) => `
      radial-gradient(
        circle 110px at ${x}px ${y}px,
        ${mainColor},
        transparent
      ),
      radial-gradient(
        circle 180px at ${x}px ${y}px,
        ${highlightColor(mainColor)},
        transparent
      )
    `};
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover {
    background: ${({ mainColor }) => highlightColor(mainColor)};
  }

  &:hover::before {
    opacity: 1;
  }

  & > div {
    position: relative;
    z-index: 1;
    color: ${colors.white};
    transition: transform 0.2s;
  }

  &:hover > div {
    transform: scale(0.96);
  }
`;
