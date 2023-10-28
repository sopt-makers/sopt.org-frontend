import styled from '@emotion/styled';

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px 28px;
  width: 1112px;

  @media (max-width: 1279px) and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    width: 732px;
  }

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
    gap: 16px;
    width: 100%;
  }
`;
