import styled from '@emotion/styled';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;

  ${media.mobile} {
    padding: 0 20px;
  }
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;

  ${media.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;
