import * as S from './style';

interface MoreButtonProps {
  label: string;
  onClick?: () => void;
}

function MoreButton({ label, onClick }: MoreButtonProps) {
  return (
    <S.Root type="button" onClick={onClick}>
      <S.LabelBox>{label}</S.LabelBox>
      <S.IconBox>
        <S.Arrow />
      </S.IconBox>
    </S.Root>
  );
}

export default MoreButton;
