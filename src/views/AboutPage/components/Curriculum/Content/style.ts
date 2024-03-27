import styled from '@emotion/styled';

export const CurriculumContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: min(33rem, 1.71875vw);

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    gap: 19rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    gap: 13.44rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  max-width: 1200rem;
  height: calc(300rem + 25.72vw);
  border-radius: 10rem;

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    max-width: 662.42rem;
    width: 86vw;
    min-width: 429.34rem;
    height: calc(238rem + 7.68vw);
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    max-width: 361.06rem;
    width: 84vw;
    min-width: 312.48rem;
    height: 238.901rem;
  }
`;
