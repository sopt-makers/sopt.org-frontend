import styled from '@emotion/styled';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 288px;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    height: 200px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    height: 200px;
  }
`;
