import styled from '@emotion/styled';
import Link from 'next/link';
import { css } from '@emotion/react';

const wrapperStyle = css`
  width: 380px;
  height: 280px;
  background-color: #181818;
  border-radius: 10px;

  @media (max-width: 996px) and (min-width: 766px) {
    width: 285px;
    height: 210px;
  }

  /* 태블릿 뷰 */
  @media (max-width: 766px) and (min-width: 428px) {
    width: 204px;
    height: 150px;
  }
  /* 모바일 뷰 */
  @media (max-width: 428px) {
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

  @media (max-width: 996px) and (min-width: 766px) {
    font-size: 16px;
  }

  /* 태블릿 뷰 */
  @media (max-width: 766px) and (min-width: 428px) {
    font-size: 10px;
  }
  /* 모바일 뷰 */
  @media (max-width: 428px) {
    font-size: 10px;
  }
`;

export const Count = styled.div`
  position: relative;
  font-weight: 600;
  font-size: 45px;
  color: white;
  line-height: 60px;

  @media (max-width: 996px) and (min-width: 766px) {
    font-size: 38px;
    line-height: 48px;
  }
  /* 태블릿 뷰 */
  @media (max-width: 766px) and (min-width: 428px) {
    font-size: 24px;
    line-height: 32px;
  }
  /* 모바일 뷰 */
  @media (max-width: 428px) {
    font-size: 14px;
    line-height: 32px;
  }
`;
