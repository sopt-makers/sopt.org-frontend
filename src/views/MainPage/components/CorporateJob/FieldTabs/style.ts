import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Ul = styled.ul`
  display: flex;
  gap: 12px;
  justify-content: center;
  /* 태블릿 뷰 + 모바일 뷰 */
  @media (max-width: 1199px) {
    justify-content: normal;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 8px;
  }
`;

const Li = styled.li<{ isactive: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 58px;
  border-radius: 10px;

  font-weight: 500;
  font-size: 18px;
  color: #cccccc;

  cursor: pointer;

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
  }
  ${({ isactive }) =>
    isactive &&
    css`
      color: white;
      background: rgba(255, 255, 255, 0.1);
    `};

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    padding: 12px 16px;

    width: 72px;
    height: 38px;

    font-size: 14px;
  }
`;

export const St = { Ul, Li };
