import styled from '@emotion/styled';
import { media } from '@src/lib/styles/breakpoints';

export const CardListContainer = styled.div`
  display: flex;
  max-width: 944px;
  gap: 32px;
  align-items: flex-start;
  justify-content: center;

  ${media.desktopLarge} {
    max-width: 1200px;
  }

  ${media.tablet} {
    gap: 16px;
  }

  ${media.mobile} {
    width: 100%;
    flex-direction: column;
    gap: 16px;
  }
`;
