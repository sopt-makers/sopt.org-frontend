import * as S from '../style';

interface ExperienceItemProps {
  name: string;
  description: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export default function ExperienceItem({
  name,
  description,
  index,
  isActive,
  onClick,
}: ExperienceItemProps) {
  return (
    <S.Item
      type="button"
      isActive={isActive}
      aria-expanded={isActive}
      aria-controls={name}
      onClick={onClick}
    >
      <S.Fold isActive={isActive} aria-hidden={!isActive}>
        <S.FoldInner>
          <S.Meta>
            <S.Chip>{String(index + 1).padStart(2, '0')}</S.Chip>
            <S.Chip>{name}</S.Chip>
          </S.Meta>
        </S.FoldInner>
      </S.Fold>
      <S.Heading isActive={isActive}>
        <S.Arrow isActive={isActive} aria-hidden="true" />
        <S.Name isActive={isActive}>{name}</S.Name>
      </S.Heading>
      <S.Fold id={name} isActive={isActive} aria-hidden={!isActive}>
        <S.FoldInner>
          <S.Description>{description}</S.Description>
        </S.FoldInner>
      </S.Fold>
    </S.Item>
  );
}
