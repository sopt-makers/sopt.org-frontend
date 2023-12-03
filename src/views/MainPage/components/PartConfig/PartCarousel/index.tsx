import { partList } from '@src/lib/constants/common';
import { Part } from '@src/lib/types/universal';
import * as S from './style';

interface PartCarouselProps {
  selectedPart: Part;
}

export default function PartCarousel({ selectedPart }: PartCarouselProps) {
  const { value, label, description } = partList[selectedPart];

  return (
    <S.PartCarousel>
      <S.PartDetail>
        <S.PartTop>
          <S.PartBadge>{value}</S.PartBadge>
          <S.PartTitle>{label}</S.PartTitle>
        </S.PartTop>
        <S.PartDescription>{description}</S.PartDescription>
      </S.PartDetail>
    </S.PartCarousel>
  );
}
