import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/react';
import { PropsWithChildren } from 'react';

export function Layout({
  children,
  moreStyle,
}: PropsWithChildren<{ moreStyle?: SerializedStyles }>) {
  return <Main css={moreStyle}>{children}</Main>;
}

const Main = styled.div<{ moreStyle?: SerializedStyles }>`
  display: flex;
  flex-direction: column;
`;
