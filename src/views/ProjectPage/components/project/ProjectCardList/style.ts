import styled from '@emotion/styled';

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50rem 28rem;
  width: 1112rem;

  @media (max-width: 1279px) and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    width: 732rem;
  }

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
    gap: 16rem;
    width: 100%;
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
