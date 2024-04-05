import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42rem;

  padding-top: 68rem;

  @media (max-width: 768px) {
    padding-top: 65rem;
  }

  @media (max-width: 428px) {
    padding-top: 37.36rem;
  }
`;
