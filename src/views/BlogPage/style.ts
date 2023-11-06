import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const SpinnerWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const EmptyBlogPostListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyBlogPostList = styled.section`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 700;
  line-height: 48px; /* 150% */
  letter-spacing: -0.64px;
  margin-top: 108px;
  margin-bottom: 24px;
  text-align: center;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.36px;
    margin-top: 90px;
    margin-bottom: 16px;
  }
`;

export const Total = styled.button`
  background-color: ${colors.gray10};

  height: 42px;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  color: ${colors.gray950};
  font-family: SUIT;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.32px;
  width: fit-content;
  margin-bottom: 108px;

  cursor: pointer;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    height: 36px;
    padding: 8px 14px;
    font-size: 14px;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.28px;
  }
`;
