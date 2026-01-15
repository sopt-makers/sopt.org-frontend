import { ButtonHTMLAttributes } from 'react';
import * as S from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <S.Button type="button" {...props}>
      {children}
    </S.Button>
  );
}
