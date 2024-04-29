import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Root = styled.button`
  display: flex;
  align-items: center;

  padding: 12px 28px;
  border-radius: 99px;
  background: ${colors.gray10};

  color: ${colors.gray950};
  font-size: 22rem;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -0.48px;
  cursor: pointer;

  @media (max-width: 26.75rem) {
    padding: 8px 22px;
    font-size: 18rem;
  }
`;
