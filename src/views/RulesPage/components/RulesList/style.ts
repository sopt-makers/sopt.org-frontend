import styled from '@emotion/styled';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const Ul = styled.ul`
  margin-top: 130px;
  li {
    &:last-child {
      border: none;
    }
  }
  @media screen and (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    margin-top: 31px;
  }
`;
