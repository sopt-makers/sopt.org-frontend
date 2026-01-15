import styled from '@emotion/styled';

export const Wrapper = styled.section`
  gap: 48px;
  display: flex;
  flex-direction: column;

  @media (max-width: 47.875rem) and (min-width: 26.75rem) {
    margin-top: 190px;
    margin-bottom: 218px;
    gap: 28px;
  }

  /* 모바일 뷰 */
  @media (max-width: 26.75rem) {
    margin-top: 120px;
    margin-bottom: 136px;
    gap: 26px;
  }
`;
