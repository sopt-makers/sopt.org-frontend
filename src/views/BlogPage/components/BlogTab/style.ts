import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Wrapper = styled.section`
  width: 100%;
  margin-top: 188px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 태블릿 뷰 */
  @media (max-width: 58.6875rem) and (min-width: 48rem) {
    margin-top: 188px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    margin-top: 76px;
  }
`;

export const Container = styled.div`
  width: 900px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 48px;

  /* 태블릿, 모바일 뷰 */
  @media (max-width: 58.6875rem) {
    padding: 0 20px;
    width: 100%;
  }
`;

export const TabContainer = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const TabTitle = styled.article<{ isSelected: boolean }>`
  display: flex;
  font-size: 24rem;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: -0.48px;

  color: ${({ isSelected }) => (isSelected ? `${colors.gray30}` : `${colors.gray600}`)};

  cursor: pointer;
  position: relative;
  border-bottom: ${({ isSelected }) => isSelected && `2px solid ${colors.gray30}`};

  padding-bottom: 16px;
  margin-right: 20px;

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    border-bottom: ${({ isSelected }) => isSelected && `1px solid ${colors.gray30}`};
    margin-right: 12px;
    font-size: 18rem;
    padding-bottom: 6px;
  }

  &:hover {
    color: ${colors.gray100};
  }
`;

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  width: 100%;

  overflow-x: auto;
`;

export const TagContainer = styled.section`
  display: flex;
  gap: 12px;
`;

export const Tag = styled.button<{ isSelected: boolean }>`
  display: flex;
  padding: 9px 20px;
  justify-content: center;
  align-items: center;
  border: ${({ isSelected }) =>
    isSelected ? `1px solid ${colors.gray100}` : `1px solid ${colors.gray700}`};
  border-radius: 9999px;

  background: ${({ isSelected }) => (isSelected ? `${colors.gray700}` : `${colors.gray800}`)};
  color: ${({ isSelected }) => (isSelected ? `${colors.white}` : `${colors.gray300}`)};
  font-family: SUIT;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.32px;
  white-space: nowrap;

  cursor: pointer;
`;

export const SelectContainer = styled.section`
  display: flex;
  gap: 6px;
`;
