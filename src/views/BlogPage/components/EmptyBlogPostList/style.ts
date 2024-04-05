import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const EmptyBlogPostListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyBlogPostList = styled.section`
  color: ${colors.white};
  font-size: 32rem;
  font-weight: 700;
  line-height: 48rem; /* 150% */
  letter-spacing: -0.64rem;
  margin-top: 108rem;
  margin-bottom: 24rem;
  text-align: center;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    font-size: 18rem;
    line-height: 28rem; /* 155.556% */
    letter-spacing: -0.36rem;
    margin-top: 90rem;
    margin-bottom: 16rem;
  }
`;

export const Total = styled.button`
  background-color: ${colors.gray10};

  height: 42rem;
  padding: 0rem 24rem;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  border-radius: 8rem;
  color: ${colors.gray950};
  font-family: SUIT;
  font-size: 16rem;
  font-weight: 600;
  line-height: 22rem; /* 137.5% */
  letter-spacing: -0.32rem;
  width: fit-content;
  margin-bottom: 108rem;

  cursor: pointer;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    height: 36rem;
    padding: 8rem 14rem;
    font-size: 14rem;
    line-height: 18rem; /* 128.571% */
    letter-spacing: -0.28rem;
  }
`;
