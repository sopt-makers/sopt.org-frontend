import styled from '@emotion/styled';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px 28px;
  width: 1112px;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    grid-template-columns: 1fr 1fr;
    width: 732px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    grid-template-columns: 1fr;
    gap: 16px;
    width: 100%;
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
