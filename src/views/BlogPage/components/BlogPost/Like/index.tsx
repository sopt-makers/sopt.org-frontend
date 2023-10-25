import Image from 'next/image';
import icHeartFilled from '@src/assets/icons/ic_heart_filled.svg';
import icHeartUnfilled from '@src/assets/icons/ic_heart_unfilled.svg';
import { BlogPostType } from '@src/lib/types/blog';
import * as S from './style';

interface LikeProps {
  blogPost: BlogPostType;
}

export default function Like({ blogPost }: LikeProps) {
  return (
    <S.Like>
      <Image
        src={blogPost.liked ? icHeartFilled : icHeartUnfilled}
        alt="좋아요"
        width={16}
        height={16}
      />
      <span>{blogPost.likeCount}</span>
    </S.Like>
  );
}
