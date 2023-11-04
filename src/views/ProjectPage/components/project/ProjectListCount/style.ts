import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Count = styled.div`
  color: ${colors.gray100};

  /* Body/1_Medium_18 */
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 165%; /* 29.7px */
  letter-spacing: -0.27px;

  @media (max-width: 1279px) and (min-width: 900px) {
    & > span {
      display: none;
    }
  }

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    /* Body/3_Medium_14 */
    font-family: SUIT;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 165%; /* 23.1px */
    letter-spacing: -0.21px;
  }
`;
