import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { css } from '@emotion/react';

export const TabBar = styled.ul`
  display: flex;
  justify-content: center;
  gap: min(26rem, 1.35vw);
  width: 100%;

  /* 태블릿 뷰 */
  @media (max-width: 768rem) {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, 1fr);
    gap: 13rem 19.3rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 428rem) {
    gap: 13rem 13.46rem;
  }
`;

export const Tab = styled.li<{ selected: boolean }>`
  max-width: 178rem;
  width: calc(80rem + 5vw);
  padding: 20rem 16rem;
  border-radius: 10rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-family: SUIT;
  font-size: 20rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 20rem */
  letter-spacing: -0.4rem;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #222220;
      color: ${colors.white};
      font-weight: 700;
    `};

  /* 태블릿 뷰 */
  @media (max-width: 768rem) {
    width: 130.254rem;
    padding: 14.635rem 11.708rem;
    border-radius: 7.318rem;
    font-size: 14.635rem;
    letter-spacing: -0.293rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 428rem) {
    width: 92.127rem;
    padding: 10.351rem 8.281rem;
    border-radius: 5.176rem;
    font-size: 10.351rem;
    letter-spacing: -0.207rem;
  }
`;
