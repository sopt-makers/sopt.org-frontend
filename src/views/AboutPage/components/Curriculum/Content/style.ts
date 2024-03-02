import styled from '@emotion/styled';

export const CurriculumContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: min(33px, 1.71875vw);

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    gap: 19px;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    gap: 13.44px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  height: calc(300px + 25.72vw);
  border-radius: 10px;

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    max-width: 662.42px;
    width: 86vw;
    min-width: 429.34px;
    height: calc(238px + 7.68vw);
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    max-width: 361.06px;
    width: 84vw;
    min-width: 312.48px;
    height: 238.901px;
  }
`;
