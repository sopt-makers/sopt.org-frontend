import styled from '@emotion/styled';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  ${media.desktop} {
    gap: 24px;
  }

  ${media.tablet} {
    gap: 18px;
  }

  ${media.mobile} {
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
`;
