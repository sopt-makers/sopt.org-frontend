import styled from '@emotion/styled';
import { IconChevronRight } from '@sopt-makers/icons';
import { colors, spacing, typography } from '@sopt-mds/design-tokens';
import Link from 'next/link';
import { media } from '@src/lib/styles/breakpoints';
import { tablet } from '@src/views/MainPage/breakpoints';

export const Wrapper = styled.section<{ mainColor: string }>`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.s48};
  padding: ${spacing.s160} 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background: ${({ mainColor }) =>
      `radial-gradient(ellipse 50% 45% at 50% 50%, color-mix(in srgb, ${mainColor} 7%, transparent), transparent)`};
    opacity: 0;
    transition: opacity 550ms cubic-bezier(0.2, 0.8, 0.3, 1);
  }

  &:has([data-recruit-cta]:hover)::before {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      transition: none;
    }
  }

  ${tablet} {
    gap: ${spacing.s32};
    padding: ${spacing.s120} ${spacing.s40};
  }

  ${media.mobile} {
    gap: ${spacing.s24};
    padding: ${spacing.s80} ${spacing.s20};
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.s20};
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.s6};
  padding: ${spacing.s6} ${spacing.s14};
  border: 1px solid ${colors.stroke.neutral.subtle};
  border-radius: 999px;
  background: ${colors.bg.layer.default};
  color: ${colors.fg.neutral.default};
  ${typography.body2}

  ${media.mobile} {
    ${typography.body3}
  }
`;

export const BadgeEmphasis = styled.strong<{ mainColor: string }>`
  color: ${({ mainColor }) => mainColor};
  font-weight: ${typography.weight.bold};
  letter-spacing: inherit;

  ${media.mobile} {
    ${typography.label4}
  }
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  text-align: center;
`;

export const DesktopLineBreak = styled.br`
  ${media.mobile} {
    display: none;
  }
`;

export const Title = styled.h2`
  /* typography/display3 토큰이 없어 임시로 직접 지정합니다. */
  color: ${colors.fg.neutral.bold};
  font-size: 48px;
  font-weight: ${typography.weight.bold};
  line-height: 72px;
  letter-spacing: ${typography.letterSpacing.default};

  ${media.mobile} {
    ${typography.heading2}
  }
`;

export const Description = styled.p`
  color: ${colors.fg.neutral.subtle};
  ${typography.title3}

  ${media.mobile} {
    max-width: 252px;
    ${typography.body2}
    word-break: keep-all;
  }
`;

export const RecruitLink = styled(Link, {
  shouldForwardProp: (prop) =>
    prop !== 'mainColor' && prop !== 'textColor' && prop !== '$isVisible',
})<{ mainColor: string; textColor: string }>`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.s2};
  height: 64px;
  padding: 0 ${spacing.s20} 0 ${spacing.s32};
  border-radius: 100px;
  background: ${({ mainColor }) => mainColor};
  box-shadow: ${({ mainColor }) => `0 0 0 1px ${mainColor}52, 0 4px 14px -4px ${mainColor}61,
    0 10px 30px -10px ${mainColor}47`};
  color: ${({ textColor }) => textColor};
  ${typography.heading2}

  transition: transform 550ms cubic-bezier(0.2, 0.8, 0.3, 1),
    box-shadow 550ms cubic-bezier(0.2, 0.8, 0.3, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ mainColor }) => `0 0 0 1px ${mainColor}52, 0 8px 20px -4px ${mainColor}61,
      0 16px 36px -10px ${mainColor}47`};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }

  ${media.mobile} {
    height: 42px;
    padding: 0 ${spacing.s16} 0 ${spacing.s24};
    ${typography.title5}
  }
`;

export const Arrow = styled(IconChevronRight)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  ${media.mobile} {
    width: 20px;
    height: 20px;
  }
`;

const FLOATING_CTA_DURATION = '420ms';

export const FloatingRecruitLink = styled(RecruitLink)<{ $isVisible: boolean }>`
  position: fixed;
  z-index: 50;
  inset-inline: 0;
  bottom: calc(${spacing.s40} + env(safe-area-inset-bottom));
  width: fit-content;
  margin-inline: auto;
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  translate: 0 ${({ $isVisible }) => ($isVisible ? '0' : '20px')};
  transition: opacity ${FLOATING_CTA_DURATION} cubic-bezier(0.2, 0.7, 0.3, 1),
    translate ${FLOATING_CTA_DURATION} cubic-bezier(0.2, 0.7, 0.3, 1), box-shadow 550ms ease,
    transform 550ms cubic-bezier(0.2, 0.8, 0.3, 1),
    visibility 0s ${({ $isVisible }) => ($isVisible ? '0s' : FLOATING_CTA_DURATION)};

  ${media.mobile} {
    bottom: calc(${spacing.s24} + env(safe-area-inset-bottom));
    height: 64px;
    padding: 0 ${spacing.s20} 0 ${spacing.s32};
    white-space: nowrap;
    ${typography.heading2}

    & ${Arrow} {
      width: 32px;
      height: 32px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    translate: none;
  }
`;
