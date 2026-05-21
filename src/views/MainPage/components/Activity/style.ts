import styled from '@emotion/styled';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  gap: 24px;
  overflow: visible;

  ${media.desktop} {
    width: 100%;
    align-items: center;

    & > section {
      width: 100%;
      max-width: 944px;
    }
  }

  ${media.desktopLarge} {
    align-items: flex-start;

    & > section {
      max-width: 1200px;
    }
  }
`;
