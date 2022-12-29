import React, { ReactElement } from 'react';
import * as S from './UnderlinedTitle.style';

export interface TitleStyleProps {
  fontSize?: string;
}

interface TitleProps extends TitleStyleProps {
  children: string | ReactElement;
  [key: string]: any;
}

function UnderlinedTitle({ children, fontSize = '35px', ...props }: TitleProps) {
  return (
    <S.Root {...props} fontSize={fontSize}>
      {children}
    </S.Root>
  );
}

export default UnderlinedTitle;
