import { Part, TabType } from '@src/lib/types/universal';
import * as S from './style';

interface PartButtonProps {
  isSelected: boolean;
  part: TabType;
  onSelectPart: (part: Part) => void;
}

export default function PartButton({ isSelected, part, onSelectPart }: PartButtonProps) {
  return (
    <S.PartButton isSelected={isSelected} onClick={() => onSelectPart(part.value)}>
      {part.label}
    </S.PartButton>
  );
}
