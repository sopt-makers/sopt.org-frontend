import styled from '@emotion/styled';
import Link from 'next/link';
import arrowRight from '@src/assets/icons/arrow-right-16x16.svg';

export const LinkWrapper = styled(Link)`
  width: 100%;
  background-color: #000000;
  border-radius: 10px;
  height: 280px;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    height: 180px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    height: 120px;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  letter-spacing: -1%;
  color: white;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    font-size: 18px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 12px;
  }
`;

export const Count = styled.div`
  position: relative;
  font-weight: 600;
  font-size: 45px;
  color: white;
  line-height: 60px;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    font-size: 28px;
    line-height: 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 18px;
    line-height: 18px;
  }

  &::after {
    position: absolute;
    content: '';
    mask-image: url(${arrowRight});
    mask-repeat: no-repeat;
    mask-size: cover;
    background-color: #787878;
    width: 32px;
    height: 40px;
    margin-top: 9px;

    /* 태블릿 뷰 */
    @media (max-width: 1199px) and (min-width: 766px) {
      width: 16px;
      height: 20px;
      margin-top: 9px;
    }
    /* 모바일 뷰 */
    @media (max-width: 765.9px) {
      width: 12px;
      height: 15px;
      margin-top: 1px;
    }
  }
`;
