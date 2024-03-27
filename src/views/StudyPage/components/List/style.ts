import styled from '@emotion/styled';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1194rem;
  row-gap: 45rem;
  column-gap: 60rem;

  /* 태블릿 뷰 */
  @media (max-width: 1199rem) and (min-width: 766rem) {
    grid-template-columns: 1fr 1fr;
    row-gap: 30rem;
    column-gap: 70rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    grid-template-columns: 1fr;
    column-gap: 30rem;
  }
`;
