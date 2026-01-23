import styled from '@emotion/styled';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;

  padding-top: 68px;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    padding-top: 65px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    padding-top: 37.36px;
  }
`;
