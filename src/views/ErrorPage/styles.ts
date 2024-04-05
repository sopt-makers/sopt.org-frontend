import styled from '@emotion/styled';

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 100dvh;
  min-height: 400rem;
  padding-bottom: 20dvh;

  overflow: scroll;
`;
export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34rem;

  width: 100%;
`;
export const ErrorText = styled.p`
  color: #fcfcfc;

  font-size: 28rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.96rem;

  @media (max-width: 428px) {
    font-size: 24rem;
  }
`;
export const ContactButton = styled.button`
  position: absolute;
  bottom: 17dvh;

  color: #fff;
  font-size: 24rem;
  font-weight: 600;
  line-height: 150%; /* 36rem */
  letter-spacing: -0.48rem;
  text-decoration-line: underline;

  cursor: pointer;

  @media (max-width: 428px) {
    font-size: 18rem;
  }
`;
