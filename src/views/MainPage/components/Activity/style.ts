import styled from '@emotion/styled';

export const CardWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 28px;

  @media (max-width: 1440px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
