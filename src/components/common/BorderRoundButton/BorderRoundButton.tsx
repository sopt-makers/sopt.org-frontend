import React, { HTMLAttributes, ReactNode } from 'react';

import * as S from './BorderRoundButton.style';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  [key: string]: any;
}

function RoundButton({ children, ...props }: ButtonProps) {
  return <S.Root {...props}>{children}</S.Root>;
}

export default RoundButton;
