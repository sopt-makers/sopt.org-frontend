import styled from '@emotion/styled';
import { ReactNode } from 'react';

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return <H1>{children}</H1>;
};

const H1 = styled.h1`
  font-size: 45px;
  line-height: 60px;
  letter-spacing: -1%;
  font-weight: 700;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    font-size: 28px;
    line-height: 100%;
    text-align: center;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 18px;
    line-height: 150%;
    text-align: center;
  }
`;

export default SectionTitle;
