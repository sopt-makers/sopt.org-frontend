import * as S from './style';

interface PartButtonProps {
  key: number;
  label: string;
  isSelected: boolean;
  handleSelectPart: (index: number) => void;
}

export default function PartButton({ key, label, isSelected, handleSelectPart }: PartButtonProps) {
  return (
    <S.PartButton isSelected={isSelected} onClick={() => handleSelectPart(key)}>
      {label}
    </S.PartButton>
  );
}
