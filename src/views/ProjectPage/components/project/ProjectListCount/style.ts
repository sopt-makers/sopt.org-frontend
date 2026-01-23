import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const Count = styled.div`
  color: ${colors.gray100};

  /* Body/1_Medium_18 */
  font-family: SUIT;
  font-size: 18rem;
  font-style: normal;
  font-weight: 500;
  line-height: 165%; /* 29.7px */
  letter-spacing: -0.27px;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    & > span {  
      display: none;
    }
  }

  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    /* Body/3_Medium_14 */
    font-family: SUIT;
    font-size: 14rem;
    font-style: normal;
    font-weight: 500;
    line-height: 165%; /* 23.1px */
    letter-spacing: -0.21px;
  }

  & > * {
    font-size: 100%;
  }
`;
