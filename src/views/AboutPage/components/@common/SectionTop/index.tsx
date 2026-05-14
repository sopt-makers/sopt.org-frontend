import { useContext } from 'react';
import { useIsMobile } from '@src/hooks/useDevice';
import { BrandingColorContext } from '@src/views/AboutPage';
import * as S from './style';

interface SectionTopProps {
  engTitle?: string;
  korTitle: string;
  description?: string;
}

export default function SectionTop({ engTitle, korTitle, description }: SectionTopProps) {
  const isMobile = useIsMobile();

  const { main } = useContext(BrandingColorContext);

  return (
    <S.SectionTop>
      <S.SectionTitle>
        <S.EngTitle $color={main && `#${main}`}>{engTitle}</S.EngTitle>
        <S.KorTitle>{korTitle}</S.KorTitle>
      </S.SectionTitle>
      {description && (
        <S.Description>{isMobile ? description.replace(',', ',\n') : description}</S.Description>
      )}
    </S.SectionTop>
  );
}
