import styled from '@emotion/styled';
import { colors, spacing, typography } from '@sopt-mds/design-tokens';
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

  a,
  button {
    color: ${colors.fg.neutral.default};
    ${typography.body2}
  }

  button {
    cursor: pointer;
  }

  ${media.mobile} {
    gap: ${spacing.s8};

    &:last-child {
      flex-basis: 100%;
      gap: ${spacing.s12};
    }

    &:not(:last-child) > p {
      margin-bottom: ${spacing.s4};
    }

    a,
    button {
      ${typography.body3}
    }
  }
`;

export const Title = styled.p`
  color: ${colors.fg.neutral.subtle};
  ${typography.body3}
`;

export const Channels = styled.div`
  display: flex;
  gap: ${spacing.s16};

  a,
  img {
    display: block;
  }

  ${media.mobile} {
    img {
      width: 20px;
      height: 20px;
    }
  }
`;
