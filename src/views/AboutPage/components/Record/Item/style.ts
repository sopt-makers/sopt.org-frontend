import styled from '@emotion/styled';
import Link from 'next/link';
import { css } from '@emotion/react';

const wrapperStyle = css`
  width: 380rem;
  height: 280rem;
  background-color: #181818;
  border-radius: 10rem;

  @media (max-width: 996px) and (min-width: 766px) {
    width: 285rem;
    height: 210rem;
  }

  /* 태블릿 뷰 */
  @media (max-width: 766px) and (min-width: 428px) {
    width: 204rem;
    height: 150rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 428px) {
    width: 204rem;
    height: 150rem;
  }
`;

export const LinkWrapper = styled(Link)`
  ${wrapperStyle}
`;

export const BlockWrapper = styled.div`
  ${wrapperStyle}
`;

export const Title = styled.div`
  font-size: 20rem;
  letter-spacing: -1%;
  color: white;

  @media (max-width: 996px) and (min-width: 766px) {
    font-size: 16rem;
  }

  /* 태블릿 뷰 */
  @media (max-width: 766px) and (min-width: 428px) {
    font-size: 10rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 428px) {
    font-size: 10rem;
  }
`;

export const Count = styled.div`
  position: relative;
  font-weight: 600;
  font-size: 45rem;
  color: white;
  line-height: 60rem;

  @media (max-width: 996px) and (min-width: 766px) {
    font-size: 38rem;
    line-height: 48rem;
  }
  /* 태블릿 뷰 */
  @media (max-width: 766px) and (min-width: 428px) {
    font-size: 24rem;
    line-height: 32rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 428px) {
    font-size: 14rem;
    line-height: 32rem;
  }
`;
