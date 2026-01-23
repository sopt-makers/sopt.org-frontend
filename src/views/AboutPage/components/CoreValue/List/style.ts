import styled from '@emotion/styled';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const CoreValueList = styled.div`
  display: flex;
  justify-content: center;
  gap: min(30px, calc(15px + 0.78vw));

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    gap: 21.22px;
  }
`;
