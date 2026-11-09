import styled from '@emotion/styled';
import { colors, spacing, typography } from '@sopt-mds/design-tokens';
import Image from 'next/image';
import { breakpoints, media } from '@src/lib/styles/breakpoints';

export const Section = styled.section`
  padding: ${spacing.s160} 30px;
  background: ${colors.bg.layer.basement};

  ${media.tablet} {
    padding: ${spacing.s120} 40px;
  }
  ${media.mobile} {
    padding: ${spacing.s80} 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop - 1}px) {
    flex-direction: column;
    gap: 40px;
  }
  ${media.mobile} {
    gap: 32px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex: 0 0 304px;
  flex-direction: column;
  align-items: flex-start;
  gap: 46px;

  @media (max-width: ${breakpoints.desktop - 1}px) {
    flex: none;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Title = styled.h2`
  color: ${colors.fg.neutral.bold};
  /* typography/display2 토큰이 없어 직접 지정합니다. */
  font-size: 56px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -0.02em;
  ${media.mobile} {
    ${typography.heading1}
  }
`;
export const Subtitle = styled.p`
  color: ${colors.fg.neutral.default};
  /* typography/lead1 토큰이 없어 기본 타이포그래피 토큰으로 조합합니다. */
  ${typography.body1} font-size: 20px;
  line-height: 30px;
  ${media.mobile} {
    ${typography.body3}
  }
`;
export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media (max-width: ${breakpoints.desktop - 1}px) {
    flex-direction: row;
    gap: 24px;
  }
  ${media.mobile} {
    gap: 12px;
  }
`;
export const Tab = styled.button<{ selected: boolean }>`
  position: relative;
  padding-bottom: 8px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? colors.fg.neutral.bold : colors.fg.neutral.ghost)};
  ${typography.title4}
  transition: color 250ms ease;
  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: ${colors.bg.neutral.inverse};
    content: '';
    transform: scaleX(${({ selected }) => (selected ? 1 : 0)});
    transition: transform 250ms ease;
  }
  &:hover {
    color: ${colors.fg.neutral.default};
  }
  &:focus-visible {
    outline: 2px solid ${colors.fg.neutral.bold};
    outline-offset: 3px;
  }
  ${media.mobile} {
    ${typography.title5}
  }
  @media (prefers-reduced-motion: reduce) {
    &,
    &::after {
      transition: none;
    }
  }
`;
export const List = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  gap: 4px;
`;
export const Item = styled.div<{ open: boolean }>`
  border-bottom: 1px solid ${colors.stroke.neutral.subtle};
  background: ${({ open }) => (open ? colors.bg.neutral.ghost : 'transparent')};
  transition: background-color 250ms ease;
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
export const Question = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 24px;
  cursor: pointer;
  text-align: left;
  &:focus-visible {
    outline: 2px solid ${colors.fg.neutral.bold};
    outline-offset: -2px;
  }
  ${media.mobile} {
    align-items: flex-start;
    gap: 8px;
    padding: 16px;
  }
`;
export const QuestionMark = styled.span`
  color: #7cf2d2;
  ${typography.title4}
  ${media.mobile} {
    ${typography.title5}
  }
`;
export const QuestionText = styled.span`
  flex: 1;
  min-width: 0;
  color: ${colors.fg.neutral.bold};
  ${typography.title4}
  /* typography/heading5 토큰이 없어 기본 타이포그래피 토큰으로 조합합니다. */
  ${media.mobile} {
    ${typography.body2} font-weight: ${typography.weight.bold};
  }
`;
export const Icon = styled(Image)`
  flex: none;
  ${media.mobile} {
    width: 20px;
    height: 20px;
  }
`;
export const AnswerWrapper = styled.div<{ open: boolean }>`
  display: grid;
  grid-template-rows: ${({ open }) => (open ? '1fr' : '0fr')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: grid-template-rows 300ms ease, opacity 300ms ease;
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
export const AnswerInner = styled.div`
  min-height: 0;
  overflow: hidden;
`;
export const Answer = styled.p`
  padding: 0 24px 24px;
  color: ${colors.fg.neutral.default};
  white-space: pre-line;
  /* typography/lead2 토큰이 없어 기본 타이포그래피 토큰으로 조합합니다. */
  ${typography.body1} font-size: 18px;
  line-height: 30px;
  ${media.mobile} {
    ${typography.body3} padding: 0 24px 16px 40px;
  }
`;
