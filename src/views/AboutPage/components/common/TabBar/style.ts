import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const TabBar = styled.ul`
  width: 100%;
  height: 68px;

  display: flex;
  justify-content: center;

  font-size: 28px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    height: 38px;
    font-size: 18px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    min-height: 36px;
    font-size: 12px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);

    flex-wrap: wrap;
    & > li {
      min-width: 72px;
      max-width: 72px;
    }
  }
`;

export const Tab = styled.li<{ selected: boolean }>`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  ${({ selected }) =>
    selected &&
    css`
      font-weight: 700;
      color: #ffffff;
      border-bottom: 3px solid #ffffff;
      /* 모바일 뷰 */
      @media (max-width: 765.9px) {
        font-weight: 500;
        border-bottom: none;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
      }
    `};
`;
