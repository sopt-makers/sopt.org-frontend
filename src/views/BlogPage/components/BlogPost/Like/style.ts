import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;

  position: absolute;
  top: 10px;
  right: 10px;

  height: 28px;
  padding: 2px 8px;
  border-radius: 6px;
  background: ${colors.grayAlpha100};

  color: ${colors.gray100};
  font-size: 14px;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
  letter-spacing: -0.21px;

  transition: opacity 0.1s ease-out;

  z-index: 99;
  &:hover {
    opacity: 0.8;
  }

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    display: none;
  }
`;
