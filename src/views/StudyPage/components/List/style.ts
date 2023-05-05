import styled from '@emotion/styled';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1194px;
  row-gap: 45px;
  column-gap: 60px;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
    column-gap: 70px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    grid-template-columns: 1fr;
    column-gap: 30px;
  }
`;
