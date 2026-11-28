import styled from '@emotion/styled';
import { colorBg, colorFg, colorStroke, spacing, typography } from '@sopt-mds/design-tokens';
import Link from 'next/link';
import { media } from '@src/lib/styles/breakpoints';

const compact = '@media (max-width: 1279px)';

export const Root = styled.main`
  background: ${colorBg.layer.basement};
  color: ${colorFg.neutral.bold};
  overflow-wrap: anywhere;
`;

export const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 180px 0 396px;
  ${compact} {
    width: 688px;
    padding: ${spacing.s160} 0 ${spacing.s120};
  }
  ${media.mobile} {
    width: 100%;
    padding: 88px ${spacing.s20} ${spacing.s80};
  }
`;

export const Hero = styled.header`
  display: grid;
  gap: 17px;
  padding-left: ${spacing.s4};
  ${compact} {
    padding-left: 0;
    gap: ${spacing.s16};
  }
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${spacing.s24};
  ${compact} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Identity = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.s24};
  ${media.mobile} {
    align-items: flex-start;
    gap: ${spacing.s16};
  }
`;

export const Logo = styled.div`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 12px;
  background: ${colorBg.neutral.default};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const NameRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: ${spacing.s12};
`;

export const Title = styled.h1`
  ${typography.heading1}
  ${media.mobile} {
    ${typography.heading2}
  }
`;

export const Platform = styled.span`
  color: ${colorFg.neutral.subtle};
  ${typography.title5}
  word-spacing: -2px;
`;

export const Summary = styled.p`
  margin-top: ${spacing.s4};
  color: ${colorFg.neutral.subtle};
  ${typography.heading4}
`;

export const ServiceLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${spacing.s12};
  ${media.mobile} {
    gap: ${spacing.s8};
  }
`;

export const ChannelLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${spacing.s16};
`;

export const ServiceLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing.s8};
  height: 40px;
  padding: ${spacing.s8} ${spacing.s16};
  border: 1px solid ${colorStroke.neutral.subtle};
  border-radius: 10px;
  ${typography.body2}
  &:hover, &:focus-visible {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const ExternalArrow = styled.img`
  transform: rotate(-90deg);
`;

export const ChannelLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacing.s14};
  width: 128px;
  height: 128px;
  border-radius: 16px;
  background: ${colorBg.neutral.ghost};
  color: ${colorFg.neutral.default};
  ${typography.body2}
  &:hover, &:focus-visible {
    background: ${colorBg.neutral.ghostHover};
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.s6};
  padding: ${spacing.s4} ${spacing.s8};
  border-radius: 8px;
  background: ${colorBg.neutral.subtle};
  ${typography.label4}
  &::before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 1px;
    background: #7cf2d2;
  }
`;

