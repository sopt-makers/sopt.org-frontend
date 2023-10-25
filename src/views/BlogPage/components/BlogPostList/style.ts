import styled from '@emotion/styled';

export const BlogPostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  width: 100%;
  max-width: 900px;
  min-width: 335px;
  margin-top: 2px;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    gap: 36px;
  }
`;
