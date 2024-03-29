import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 996px) and (min-width: 766px) {
    gap: 24px;
  }

  @media (max-width: 766px) and (min-width: 428px) {
    gap: 20px;
  }

  @media (max-width: 520px) {
    flex-direction: column;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    flex-direction: column;
    gap: 16px;
  }
`;
