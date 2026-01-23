import styled from '@emotion/styled';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 100dvh;
  min-height: 400px;
  padding-bottom: 20dvh;

  overflow: scroll;
`;
export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;

  width: 100%;
`;
export const ErrorText = styled.p`
  color: #fcfcfc;

  font-size: 28rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.96px;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    font-size: 24rem;
  }
`;
export const ContactButton = styled.button`
  position: absolute;
  bottom: 17dvh;

  color: #fff;
  font-size: 24rem;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -0.48px;
  text-decoration-line: underline;

  cursor: pointer;

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    font-size: 18rem;
  }
`;
