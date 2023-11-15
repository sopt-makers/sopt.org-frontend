import styled from '@emotion/styled';

export const IntroCardList = styled.div`
  position: relative;
`;

export const Shadow = styled.div`
  position: sticky;
  top: 0;
  z-index: 9;

  width: 100%;
  height: 120px;
`;

export const Header = styled(Shadow)`
  background: linear-gradient(180deg, #0f1010 0%, rgba(15, 16, 16, 0) 100%);
`;

export const Footer = styled(Shadow)`
  background: linear-gradient(360deg, #0f1010 0%, rgba(15, 16, 16, 0) 100%);
`;
