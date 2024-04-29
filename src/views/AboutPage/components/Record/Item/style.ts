import styled from '@emotion/styled';
import Link from 'next/link';
import { css } from '@emotion/react';

const wrapperStyle = css`
  width: 380px;
  height: 280px;
  background-color: #181818;
  border-radius: 10px;

  @media (max-width: 62.25rem) and (min-width: 47.875rem) {
    width: 285px;
    height: 210px;
  }

  /* 태블릿 뷰 */
  @media (max-width: 47.875rem) and (min-width: 26.75rem) {
    width: 204px;
    height: 150px;
  }
  /* 모바일 뷰 */
  @media (max-width: 26.75rem) {
    width: 204px;
    height: 150px;
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

  @media (max-width: 62.25rem) and (min-width: 47.875rem) {
    font-size: 16rem;
  }

  /* 태블릿 뷰 */
  @media (max-width: 47.875rem) and (min-width: 26.75rem) {
    font-size: 10rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 26.75rem) {
    font-size: 10rem;
  }
`;

export const Count = styled.div`
  position: relative;
  font-weight: 600;
  font-size: 45rem;
  color: white;
  line-height: 60px;

  @media (max-width: 62.25rem) and (min-width: 47.875rem) {
    font-size: 38rem;
    line-height: 48px;
  }
  /* 태블릿 뷰 */
  @media (max-width: 47.875rem) and (min-width: 26.75rem) {
    font-size: 24rem;
    line-height: 32px;
  }
  /* 모바일 뷰 */
  @media (max-width: 26.75rem) {
    font-size: 14rem;
    line-height: 32px;
  }
`;
