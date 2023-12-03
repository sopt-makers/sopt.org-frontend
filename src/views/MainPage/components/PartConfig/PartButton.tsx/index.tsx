import * as S from './style';

interface PartButtonProps {
  index: number;
  label: string;
  isSelected: boolean;
  handleSelectPart: (index: number) => void;
}

export default function PartButton({ index, label, isSelected, handleSelectPart }: PartButtonProps) {
  return (
    <S.PartButton isSelected={isSelected} onClick={() => handleSelectPart(index)}>
      {label}
    </S.PartButton>
  );
}
