import styled from '@emotion/styled';
import { colors, spacing, typography } from '@sopt-mds/design-tokens';
import Link from 'next/link';
import { css } from '@emotion/react';
import { breakpoints, media } from '@src/lib/styles/breakpoints';

export const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${spacing.s32};
  padding: ${spacing.s64} ${spacing.s120};
  background: ${colors.bg.layer.default};

  @media (min-width: ${breakpoints.desktop}px) {
    padding-bottom: 46px;
  }

  ${media.mobile} {
    flex-direction: column;
    padding: ${spacing.s40} ${spacing.s20};
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.s16};
  flex-shrink: 0;
`;

export const Logo = styled.img`
  ${media.mobile} {
    width: 58px;
    height: 20px;
  }
`;

export const Copyright = styled.p`
  color: ${colors.fg.neutral.subtle};
  ${typography.body3}
`;

export const Columns = styled.div`
  display: flex;
  gap: ${spacing.s80};

  ${media.mobile} {
    flex-wrap: wrap;
    gap: ${spacing.s32};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing.s12};
  white-space: nowrap;

  ${media.mobile} {
    gap: ${spacing.s8};
  }
`;

export const Title = styled.p`
  color: ${colors.fg.neutral.subtle};
  ${typography.body3}

  ${media.mobile} {
    margin-bottom: ${spacing.s4};
  }
`;

export const ChannelColumn = styled(Column)`
  ${media.mobile} {
    flex-basis: 100%;
    gap: ${spacing.s12};
  }
`;

export const ChannelTitle = styled(Title)`
  ${media.mobile} {
    margin-bottom: 0;
  }
`;

const linkStyle = css`
  color: ${colors.fg.neutral.default};
  ${typography.body2}

  ${media.mobile} {
    ${typography.body3}
  }
`;

export const InternalLink = styled(Link)`
  ${linkStyle}
`;

export const ExternalLink = styled.a`
  ${linkStyle}
`;

export const Button = styled.button`
  ${linkStyle}
  cursor: pointer;
`;

export const Channels = styled.div`
  display: flex;
  gap: ${spacing.s16};
`;

export const ChannelLink = styled.a`
  display: block;
`;

export const ChannelIcon = styled.img`
  display: block;

  ${media.mobile} {
    width: 20px;
    height: 20px;
  }
`;
