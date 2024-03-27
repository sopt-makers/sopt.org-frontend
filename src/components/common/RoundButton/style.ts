import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Root = styled.button`
  display: flex;
  align-items: center;

  padding: 12rem 28rem;
  border-radius: 99rem;
  background: ${colors.gray10};

  color: ${colors.gray950};
  font-size: 22rem;
  font-weight: 600;
  line-height: 150%; /* 36rem */
  letter-spacing: -0.48rem;
  cursor: pointer;

  @media (max-width: 428rem) {
    padding: 8rem 22rem;
    font-size: 18rem;
  }
`;
