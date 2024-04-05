import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import * as S from './style';

interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: string | ReactElement;
}

function RoundButton({ children, ...props }: ButtonProps) {
  return (
    <S.Root type="button" {...props}>
      {children}
    </S.Root>
  );
}

export default RoundButton;
