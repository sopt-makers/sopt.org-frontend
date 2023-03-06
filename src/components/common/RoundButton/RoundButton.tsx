import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import * as S from './RoundButton.style';

interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: string | ReactElement;
  isReverse?: boolean;
}

function RoundButton({ children, isReverse = false, ...props }: ButtonProps) {
  return (
    <S.Root isReverse={isReverse} {...props}>
      {children}
    </S.Root>
  );
}

export default RoundButton;
