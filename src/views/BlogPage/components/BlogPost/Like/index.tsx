import Image from 'next/image';
import { useState } from 'react';
import icHeartFilled from '@src/assets/icons/ic_heart_filled.svg';
import icHeartUnfilled from '@src/assets/icons/ic_heart_unfilled.svg';
import { api } from '@src/lib/api';
import { BlogPostType } from '@src/lib/types/blog';
import * as S from './style';

interface LikeProps {
  blogPost: BlogPostType;
}

export default function Like({ blogPost }: LikeProps) {
  const [likesCount, setLikesCount] = useState(blogPost.likeCount || 0);
  const [isLiked, setIsLiked] = useState(blogPost.isLikedByUser);

  const clickLike = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (isLiked) {
      await api.sopticleAPI.postSopticleUnlike(blogPost.id);
      setIsLiked(false);
    } else {
      await api.sopticleAPI.postSopticleLike(blogPost.id);
      setIsLiked(true);
    }

    setLikesCount((prevLikeCount) => (isLiked ? prevLikeCount - 1 : prevLikeCount + 1));
  };

  return (
    <S.Like onClick={clickLike}>
      <Image src={isLiked ? icHeartFilled : icHeartUnfilled} alt="좋아요" width={16} height={16} />
      <span>{likesCount}</span>
    </S.Like>
  );
}
