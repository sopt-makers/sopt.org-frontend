import styled from '@emotion/styled';

export const CoreValueSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48rem;

  margin-top: 83rem;

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    gap: 44rem;
    margin-top: 72.19rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    gap: 27rem;
    margin-top: 69.48rem;
  }
`;
