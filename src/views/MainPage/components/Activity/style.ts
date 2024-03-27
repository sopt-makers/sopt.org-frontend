import styled from '@emotion/styled';

export const CardWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 28rem;

  @media (max-width: 1440rem) and (min-width: 768rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
