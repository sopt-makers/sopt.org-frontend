import * as S from './style';

interface ArrowButtonProps {
  variant: 'prev' | 'next';
  disabled: boolean;
  onClick: () => void;
}

const ARROW_CONFIG = {
  prev: { Icon: S.PrevIcon, label: '이전 슬라이드' },
  next: { Icon: S.NextIcon, label: '다음 슬라이드' },
} as const;

export default function ArrowButton({ variant, disabled, onClick }: ArrowButtonProps) {
  const { Icon, label } = ARROW_CONFIG[variant];

  return (
    <S.ArrowButton type="button" disabled={disabled} aria-label={label} onClick={onClick}>
      <Icon />
    </S.ArrowButton>
  );
}
