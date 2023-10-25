import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/react';
import { PropsWithChildren } from 'react';

export function Layout({
  children,
  moreStyle,
}: PropsWithChildren<{ moreStyle?: SerializedStyles }>) {
  return <Main moreStyle={moreStyle}>{children}</Main>;
}

const Main = styled.div<{ moreStyle?: SerializedStyles }>`
  ${({ moreStyle }) => moreStyle && moreStyle};
  width: 100%;

  @media (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    row-gap: 50px;
  }
`;
