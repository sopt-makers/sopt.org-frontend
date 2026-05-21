import styled from '@emotion/styled';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 40px;
  gap: 24px;
  z-index: 1;

  ${media.mobile} {
    padding: 0 20px;
    gap: 16px;
  }
`;
