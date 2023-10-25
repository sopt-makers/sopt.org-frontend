import { track } from '@amplitude/analytics-browser';
import Image from 'next/image';
import { useState } from 'react';
import icHeartFilled from '@src/assets/icons/ic_heart_filled.svg';
import icHeartUnfilled from '@src/assets/icons/ic_heart_unfilled.svg';
import useStorage from '@src/hooks/useStorage';
import { api } from '@src/lib/api';
import { BlogPostType } from '@src/lib/types/blog';
import * as S from './style';

interface LikeProps {
  blogPost: BlogPostType;
}

export default function Like({ blogPost }: LikeProps) {
  const likeKey = `sopticle_liked_${blogPost.id}`;
  const [liked, setLiked] = useStorage(likeKey, 'localStorage', false);
  const [likesCount, setLikesCount] = useState(blogPost.likeCount);

  const clickLike = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('click');
    const response = await api.sopticleAPI.postSopticleLike(blogPost.id, liked ?? true);
    console.log('res', response);
    setLiked(response.currentLike);
    track('click_sopticle_like', { sopticle_id: blogPost.id, is_like: response.currentLike });
    if (response.likeChanged)
      setLikesCount((prevLikeCount) =>
        response.currentLike ? prevLikeCount + 1 : prevLikeCount - 1,
      );
  };

  return (
    <S.Like onClick={clickLike}>
      <Image src={liked ? icHeartFilled : icHeartUnfilled} alt="좋아요" width={16} height={16} />
      <span>{likesCount}</span>
    </S.Like>
  );
}
