import { PropsWithChildren } from 'react';
import * as S from './style';

export interface TitleProps {
  fontSize?: string;
}

function UnderlinedText({ children, fontSize = '35px', ...props }: PropsWithChildren<TitleProps>) {
  return (
    <S.Root {...props} fontSize={fontSize}>
      {children}
    </S.Root>
  );
}

export default UnderlinedText;
