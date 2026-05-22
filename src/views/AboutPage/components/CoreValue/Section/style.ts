import styled from '@emotion/styled';

export const CoreValueSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;

  /* 태블릿 뷰 */
  @media (max-width: 48rem) {
    gap: 44px;
  }

  /* 모바일 뷰 */
  @media (max-width: 26.75rem) {
    gap: 27px;
  }
`;
