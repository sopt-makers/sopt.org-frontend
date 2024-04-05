import styled from '@emotion/styled';
import { ReactNode } from 'react';

const SectionDescription = ({ children }: { children: ReactNode }) => {
  return <Div>{children}</Div>;
};

const Div = styled.div`
  font-size: 28rem;
  line-height: 150%;
  letter-spacing: 0%;
  color: #ffffff;
  white-space: pre-line;
  word-break: keep-all;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    font-size: 18rem;
    line-height: 26rem;
    text-align: center;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 16rem;
    line-height: 150%;
    text-align: center;
  }
`;

export default SectionDescription;