export const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  &[data-overlay='true'] {
    position: absolute;
    left: 16px;
    bottom: 16px;
    gap: ${spacing.s8};
    ${Badge} {
      gap: ${spacing.s4};
      border-radius: 4px;
      background: ${colorBg.dim.default};
    }
    ${Badge}[data-operating] {
      order: -1;
    }
    ${Badge}::before {
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
    ${media.mobile} {
      display: none;
    }
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 690px 460px;
  align-items: start;
  gap: 50px;
  margin-top: 54px;
  ${compact} {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-top: ${spacing.s40};
    gap: ${spacing.s40};
  }
  ${media.mobile} {
    margin-top: ${spacing.s32};
    gap: ${spacing.s32};
  }
`;

export const MainColumn = styled.div`
  display: grid;
  gap: 86px;
  ${compact} {
    display: contents;
  }
`;

export const Aside = styled.div`
  display: grid;
  gap: 158px;
  ${compact} {
    display: contents;
  }
`;

export const Cover = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  background: ${colorBg.neutral.ghost};
`;

export const Facts = styled.div`
  display: grid;
  gap: ${spacing.s32};
  ${compact} {
    order: 1;
  }
`;

export const Intro = styled.section`
  ${compact} {
    order: 2;
  }
`;

export const Heading = styled.h2`
  ${typography.heading2}
  ${media.mobile} {
    ${typography.heading3}
  }
`;

export const Description = styled.p`
  margin-top: 23px;
  white-space: pre-wrap;
  color: ${colorFg.neutral.default};
  ${typography.body1}
`;

export const Label = styled.h2`
  margin-bottom: ${spacing.s10};
  color: #9e9e9e;
  ${typography.body2}
`;

export const Panel = styled.dl`
  display: grid;
  gap: ${spacing.s8};
  padding: ${spacing.s16} ${spacing.s20};
  border-radius: 8px;
  border: 1px solid ${colorStroke.neutral.subtle};
  background: ${colorBg.layer.default};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr);
  align-items: center;
  column-gap: ${spacing.s40};
  ${typography.body1}
`;

export const Term = styled.dt`
  color: #9e9e9e;
`;

export const Team = styled.section`
  ${compact} {
    order: 3;
  }
`;

export const TeamPanel = styled(Panel)`
  padding: ${spacing.s20};
  gap: ${spacing.s12};
`;

export const TeamRow = styled(Row)`
  ${media.mobile} {
    grid-template-columns: 72px minmax(0, 1fr);
    align-items: start;
    column-gap: ${spacing.s16};
  }
`;

export const Members = styled.dd`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.s8};
`;

export const Member = styled.span`
  padding: ${spacing.s4} ${spacing.s8};
  background: ${colorBg.neutral.ghost};
  border-radius: 4px;
  ${typography.label3}
`;

export const Related = styled.section`
  margin-top: 342px;
  ${compact} {
    margin-top: ${spacing.s120};
  }
  ${media.mobile} {
    margin-top: ${spacing.s80};
  }
`;

export const RelatedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing.s16};
`;

export const Caption = styled.p`
  margin-top: ${spacing.s4};
  color: ${colorFg.neutral.default};
  ${typography.body2}
`;

export const Controls = styled.div`
  display: flex;
  gap: ${spacing.s8};
  &[data-count='1'] {
    display: none;
  }
  @media (min-width: 768px) {
    &[data-count='2'] {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    &[data-count='3'] {
      display: none;
    }
  }
`;

export const Arrow = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${colorFg.neutral.bold};
  background: ${colorBg.neutral.ghost};
  cursor: pointer;
  &:focus-visible {
    outline: 2px solid currentColor;
  }
  &:hover {
    background: ${colorBg.neutral.ghostHover};
  }
`;

export const Track = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% - 48px) / 3);
  gap: ${spacing.s24};
  margin-top: ${spacing.s40};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  ${compact} {
    grid-auto-columns: calc((100% - 24px) / 2);
  }
  ${media.mobile} {
    grid-auto-columns: 100%;
    margin-top: ${spacing.s24};
  }
`;

export const Card = styled(Link)`
  scroll-snap-align: start;
  min-width: 0;
  &:hover ${Image}, &:focus-visible ${Image} {
    transform: scale(1.06);
  }
  &:focus-visible {
    outline-offset: -2px;
  }
`;

export const Thumbnail = styled.div`
  position: relative;
  overflow: hidden;
  height: 256px;
  border-radius: 12px;
  background: ${colorBg.neutral.ghost};
  ${Image} {
    transition: transform 0.2s ease-out;
  }
  ${media.mobile} {
    height: 192px;
    border-radius: 8px;
  }
`;

export const CardDetails = styled.div`
  padding: ${spacing.s28} ${spacing.s12} 0;
  ${media.mobile} {
    padding-top: 18px;
  }
`;

export const CardTitle = styled.h3`
  ${typography.heading2}
  ${media.mobile} {
    ${typography.title5}
  }
`;

export const CardPlatform = styled(Platform)`
  ${media.mobile} {
    ${typography.body3}
  }
`;

export const CardSummary = styled.p`
  margin-top: ${spacing.s6};
  color: ${colorFg.neutral.default};
  /* typography/lead2 토큰이 없어 기본 타이포그래피 토큰으로 조합합니다. */
  ${typography.body1}
  font-size: 18px;
  line-height: 30px;
  ${media.mobile} {
    margin-top: ${spacing.s4};
    ${typography.body2}
  }
`;
