import styled from '@emotion/styled';
import { colors, typography } from '@sopt-mds/design-tokens';
import { breakpoints, media } from '@src/lib/styles/breakpoints';

export const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  padding: 64px 120px;
  background: ${colors.bg.layer.default};

  @media (min-width: ${breakpoints.desktop}px) {
    padding-bottom: 46px;
  }

  ${media.mobile} {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  gap: 80px;

  ${media.mobile} {
    flex-wrap: wrap;
    gap: 32px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
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
    gap: 8px;

    &:last-child {
      flex-basis: 100%;
      gap: 12px;
    }

    &:not(:last-child) > p {
      margin-bottom: 4px;
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
  gap: 16px;

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
