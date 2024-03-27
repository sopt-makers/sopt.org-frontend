import styled from '@emotion/styled';

export const CoreValueList = styled.div`
  display: flex;
  justify-content: center;
  gap: min(30rem, calc(15rem + 0.78vw));

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30rem;
  }

  @media (max-width: 428px) {
    gap: 21.22rem;
  }
`;
