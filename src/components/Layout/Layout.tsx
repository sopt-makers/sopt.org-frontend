import styled from '@emotion/styled';
import { CSSProperties, PropsWithChildren } from 'react';

export function Layout({ children, moreStyle }: PropsWithChildren<{ moreStyle?: CSSProperties }>) {
  return <Main style={moreStyle}>{children}</Main>;
}

const Main = styled.div<{ moreStyle?: CSSProperties }>`
  width: 100%;

  @media (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    row-gap: 50px;
  }
`;
