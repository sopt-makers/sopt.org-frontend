import styled from '@emotion/styled';
import { colorFg, typography } from '@sopt-mds/design-tokens';
import { media } from '@src/lib/styles/breakpoints';

export const Root = styled.section`
  display: flex;
  justify-content: center;
  padding: 160px 120px;

  ${media.tablet} {
    padding: 120px 40px;
  }

  ${media.mobile} {
    padding: 80px 20px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;
  max-width: 1200px;

  ${media.mobile} {
    gap: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
  width: 100%;

  ${media.mobile} {
    gap: 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const Title = styled.h2`
  ${typography.heading1}
  color: ${colorFg.neutral.bold};

  ${media.mobile} {
    ${typography.title3}
  }
`;
