import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

interface StyleProps {
  isReverse?: boolean;
}

export const Root = styled.button<StyleProps>`
  display: flex;
  align-items: center;

  height: 50px;
  padding: 10px 30px;
  border-radius: 99px;
  background: ${colors.gray10};

  color: ${colors.gray950};
  font-size: 24px;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -0.48px;
  cursor: pointer;
`;
