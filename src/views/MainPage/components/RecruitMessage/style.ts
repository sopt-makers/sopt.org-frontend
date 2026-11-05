import styled from '@emotion/styled';
import { IconChevronRight } from '@sopt-makers/icons';
import { colors, spacing, typography } from '@sopt-mds/design-tokens';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.s48};
  padding: ${spacing.s160} 0;

  ${media.tablet} {
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

export const Badge = styled.div<{ mainColor: string }>`
  display: flex;
  align-items: center;
  gap: ${spacing.s6};
  padding: ${spacing.s6} ${spacing.s14};
  border: 1px solid ${colors.stroke.neutral.subtle};
  border-radius: 999px;
  background: ${colors.bg.layer.default};
  color: ${colors.fg.neutral.default};
  ${typography.body2}

  strong {
    color: ${({ mainColor }) => mainColor};
    font-weight: ${typography.weight.bold};
    letter-spacing: inherit;
  }

  ${media.mobile} {
    ${typography.body3}

    strong {
      ${typography.label4}
    }
  }
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  text-align: center;
`;

export const Title = styled.h2`
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
    max-width: 280px;
    ${typography.body2}
    word-break: keep-all;
  }
`;

export const DesktopBreak = styled.br`
  ${media.mobile} {
    display: none;
  }
`;

export const RecruitLink = styled.a<{ mainColor: string; textColor: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.s2};
  height: 64px;
  padding: 0 ${spacing.s20} 0 ${spacing.s32};
  border-radius: 100px;
  background: ${({ mainColor }) => mainColor};
  box-shadow: ${({ mainColor }) => `0 0 0 1px ${mainColor}52, 0 4px 14px -4px ${mainColor}61,
    0 10px 30px -10px ${mainColor}47`};
  color: ${({ textColor }) => textColor};
  ${typography.heading2}

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
