import styled from '@emotion/styled';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const Banner = styled.div`
  width: 100vw;
  max-height: 630px;
  height: calc(376px + 13vw);
  position: relative;
  overflow: hidden;

  /* 태블릿 뷰 */
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    max-height: 376px;
    height: calc(150px + 29vw);
  }

  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    height: 230px;
  }
`;
