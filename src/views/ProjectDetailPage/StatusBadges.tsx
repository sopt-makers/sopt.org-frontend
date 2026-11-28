import * as S from './style';

interface StatusBadgesProps {
  isFounding: boolean;
  isAvailable: boolean;
  overlay?: boolean;
}

export default function StatusBadges({
  isFounding,
  isAvailable,
  overlay = false,
}: StatusBadgesProps) {
  if (!isFounding && !isAvailable) return null;
  return (
    <S.Badges data-overlay={overlay}>
      {isFounding && <S.Badge>창업 중</S.Badge>}
      {isAvailable && (
        <S.Badge data-operating>{overlay ? '서비스 운영 중' : '서비스 이용 가능'}</S.Badge>
      )}
    </S.Badges>
  );
}
