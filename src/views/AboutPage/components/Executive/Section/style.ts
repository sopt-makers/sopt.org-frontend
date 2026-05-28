import styled from '@emotion/styled';
import { media } from '@src/lib/styles/breakpoints';

export const CardContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 34px;
  max-width: 1200px;

  ${media.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    width: 100%;
  }

  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    width: 100%;
  }
`;

export const OvalSpinnerWrapper = styled.div`
  width: 100%;
  height: 100vh;

  padding-top: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
