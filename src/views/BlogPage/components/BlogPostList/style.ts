import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.main`
  width: 900px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 48px;

  /* 태블릿, 모바일 뷰 */
  @media (max-width: 58.6875rem) {
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
  }
`;

export const Layout = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

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
  @media (max-width: 47.9375rem) {
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

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.56px;
  color: ${colors.white};
`;
