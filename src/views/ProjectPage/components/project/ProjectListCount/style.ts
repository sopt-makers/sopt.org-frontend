import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Count = styled.div`
  color: ${colors.gray100};

  /* Body/1_Medium_18 */
  font-family: SUIT;
  font-size: 18rem;
  font-style: normal;
  font-weight: 500;
  line-height: 165%; /* 29.7rem */
  letter-spacing: -0.27rem;

  @media (max-width: 1279rem) and (min-width: 900rem) {
    & > span {
      display: none;
    }
  }

  /* 모바일 뷰 */
  @media (max-width: 899rem) {
    /* Body/3_Medium_14 */
    font-family: SUIT;
    font-size: 14rem;
    font-style: normal;
    font-weight: 500;
    line-height: 165%; /* 23.1rem */
    letter-spacing: -0.21rem;
  }
`;
