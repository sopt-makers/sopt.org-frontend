import styled from '@emotion/styled';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const CurriculumSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin-top: 275px;

  /* 태블릿 뷰 */
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    gap: 19px;
    margin-top: 190px;
  }

  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    gap: 13.44px;
    margin-top: 120px;
  }
`;
