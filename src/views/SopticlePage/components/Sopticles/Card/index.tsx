import { useState } from 'react';
import { ReactComponent as IconHeartFilled } from '@src/assets/icons/icon_heartfilled.svg';
import { ReactComponent as IconHeartUnfilled } from '@src/assets/icons/icon_heartunfilled.svg';
import NullImage from '@src/assets/images/null_image.png';
import useStorage from '@src/hooks/useStorage';
import { api } from '@src/lib/api';
import { SopticleType } from '@src/lib/types/sopticle';
import { formatDate } from '@src/utils/dateFormat';
import * as S from '../style';

type SopticleCardProps = {
  sopticle: SopticleType;
};

const SopticleCard = ({ sopticle }: SopticleCardProps) => {
  const likeKey = `sopticle_liked_${sopticle.id}`;
  const [liked, setLiked] = useStorage(likeKey, 'localStorage', false);
  const [likesCount, setLikesCount] = useState(sopticle.likesCount);

  const handleOnLikeClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const response = await api.sopticleAPI.postSopticleLike(sopticle.id, liked ?? true);
    setLiked(response.currentLike);
    if (response.likeChanged)
      setLikesCount((prevLikesCount) =>
        response.currentLike ? prevLikesCount + 1 : prevLikesCount - 1,
      );
  };

  return (
    <S.Card href={sopticle.link} target="_blank" passHref>
      <S.ThumbnailWrapper>
        <S.Thumbnail src={sopticle.thumbnail} alt={sopticle.title} fill />
        <S.ChipWrapper>
          <S.Chip>{sopticle.part}</S.Chip>
          <S.Chip>{sopticle.semester}기</S.Chip>
        </S.ChipWrapper>
      </S.ThumbnailWrapper>
      <S.Section>
        <S.Title>{sopticle.title}</S.Title>
        <S.Desc>{sopticle.subtitle}</S.Desc>
      </S.Section>
      <S.LastSection>
        <S.AuthorThumbnail
          src={sopticle.authorProfileUrl ?? NullImage.src}
          width={28}
          height={28}
          alt={sopticle.author}
        />
        <S.DeemedText>{sopticle.author}</S.DeemedText>
        <S.ColSeparator />
        <S.DeemedText>{formatDate(sopticle.publishedAt, 'yyyymmdd', '.')}</S.DeemedText>
        <S.LikeSection onClick={handleOnLikeClick}>
          <S.DeemedText>{likesCount}</S.DeemedText>
          {liked ? (
            <IconHeartFilled width={24} height={24} />
          ) : (
            <IconHeartUnfilled width={24} height={24} />
          )}
        </S.LikeSection>
      </S.LastSection>
    </S.Card>
  );
};

export default SopticleCard;
