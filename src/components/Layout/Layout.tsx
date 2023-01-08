import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

export function Layout({ children }: PropsWithChildren<unknown>) {
  return <Main>{children}</Main>;
}

const Main = styled.div`
  width: 100%;

  @media (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    row-gap: 50px;
  }
`;
