import { forwardRef, Ref } from 'react';
import * as S from './style';

interface PartButtonProps {
  index: number;
  label: string;
  isSelected: boolean;
  handleSelectPart: (index: number) => void;
}

function PartButton(
  { index, label, isSelected, handleSelectPart }: PartButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  return (
    <S.PartButton
      ref={ref}
      isSelected={isSelected}
      onClick={(e) => {
        handleSelectPart(index);
        e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }}
    >
      {label}
    </S.PartButton>
  );
}

export default forwardRef(PartButton);
