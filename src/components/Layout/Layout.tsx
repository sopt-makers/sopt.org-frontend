import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export function Layout({ children }: PropsWithChildren<unknown>) {
  return <Main>{children}</Main>;
}

const Main = styled.main`
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 1279px) {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
  }
`;
