import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { css } from '@emotion/react';

export const TabBar = styled.ul`
  display: flex;
  justify-content: center;
  gap: min(26px, 1.35vw);
  width: 100%;

  /* 태블릿 뷰 */
  @media (max-width: 48rem) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, 1fr);
    gap: 13px 19.3px;
  }

  /* 모바일 뷰 */
  @media (max-width: 26.75rem) {
    gap: 13px 13.46px;
  }
`;

export const Tab = styled.li<{ selected: boolean }>`
  max-width: 178px;
  width: calc(80px + 5vw);
  padding: 20px 16px;
  border-radius: 10px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-family: SUIT;
  font-size: 20rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #222220;
      color: ${colors.white};
      font-weight: 700;
    `};

  /* 태블릿 뷰 */
  @media (max-width: 48rem) {
    width: 130.254px;
    padding: 14.635px 11.708px;
    border-radius: 7.318px;
    font-size: 14.635rem;
    letter-spacing: -0.293px;
  }

  /* 모바일 뷰 */
  @media (max-width: 26.75rem) {
    width: 92.127px;
    padding: 10.351px 8.281px;
    border-radius: 5.176px;
    font-size: 10.351rem;
    letter-spacing: -0.207px;
  }
`;
