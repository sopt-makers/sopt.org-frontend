import styled from '@emotion/styled';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const CoreValueSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;

  margin-top: 83px;

  /* 태블릿 뷰 */
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    gap: 44px;
    margin-top: 72.19px;
  }

  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    gap: 27px;
    margin-top: 69.48px;
  }
`;
