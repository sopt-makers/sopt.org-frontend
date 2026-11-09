import { useRouter } from 'next/router';
import MoreButton from '@src/components/common/MoreButton';
import { ActivityItem } from '../constants';
import * as S from './style';

interface ActivitiesCardProps {
  activity: ActivityItem;
  isActive: boolean;
  isClone: boolean;
  mainColor: string;
  onSelect: () => void;
}

const ActivitiesCard = ({
  activity,
  isActive,
  isClone,
  mainColor,
  onSelect,
}: ActivitiesCardProps) => {
  const router = useRouter();
  const { ko, en, img, description, link } = activity;

  const handleMoreClick = () => {
    if (!link) return;
    if (link.target === '_blank') window.open(link.href, '_blank', 'noopener,noreferrer');
    else router.push(link.href);
  };

  return (
    <S.Card
      data-active={isActive}
      aria-hidden={isClone || undefined}
      onClick={isActive ? undefined : onSelect}
    >
      <S.Shot>
        <S.Image src={img} alt="" fill sizes={S.IMAGE_SIZES} draggable={false} />
        <S.Dim />
      </S.Shot>
      <S.Titles>
        <S.Ko>{ko}</S.Ko>
        <S.En>{en}</S.En>
      </S.Titles>
      <S.Details>
        <S.Description>{description}</S.Description>
        {link && <MoreButton label={link.label} mainColor={mainColor} onClick={handleMoreClick} />}
      </S.Details>
    </S.Card>
  );
};

export default ActivitiesCard;
