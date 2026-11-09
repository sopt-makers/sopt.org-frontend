import NumberRoller from '@src/components/common/NumberRoller';
import * as S from './style';

interface RecordProps {
  value: number;
  unit: string;
  label: string;
  mainColor: string;
}

function Record({ value, unit, label, mainColor }: RecordProps) {
  return (
    <S.Root>
      <S.ValueRow>
        <S.Number>
          <NumberRoller goalNumber={value} duration={0.8} />
        </S.Number>
        <S.Unit mainColor={mainColor}>{unit}</S.Unit>
      </S.ValueRow>
      <S.Label>{label}</S.Label>
    </S.Root>
  );
}

export default Record;
