import styled from '@emotion/styled';
import { media } from '@src/lib/styles/breakpoints';

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${media.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  ${media.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`;
