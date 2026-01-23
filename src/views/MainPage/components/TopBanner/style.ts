import styled from '@emotion/styled';
import Link from 'next/link';
import { css } from '@emotion/react';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const Container = styled(Link)<{ isKeyColor: boolean }>`
  display: flex;
  justify-content: center;
  position: fixed;

  padding: 13px 20px;
  margin-top: 80px;
  width: 100%;
  z-index: 95;

  ${({ isKeyColor }) =>
    isKeyColor
      ? css`
          background-color: #5ba3ff;
          color: #0f1012;
          & h1,
          p {
            color: #0f1012;
          }
          & path,
          circle {
            stroke: #0f1012;
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
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    margin-top: 48px;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    margin-top: 48px;
    padding: 8px 20px;
  }
`;
export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 18px;

  max-width: 1200px;
  width: 100%;

  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    flex-direction: column;
    justify-content: start;
    align-items: baseline;
    gap: 1px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  line-height: 130%;
  font-size: 16rem;

  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    font-size: 12rem;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;

  flex-grow: 1;

  text-align: center;
  font-size: 16rem;
  font-weight: 500;

  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    justify-content: space-between;
    width: 100%;
  }

  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    font-size: 11rem;
  }
`;
export const Timer = styled.div`
  display: flex;
  align-items: center;

  /* 아이콘 위치 이동 방지*/
  gap: 10px;
  justify-content: flex-start;

  /* 태블릿 뷰 */
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    & > svg {
      width: 24px;
      height: 24px;
    }
  }

  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    gap: 4px;
  }
`;

export const View = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
`;
