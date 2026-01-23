import styled from '@emotion/styled';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';
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
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    font-size: 18rem;
    line-height: 26px;
    text-align: center;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    font-size: 16rem;
    line-height: 150%;
    text-align: center;
  }
`;

export default SectionDescription;
