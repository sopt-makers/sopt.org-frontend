import * as S from './style';

interface SectionTopProps {
  engTitle: string;
  korTitle: string;
  description?: string;
}

export default function SectionTop({ engTitle, korTitle, description }: SectionTopProps) {
  return (
    <S.SectionTop>
      <S.SectionTitle>
        <S.EngTitle>{engTitle}</S.EngTitle>
        <S.KorTitle>{korTitle}</S.KorTitle>
      </S.SectionTitle>
      {description && <S.Description>{description}</S.Description>}
    </S.SectionTop>
  );
}
