import styled from '@emotion/styled';

export const CurriculumSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48rem;
  margin-top: 275rem;

  /* 태블릿 뷰 */
  @media (max-width: 768rem) {
    gap: 19rem;
    margin-top: 190rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 428rem) {
    gap: 13.44rem;
    margin-top: 120rem;
  }
`;
