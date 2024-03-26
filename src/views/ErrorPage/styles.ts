import styled from '@emotion/styled';
import Link from 'next/link';

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

  font-size: 28px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.96px;

  @media (max-width: 428px) {
    font-size: 24px;
  }
`;
export const ContactLink = styled(Link)`
  position: absolute;
  bottom: 17dvh;

  color: #fff;
  font-size: 24px;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -0.48px;
  text-decoration-line: underline;

  cursor: pointer;

  @media (max-width: 428px) {
    font-size: 18px;
  }
`;
