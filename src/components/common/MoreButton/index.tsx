import * as S from './style';

interface MoreButtonProps {
  label: string;
  mainColor: string;
  onClick?: () => void;
}

function MoreButton({ label, mainColor, onClick }: MoreButtonProps) {
  return (
    <S.Root type="button" mainColor={mainColor} onClick={onClick}>
      <S.LabelBox data-label={label}>{label}</S.LabelBox>
      <S.IconBox>
        <S.Arrow />
      </S.IconBox>
    </S.Root>
  );
}

export default MoreButton;
