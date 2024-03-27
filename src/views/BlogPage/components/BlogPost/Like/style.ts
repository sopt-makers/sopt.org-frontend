import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  position: absolute;
  top: 10rem;
  right: 10rem;

  height: 28rem;
  padding: 2rem 8rem;
  border-radius: 6rem;
  background: ${colors.grayAlpha100};

  color: ${colors.gray100};
  font-size: 14rem;
  font-weight: 400;
  line-height: 160%; /* 22.4rem */
  letter-spacing: -0.21rem;

  transition: opacity 0.1s ease-out;

  z-index: 99;
  &:hover {
    opacity: 0.8;
  }

  /* 모바일 뷰 */
  @media (max-width: 767rem) {
    display: none;
  }
`;
