import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { breakpoints, media } from '@src/lib/styles/breakpoints';

export const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  padding: 64px 120px;
  background: ${colors.gray900};

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
  color: ${colors.gray300};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
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
    color: ${colors.gray100};
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.02em;
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
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
    }
  }
`;

export const Title = styled.p`
  color: ${colors.gray300};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
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
