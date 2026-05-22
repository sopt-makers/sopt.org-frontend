import styled from '@emotion/styled';

export const IntroSection = styled.section`
  position: relative;
`;

export const Shadow = styled.div`
  position: sticky;
  z-index: 90;
  width: 100%;
  height: 120px;
`;

export const Header = styled(Shadow)`
  top: 0;
  background: linear-gradient(180deg, #0f1012 0%, rgba(15, 16, 16, 0) 100%);
`;

export const Footer = styled(Shadow)`
  bottom: 0;
  background: linear-gradient(360deg, #0f1012 0%, rgba(15, 16, 16, 0) 100%);
`;

export const CoreValueSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 0 120px 0;
  z-index: 1;

  @media (max-width: 48rem) {
    padding: 80px 0;
    align-items: flex-start;
  }
`;
