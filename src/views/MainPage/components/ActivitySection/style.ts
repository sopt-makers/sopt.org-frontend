import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;

  padding-top: 68px;

  @media (max-width: 768px) {
    padding-top: 65px;
  }

  @media (max-width: 428px) {
    padding-top: 37.36px;
  }
`;
