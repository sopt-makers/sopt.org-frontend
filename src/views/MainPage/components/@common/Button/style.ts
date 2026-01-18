import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Button = styled.button`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 16px 26px;
  border-radius: 12px;
  border: 1px solid ${colors.white};
  gap: 4px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  color: ${colors.white};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.white};
    color: ${colors.black};
  }

  /* 태블릿 뷰 */
  @media (max-width: 74.9375rem){
    padding: 12px 20px;
    font-size: 16px;
    line-height: 24px;
  }

  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    padding: 9px 14px;
    font-size: 14px;
    line-height: 18px;
  }
`;
