import styled from '@emotion/styled';

export const CoreValueSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;

  margin-top: 83px;

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    gap: 44px;
    margin-top: 72.19px;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    gap: 27px;
    margin-top: 69.48px;
  }
`;
