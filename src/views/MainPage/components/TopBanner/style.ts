import styled from '@emotion/styled';
import Link from 'next/link';
import { css } from '@emotion/react';

export const Container = styled(Link)<{ isYellow: boolean }>`
  display: flex;
  justify-content: center;
  position: fixed;

  padding: 13rem 20rem;
  margin-top: 80rem;
  width: 100%;
  z-index: 95;

  ${({ isYellow }) =>
    isYellow
      ? css`
          background-color: #bdec00;
          color: #101111;
          & h1,
          p {
            color: #101111;
          }
          & path,
          circle {
            stroke: #101111;
          }
        `
      : css`
          background-color: #222220;
          color: #fff;
        `};

  /* 색 변환 부드럽게 */
  transition: background-color 0.5s, color 0.5s;
  & h1 {
    transition: color 0.5s;
  }
  & path,
  circle {
    transition: stroke 0.5s;
  }

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 429px) {
    margin-top: 48rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 428px) {
    margin-top: 48rem;
    padding: 8rem 20rem;
  }
`;
export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 18rem;

  max-width: 1200rem;
  width: 100%;

  /* 모바일 뷰 */
  @media (max-width: 570px) {
    flex-direction: column;
    justify-content: start;
    align-items: baseline;
    gap: 1rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  line-height: 130%;

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    font-size: 12rem;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;

  flex-grow: 1;

  text-align: center;
  font-weight: 500;

  /* 모바일 뷰 */
  @media (max-width: 570px) {
    justify-content: space-between;
    width: 100%;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    font-size: 11rem;
  }
`;
export const Timer = styled.div`
  display: flex;
  align-items: center;

  /* 아이콘 위치 이동 방지*/
  gap: 10rem;
  justify-content: flex-start;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 429px) {
    & > svg {
      width: 24rem;
      height: 24rem;
    }
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    gap: 4rem;
  }
`;

export const View = styled.p`
  display: flex;
  align-items: center;
  gap: 10rem;
`;
