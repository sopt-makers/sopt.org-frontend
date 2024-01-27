import styled from '@emotion/styled';
import Link from 'next/link';
import { css } from '@emotion/react';

const wrapperStyle = css`
  width: 380px;
  height: 280px;
  background-color: #141518;
  border-radius: 10px;

  /* 태블릿 뷰 */
  @media (max-width: 1440px) and (min-width: 766px) {
    width: 204px;
    height: 150px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
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
  font-size: 20px;
  letter-spacing: -1%;
  color: white;

  /* 태블릿 뷰 */
  @media (max-width: 1440px) and (min-width: 766px) {
    font-size: 10px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 10px;
  }
`;

export const Count = styled.div`
  position: relative;
  font-weight: 600;
  font-size: 45px;
  color: white;
  line-height: 60px;
  /* 태블릿 뷰 */
  @media (max-width: 1440px) and (min-width: 766px) {
    font-size: 24px;
    line-height: 32px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 14px;
    line-height: 32px;
  }
`;
