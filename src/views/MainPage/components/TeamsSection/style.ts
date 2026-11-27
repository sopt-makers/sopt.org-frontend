import styled from '@emotion/styled';
import { colors, spacing, typography } from '@sopt-mds/design-tokens';
import * as MoreButton from '@src/components/common/MoreButton/style';
import { media } from '@src/lib/styles/breakpoints';
import { TABLET_CONTENT_WIDTH, tablet } from '@src/views/MainPage/breakpoints';

export const Section = styled.section`
  padding: ${spacing.s160} ${spacing.s40};

  ${tablet} {
    padding: ${spacing.s120} ${spacing.s40};
  }

  ${media.mobile} {
    padding: ${spacing.s80} ${spacing.s20};
  }
`;

export const Heading = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.s8};
`;

export const Title = styled.h2`
  ${typography.heading1}
  ${media.mobile} {
    ${typography.title3}
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${spacing.s16};
  max-width: 1200px;
  margin: ${spacing.s64} auto 0;

  ${tablet} {
    max-width: ${TABLET_CONTENT_WIDTH};
    margin-top: ${spacing.s32};
  }

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);
    gap: ${spacing.s40};
    margin-top: ${spacing.s24};
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const LogoPanel = styled.div<{ team: 'media' | 'makers' }>`
  display: grid;
  place-items: center;
  aspect-ratio: 148 / 75;
  border-radius: 12px;
  background: radial-gradient(
      ellipse 75% 115% at 50% 110%,
      ${({ team }) =>
        team === 'media' ? 'rgba(100, 206, 181, 0.24)' : 'rgba(226, 104, 38, 0.24)'},
      transparent
    ),
    radial-gradient(ellipse closest-side, ${colors.bg.layer.basement}, #1c1c20);
  --logo-width: ${({ team }) => (team === 'media' ? '45.6%' : '52.4%')};
  --logo-offset: ${({ team }) => (team === 'media' ? '6%' : '0%')};
`;

export const Logo = styled.img`
  display: block;
  width: var(--logo-width);
  height: auto;
  transform: translateY(var(--logo-offset));
`;

export const Name = styled.h3`
  display: flex;
  align-items: center;
  gap: ${spacing.s8};
  margin-top: ${spacing.s16};
  ${typography.heading1}

  ${tablet} {
    ${typography.heading2}
  }

  ${media.mobile} {
    margin-top: ${spacing.s8};
    ${typography.heading3}
  }
`;

export const Subtitle = styled.span`
  /* typography/lead2 토큰이 없어 기본 타이포그래피 토큰으로 조합합니다. */
  ${typography.body1}
  font-size: ${typography.size.t18};
  line-height: ${typography.lineHeight.t30};

  ${tablet} {
    ${typography.body1}
  }

  ${media.mobile} {
    ${typography.body3}
  }
`;

export const Description = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin: ${spacing.s16} 0 ${spacing.s24};
  color: ${colors.fg.neutral.default};
  ${typography.body1}

  ${tablet} {
    display: block;
    margin: ${spacing.s12} 0 ${spacing.s16};
    ${typography.body2}
  }

  ${media.mobile} {
    display: block;
    margin: ${spacing.s8} 0 ${spacing.s16};
    ${typography.body3}
  }
`;

export const Link = styled(MoreButton.Root.withComponent('a'))`
  align-self: flex-start;
  margin-top: auto;
`;

export const LinkLabel = styled(MoreButton.LabelBox)`
  ${media.mobile} {
    height: 34px;
  }
`;

export const LinkIcon = styled(MoreButton.IconBox)`
  ${media.mobile} {
    width: 34px;
    height: 34px;
  }
`;

export const Arrow = styled(MoreButton.Arrow)`
  ${Link}:hover &, ${Link}:focus-visible &, ${Link}:active & {
    transform: translate(2px, -2px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  ${media.mobile} {
    width: 11px;
    height: 11px;
  }
`;
