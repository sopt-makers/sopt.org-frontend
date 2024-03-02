import { useIsMobile } from '@src/hooks/useDevice';
import * as S from './style';

interface SectionTopProps {
  engTitle: string;
  korTitle: string;
  description?: string;
}

export default function SectionTop({ engTitle, korTitle, description }: SectionTopProps) {
  const isMobile = useIsMobile();
  return (
    <S.SectionTop>
      <S.SectionTitle>
        <S.EngTitle>{engTitle}</S.EngTitle>
        <S.KorTitle>{korTitle}</S.KorTitle>
      </S.SectionTitle>
      {description && <S.Description>{isMobile ? description.replace(',', ',\n') : description}</S.Description>}
    </S.SectionTop>
  );
}
