import { useMutation } from '@tanstack/react-query';
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

  const { mutate: toggleLike, isPending } = useMutation({
    mutationFn: (wasLiked: boolean) =>
      wasLiked
        ? api.sopticleAPI.postSopticleUnlike(blogPost.id)
        : api.sopticleAPI.postSopticleLike(blogPost.id),
    onSuccess: (_, wasLiked) => {
      setIsLiked(!wasLiked);
      setLikesCount((prevLikeCount) => (wasLiked ? prevLikeCount - 1 : prevLikeCount + 1));
    },
  });

  const clickLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (isPending) return;

    toggleLike(isLiked);
  };

  return (
    <S.Like type="button" aria-pressed={isLiked} disabled={isPending} onClick={clickLike}>
      <Image src={isLiked ? icHeartFilled : icHeartUnfilled} alt="좋아요" width={16} height={16} />
      <span>{likesCount}</span>
    </S.Like>
  );
}
