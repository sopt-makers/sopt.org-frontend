import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 62.25rem) and (min-width: 47.875rem) {
    gap: 24px;
  }

  @media (max-width: 47.875rem) and (min-width: 26.75rem) {
    gap: 20px;
  }

  @media (max-width: 32.5rem) {
    flex-direction: column;
  }

  /* 모바일 뷰 */
  @media (max-width: 26.75rem) {
    flex-direction: column;
    gap: 16px;
  }

  & * {
    font-size: 100%;
  }
`;
