import styled from '@emotion/styled';

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px 28px;
  width: 1112px;

  @media (max-width: 79.9375rem) and (min-width: 56.25rem) {
    grid-template-columns: 1fr 1fr;
    width: 732px;
  }

  @media (max-width: 56.1875rem) {
    grid-template-columns: 1fr;
    gap: 16px;
    width: 100%;
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
