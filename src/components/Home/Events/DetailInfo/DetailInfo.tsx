import { EventDetailNumbers } from '@src/types/EventDetailNumbers';
import * as S from './DetailInfo.style';

interface InfoProps {
  eventInfo: EventDetailNumbers;
}

function DetailInfo({ eventInfo }: InfoProps) {
  return (
    <S.Root>
      <S.TitleLabel>{eventInfo.title}</S.TitleLabel>
      <S.NumberLabel>{eventInfo.number}</S.NumberLabel>
      <S.UnitLabel>{eventInfo.unit}</S.UnitLabel>
    </S.Root>
  );
}

export default DetailInfo;
