import styled from '@emotion/styled';

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 100vh;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  position: absolute;
  top: 268px;

  width: 100%;
`;
export const ErrorText = styled.p`
  margin-bottom: 26px;

  color: #FCFCFC;

  font-size: 48px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.96px;
`;
export const CodeText = styled.div`
  display: flex;
  align-items: center;
`;
export const ContactButton = styled.button`
  position: absolute;
  bottom: 169px;

  color: #FFF;
  font-size: 24px;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -0.48px;
  text-decoration-line: underline;

  cursor: pointer;
`;
