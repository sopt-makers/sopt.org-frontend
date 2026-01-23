import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 1023px) {
    gap: 16px;
  }

  @media (max-width: 767px) {
    gap: 14px;
    flex-direction: column;
    flex-shrink: 0;
  }
`;
