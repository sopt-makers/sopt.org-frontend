import styled from '@emotion/styled';
import { colors, spacing, typography } from '@sopt-mds/design-tokens';
import reviewArrow from '@src/assets/icons/ic_arrow_up_right.svg';
import { breakpoints, media } from '@src/lib/styles/breakpoints';

const REVIEW_ACCENT = '#F77234';
const REVIEW_TRANSITION = '750ms cubic-bezier(.2, .8, .3, 1)';

export const Section = styled.section`
  padding: ${spacing.s160} 30px;
  background: ${colors.bg.layer.basement};
  ${media.tablet} {
    padding: ${spacing.s120} ${spacing.s40};
  }
  ${media.mobile} {
    padding: ${spacing.s80} ${spacing.s20};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.s64};
  max-width: 1200px;
  margin: 0 auto;
  ${media.tablet} {
    gap: ${spacing.s32};
    padding-top: 51px;
  }
  ${media.mobile} {
    gap: ${spacing.s16};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 112px;
  gap: ${spacing.s32};
  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    min-height: 0;
    gap: ${spacing.s32};
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.s4};
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
  ${typography.body1}
  font-size: 20px;
  line-height: 30px;
  ${media.mobile} {
    ${typography.body3}
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex: none;
  gap: 18px;
  padding: ${spacing.s12} 0;
  ${media.tablet} {
    flex-direction: row-reverse;
    padding: 0;
  }
  ${media.mobile} {
    padding: 0;
  }
`;

export const Tab = styled.button<{ selected: boolean }>`
  position: relative;
  padding-bottom: ${spacing.s8};
  color: ${({ selected }) => (selected ? colors.fg.neutral.bold : colors.fg.neutral.ghost)};
  ${typography.title4}
  cursor: pointer;
  transition: color 550ms ease;
  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: ${colors.bg.neutral.inverse};
    content: '';
    transform: scaleX(${({ selected }) => (selected ? 1 : 0)});
    transition: transform 550ms cubic-bezier(0.2, 0.8, 0.3, 1);
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
  min-width: 0;
  border-top: 1px solid ${colors.stroke.neutral.subtle};
  @media (max-width: ${breakpoints.desktop - 1}px) {
    border-top: 0;
  }
`;

export const Item = styled.div<{ open: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 486fr) minmax(0, 666fr);
  align-items: start;
  padding: ${({ open }) => (open ? spacing.s32 : spacing.s24)} ${spacing.s24};
  border-bottom: 1px solid ${colors.stroke.neutral.subtle};
  transition: padding ${REVIEW_TRANSITION};
  @media (max-width: ${breakpoints.desktop - 1}px) {
    grid-template-columns: minmax(0, 1fr);
  }
  ${media.mobile} {
    padding: ${({ open }) => (open ? spacing.s16 : spacing.s12)} ${spacing.s8};
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ReviewTitle = styled.span<{ open: boolean }>`
  min-width: 0;
  overflow-wrap: anywhere;
  color: ${({ open }) => (open ? REVIEW_ACCENT : colors.fg.neutral.subtle)};
  ${typography.heading2}
  /* typography/display4 토큰이 없어 heading2에 크기와 행간을 직접 지정합니다. */
  font-size: ${({ open }) => (open ? '40px' : typography.heading2.fontSize)};
  line-height: ${({ open }) => (open ? '60px' : typography.heading2.lineHeight)};
  transition: color ${REVIEW_TRANSITION}, font-size ${REVIEW_TRANSITION},
    line-height ${REVIEW_TRANSITION};
  ${media.mobile} {
    ${({ open }) => (open ? typography.heading2 : typography.title5)}
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Arrow = styled.span<{ open: boolean }>`
  display: block;
  flex: none;
  width: ${({ open }) => (open ? '44px' : '32px')};
  height: ${({ open }) => (open ? '60px' : '36px')};
  background: ${({ open }) => (open ? REVIEW_ACCENT : colors.fg.neutral.subtle)};
  mask: url(${reviewArrow}) center / ${({ open }) => (open ? '30px' : '22px')} no-repeat;
  transform: rotate(${({ open }) => (open ? '-90deg' : '0deg')});
  transition: transform ${REVIEW_TRANSITION}, width ${REVIEW_TRANSITION},
    height ${REVIEW_TRANSITION}, background-color ${REVIEW_TRANSITION},
    mask-size ${REVIEW_TRANSITION};
  ${media.mobile} {
    width: ${({ open }) => (open ? '32px' : '24px')};
    height: 36px;
    mask-size: ${({ open }) => (open ? '22px' : '17px')};
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Trigger = styled.button`
  display: flex;
  align-items: flex-start;
  gap: ${spacing.s16};
  width: 100%;
  padding-right: ${spacing.s24};
  text-align: left;
  cursor: pointer;
  &::after {
    position: absolute;
    inset: 0;
    content: '';
  }
  &[aria-expanded='false']:hover {
    ${ReviewTitle} {
      color: ${colors.fg.neutral.bold};
    }
    ${Arrow} {
      background: ${colors.fg.neutral.bold};
    }
  }
  &:focus-visible::after {
    outline: 2px solid ${colors.fg.neutral.bold};
    outline-offset: -2px;
  }
  ${media.mobile} {
    align-items: center;
    gap: ${spacing.s8};
    min-height: 36px;
    padding-right: 0;
  }
`;

export const Fold = styled.div<{ open: boolean }>`
  display: grid;
  grid-template-rows: ${({ open }) => (open ? '1fr' : '0fr')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: grid-template-rows ${REVIEW_TRANSITION}, opacity ${REVIEW_TRANSITION},
    visibility ${REVIEW_TRANSITION};
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const FoldInner = styled.div`
  min-height: 0;
  overflow: hidden;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.s24};
  @media (max-width: ${breakpoints.desktop - 1}px) {
    padding-top: ${spacing.s16};
  }
  ${media.mobile} {
    gap: ${spacing.s16};
    padding-top: ${spacing.s8};
  }
`;

export const Comment = styled.p`
  min-height: 84px;
  color: ${colors.fg.neutral.default};
  white-space: pre-line;
  overflow-wrap: anywhere;
  /* typography/lead2 토큰이 없어 기본 타이포그래피 토큰으로 조합합니다. */
  ${typography.body1}
  font-size: 18px;
  line-height: 30px;
  ${media.mobile} {
    min-height: 0;
    ${typography.body3}
  }
`;

export const Author = styled.p`
  color: ${colors.fg.neutral.subtle};
  overflow-wrap: anywhere;
  ${typography.body1}
  ${media.mobile} {
    ${typography.body3}
  }
`;

export const Empty = styled.p`
  padding: ${spacing.s32} ${spacing.s24};
  color: ${colors.fg.neutral.subtle};
  ${typography.body1}
  ${media.mobile} {
    padding: ${spacing.s16} ${spacing.s8};
    ${typography.body3}
  }
`;
