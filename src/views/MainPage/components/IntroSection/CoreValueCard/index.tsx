import { IntroContentType } from '@src/lib/types/main';
import * as S from './style';

interface CoreValueCardProps {
  card: IntroContentType;
  isActive: boolean;
  onHover: () => void;
  onClick: () => void;
  isMobile?: boolean;
}

export default function CoreValueCard({
  card,
  isActive,
  onHover,
  onClick,
  isMobile,
}: CoreValueCardProps) {
  return (
    <S.CardContainer
      onMouseEnter={onHover}
      onClick={onClick}
      isActive={isActive}
    >
      <S.CoreValueImage src={card.src} alt={card.title} width={540} height={360} loading="lazy" />
      <S.GradientOverlay isActive={isActive} />
      <S.CardContent isActive={isActive}>
        <S.CardTitle>{card.title}</S.CardTitle>
        <S.CardDetail>{card.detail}</S.CardDetail>
      </S.CardContent>
      {!isMobile && <><S.CardValue isActive={isActive}>{card.value}</S.CardValue>
      <S.PrimaryColorCircle isActive={isActive} /></>}
    </S.CardContainer>
  );
}
