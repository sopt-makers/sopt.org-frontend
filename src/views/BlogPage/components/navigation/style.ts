import styled from '@emotion/styled';
import { colors } from '@src/lib/styles/colors';

export const Wrapper = styled.section`
  width: 100%;
  margin-top: 188px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 태블릿 뷰 */
  @media (max-width: 939px) and (min-width: 768px) {
    margin-top: 188px;
  }
  /* 모바일 뷰 */
  @media (max-width: 767px) {
    margin-top: 76px;
  }
`;

export const Container = styled.main`
  width: 900px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  /* 태블릿 뷰 */
  @media (max-width: 939px) and (min-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
  }
  /* 모바일 뷰 */
  @media (max-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
  }
`;

export const TabContainer = styled.section`
  display: flex;
  align-items: center;
`;

interface MenuTitleProps {
  isSelected: boolean;
}

export const TabTitle = styled.article<MenuTitleProps>`
  font-size: 24px;
  height: 100%;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: -0.48px;

  color: ${({ isSelected }) => (isSelected ? `${colors.gray10}` : `${colors.gray300}`)};

  cursor: pointer;
  position: relative;
  border-bottom: ${({ isSelected }) => isSelected && `2px solid ${colors.gray40}`};

  padding-bottom: 16px;
  margin-right: 20px;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    margin-right: 12px;
  }
`;

export const TabDescription = styled.h1`
  margin-top: 24px;
  margin-bottom: 48px;

  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.4px;
  color: ${colors.gray50};
  width: 100%;

  /* 모바일 뷰 */
  @media (max-width: 767px) {
    margin-top: 14px;
    margin-bottom: 16px;
    display: flex;

    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 12px;
    background: ${colors.gray800};

    font-size: 14px;
    font-weight: 500;
    line-height: 23.1px;
    letter-spacing: -0.21px;
    color: ${colors.gray10};
  }
`;
