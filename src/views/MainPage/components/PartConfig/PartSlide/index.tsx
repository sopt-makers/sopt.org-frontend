import { ReactComponent as IcArrowLeft } from '@src/assets/icons/ic_arrow_left.svg';
import { ReactComponent as IcArrowRight } from '@src/assets/icons/ic_arrow_right.svg';
import { partList } from '@src/lib/constants/common';
import { Part } from '@src/lib/types/universal';
import * as S from './style';

interface PartSlideProps {
  part: Part;
  handleSwipe: (direction: number) => void;
}

export default function PartSlide({ part, handleSwipe }: PartSlideProps) {
  const { value, label, description } = partList[part];

  return (
    <S.PartCarousel>
      <S.LeftArrow>
        <IcArrowLeft onClick={() => handleSwipe(-1)} />
      </S.LeftArrow>
      <S.Wrapper>
        <S.PartDetail>
          <S.PartTop>
            <S.PartBadge>{value}</S.PartBadge>
            <S.PartTitle>{label}</S.PartTitle>
          </S.PartTop>
          <S.PartDescription>{description}</S.PartDescription>
        </S.PartDetail>
      </S.Wrapper>
      <S.RightArrow>
        <IcArrowRight onClick={() => handleSwipe(1)} />
      </S.RightArrow>
    </S.PartCarousel>
  );
}
