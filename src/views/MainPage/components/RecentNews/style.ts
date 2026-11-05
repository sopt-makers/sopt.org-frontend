import styled from '@emotion/styled';
import { colors, radius, spacing, typography } from '@sopt-mds/design-tokens';
import { media } from '@src/lib/styles/breakpoints';

export const RecentNews = styled.section`
  padding: ${spacing.s160} 0;
  overflow: hidden;

  ${media.tablet} {
    padding: ${spacing.s120} 0;
  }

  ${media.mobile} {
    padding: ${spacing.s80} 0;
  }
`;

export const Content = styled.div`
  max-width: 1201px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    margin: 0 ${spacing.s40};
  }

  ${media.mobile} {
    margin: 0 ${spacing.s20};
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: ${spacing.s8};
  margin-bottom: 58px;

  ${media.tablet} {
    margin-bottom: ${spacing.s32};
  }

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacing.s32};
    margin-bottom: ${spacing.s8};
  }
`;

export const Title = styled.h2`
  color: ${colors.fg.neutral.bold};
  /* typography/display2 토큰이 없어 임시로 직접 지정합니다. */
  font-size: 56px;
  font-weight: ${typography.weight.bold};
  line-height: 72px;
  letter-spacing: ${typography.letterSpacing.default};

  ${media.mobile} {
    ${typography.heading1}
  }
`;

export const Subtitle = styled.p`
  margin-top: ${spacing.s4};
  color: ${colors.fg.neutral.default};
  /* typography/lead1 토큰이 없어 기본 타이포그래피 토큰으로 조합합니다. */
  font-size: ${typography.size.t20};
  line-height: ${typography.lineHeight.t30};
  letter-spacing: ${typography.letterSpacing.wide};

  ${media.mobile} {
    ${typography.body3}
  }
`;

export const Channels = styled.nav`
  display: flex;
  gap: ${spacing.s16};

  a {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

export const NewsList = styled.ul`
  display: flex;
  gap: ${spacing.s24};
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1023px) {
    margin-right: -40px;
    padding-right: 40px;
  }

  ${media.mobile} {
    margin-right: -20px;
    padding-right: 20px;
  }
`;

export const NewsItem = styled.li`
  flex: 0 0 calc((100% - 72px) / 4);
  min-width: 0;
  scroll-snap-align: start;

  ${media.tablet} {
    flex-basis: 332px;
  }

  ${media.mobile} {
    flex-basis: 240px;
  }
`;

export const ImagePlaceholder = styled.div<{ isSquare: boolean }>`
  width: 100%;
  aspect-ratio: ${({ isSquare }) => (isSquare ? '1 / 1' : '282 / 177')};
  border-radius: ${radius.r12};
  background: ${colors.bg.neutral.ghost};
`;

export const NewsBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.s8};
  margin-top: ${spacing.s16};
`;

export const Category = styled.p`
  color: ${colors.fg.neutral.default};
  ${typography.body3}
`;

export const NewsTitle = styled.p`
  color: ${colors.fg.neutral.bold};
  ${typography.title4}
`;

export const Date = styled.p`
  color: ${colors.fg.neutral.subtle};
  ${typography.body3}
`;
