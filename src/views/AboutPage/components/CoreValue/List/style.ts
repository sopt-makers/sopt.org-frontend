import styled from '@emotion/styled';

export const CoreValueList = styled.div`
  display: flex;
  justify-content: center;
  gap: min(30px, calc(15px + 0.78vw));

  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  @media (max-width: 26.75rem) {
    gap: 21.22px;
  }
`;
