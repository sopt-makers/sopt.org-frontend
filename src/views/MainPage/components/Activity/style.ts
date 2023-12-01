import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Background = styled.section`
  background-color: ${colors.white};
`;

export const CardWapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 28px;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 376px) {
    grid-template-columns: repeat(2, 1fr);
  }
  /* 모바일 뷰 */
  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;
