import styled from '@emotion/styled';

export const BlogPostList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 108px;

  margin-top: 30px;
  gap: 80px;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    margin-top: 24px;
    gap: 36px;
  }
`;

export const SpinnerWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;
