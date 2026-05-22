import { useContext } from 'react';
import { useIsMobile } from '@src/hooks/useDevice';
import { BrandingColorContext } from '@src/views/AboutPage';
import * as S from './style';

interface SectionTopProps {
  engTitle?: string;
  korTitle: string;
  description?: string;
  mainColor?: string;
}

export default function SectionTop({
  engTitle,
  korTitle,
  description,
  mainColor,
}: SectionTopProps) {
  const isMobile = useIsMobile();
  const { main } = useContext(BrandingColorContext);
  const resolvedColor = mainColor ?? '#' + main;

  return (
    <S.SectionTop>
      <S.SectionTitle>
        <S.EngTitle mainColor={resolvedColor}>{engTitle}</S.EngTitle>
        <S.KorTitle>{korTitle}</S.KorTitle>
      </S.SectionTitle>
      {description && (
        <S.Description>{isMobile ? description.replace(',', ',\n') : description}</S.Description>
      )}
    </S.SectionTop>
  );
}
