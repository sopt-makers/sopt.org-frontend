import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.header<{ isTransparent: boolean }>`
  width: 100%;
  min-height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 0;

  ${({ isTransparent }) =>
    isTransparent &&
    css`
      background-color: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(30px);
      color: white;
    `}

  padding: 0 20px;

  /* 태블릿 + 데스크탑 뷰 */
  @media (max-width: 58.75rem) and (min-width: 48rem) {
    height: 48px;
    padding: 0;
  }

  /* 모바일 뷰 */
  @media (max-width: 47.9375rem) {
    height: 48px;
    min-height: 48px;
    padding: 0;

    justify-content: space-between;
  }
`;
