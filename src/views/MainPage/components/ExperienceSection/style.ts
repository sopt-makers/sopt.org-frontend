import styled from '@emotion/styled';
import { colorBg, colorFg, colorStroke, spacing, typography } from '@sopt-mds/design-tokens';
import { css } from '@emotion/react';
import icArrowComment from '@src/assets/icons/ic_arrow_comment.svg';
import { media } from '@src/lib/styles/breakpoints';

const transition = '550ms cubic-bezier(.2, .8, .3, 1)';
const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Container = styled.section<{ mainColor: string }>`
  --experience-color: ${({ mainColor }) => mainColor};
  display: flex;
  flex-direction: column;
  gap: ${spacing.s64};
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: ${spacing.s160} ${spacing.s120};

  ${media.tablet} {
    gap: ${spacing.s32};
    padding: ${spacing.s120} ${spacing.s40};
  }

  ${media.mobile} {
    gap: ${spacing.s24};
    padding: ${spacing.s80} ${spacing.s20};
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.s8};
`;

export const Title = styled.h2`
  ${typography.heading1}
  color: ${colorFg.neutral.bold};

  ${media.mobile} {
    ${typography.title3}
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 510fr) minmax(0, 612fr);
  align-items: start;
  gap: 78px;

  ${media.desktop} {
    gap: ${spacing.s40};
  }

  ${media.tablet} {
    grid-template-columns: minmax(0, 1fr);
    justify-items: center;
    gap: ${spacing.s24};
  }

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);
    gap: ${spacing.s24};
  }
`;

export const ImagePanel = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 510 / 435;
  overflow: hidden;
  border-radius: 12px;
  background: ${colorBg.layer.default};

  ${media.tablet} {
    max-width: 510px;
  }

  ${media.mobile} {
    border-radius: 6px;
  }
`;

export const ExperienceImage = styled.img<{ isActive: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity ${transition};
  ${reducedMotion}
`;

export const Items = styled.div`
  width: 100%;
  min-width: 0;
`;

export const Item = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ isActive }) => (isActive ? spacing.s24 : spacing.s32)} 0;
  border: 0;
  border-bottom: 1px solid ${colorStroke.neutral.subtle};
  background: none;
  text-align: left;
  font-family: inherit;
  color: ${({ isActive }) => (isActive ? 'var(--experience-color)' : colorFg.neutral.subtle)};
  cursor: pointer;
  transition: padding ${transition}, color ${transition};

  &:hover {
    color: ${({ isActive }) => (isActive ? 'var(--experience-color)' : colorFg.neutral.default)};
  }

  &:focus-visible {
    outline: 2px solid var(--experience-color);
    outline-offset: 4px;
  }

  ${media.mobile} {
    padding: ${({ isActive }) => (isActive ? spacing.s24 : spacing.s16)} 0 ${spacing.s16};
  }

  ${reducedMotion}
`;

export const Fold = styled.span<{ isActive: boolean }>`
  display: grid;
  grid-template-rows: ${({ isActive }) => (isActive ? '1fr' : '0fr')};
  width: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: grid-template-rows ${transition}, opacity ${transition};
  ${reducedMotion}
`;

export const FoldInner = styled.span`
  min-height: 0;
  overflow: hidden;
`;

export const Meta = styled.span`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${spacing.s24};
`;

export const Chip = styled.span`
  ${typography.label4}
  padding: ${spacing.s4} ${spacing.s8};
  border-radius: 8px;
  background: ${colorBg.neutral.subtle};
  color: ${colorFg.neutral.bold};
`;

export const Heading = styled.span<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ isActive }) => (isActive ? spacing.s12 : spacing.s24)};
  transition: gap ${transition};

  ${media.mobile} {
    gap: ${({ isActive }) => (isActive ? spacing.s12 : spacing.s20)};
  }

  ${reducedMotion}
`;

export const Arrow = styled.span<{ isActive: boolean }>`
  flex-shrink: 0;
  width: ${({ isActive }) => (isActive ? 44 : 32)}px;
  height: ${({ isActive }) => (isActive ? 44 : 32)}px;
  mask: url(${icArrowComment}) center / 64% no-repeat;
  background-color: currentColor;
  transform: rotate(${({ isActive }) => (isActive ? 0 : 90)}deg);
  transition: width ${transition}, height ${transition}, transform ${transition};

  ${media.mobile} {
    width: ${({ isActive }) => (isActive ? 32 : 24)}px;
    height: ${({ isActive }) => (isActive ? 32 : 24)}px;
  }

  ${reducedMotion}
`;

export const Name = styled.span<{ isActive: boolean }>`
  ${typography.heading2}
  white-space: nowrap;
  transition: font-size ${transition}, line-height ${transition}, letter-spacing ${transition};

  ${({ isActive }) =>
    isActive &&
    css`
      /* typography/display4 토큰이 없어 임시로 직접 지정합니다. */
      font-size: 40px;
      line-height: 60px;
      letter-spacing: -0.02em;
    `}

  ${media.mobile} {
    ${({ isActive }) => (isActive ? typography.heading2 : typography.title4)}
  }

  ${reducedMotion}
`;

export const Description = styled.span`
  display: block;
  padding-top: ${spacing.s24};
  color: ${colorFg.neutral.default};
  /* typography/lead2 토큰이 없어 기본 타이포그래피 토큰으로 조합합니다. */
  ${typography.body1}
  font-size: 18px;
  line-height: 30px;

  ${media.mobile} {
    padding-top: ${spacing.s16};
    ${typography.body3}
  }
`;
