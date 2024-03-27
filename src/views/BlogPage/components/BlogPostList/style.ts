import styled from '@emotion/styled';

export const BlogPostList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-left: 20rem;
  padding-right: 20rem;
  margin-bottom: 108rem;

  margin-top: 30rem;
  gap: 80rem;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    margin-top: 24rem;
    gap: 36rem;
  }
`;

export const SpinnerWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50rem 0;
`;
