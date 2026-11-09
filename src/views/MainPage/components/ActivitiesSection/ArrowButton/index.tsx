import * as S from './style';

interface ArrowButtonProps {
  variant: 'prev' | 'next';
  onClick: () => void;
}

const ARROW_CONFIG = {
  prev: { Icon: S.PrevIcon, label: '이전 활동' },
  next: { Icon: S.NextIcon, label: '다음 활동' },
} as const;

export default function ArrowButton({ variant, onClick }: ArrowButtonProps) {
  const { Icon, label } = ARROW_CONFIG[variant];

  return (
    <S.ArrowButton type="button" aria-label={label} onClick={onClick}>
      <Icon />
    </S.ArrowButton>
  );
}
