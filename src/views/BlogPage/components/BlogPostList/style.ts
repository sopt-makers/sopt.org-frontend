import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const BlogPostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 108px;
`;
export const BlogPostList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  max-width: 900px;
  width: 100%;

  margin-top: 30px;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 24px;
    gap: 36px;
  }
`;
