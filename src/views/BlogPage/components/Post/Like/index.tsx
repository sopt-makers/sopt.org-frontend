import Image from 'next/image';
import icHeartFilled from '@src/assets/icons/ic_heart_filled.svg';
import icHeartUnfilled from '@src/assets/icons/ic_heart_unfilled.svg';
import { BlogPostType } from '@src/lib/types/blog';
import * as S from './style';

interface LikeProps {
  post: BlogPostType;
}

function Like({ post }: LikeProps) {
  return (
    <S.Like>
      <Image
        src={post.liked ? icHeartFilled : icHeartUnfilled}
        alt="좋아요"
        width={16}
        height={16}
      />
      <span>{post.likeCount}</span>
    </S.Like>
  );
}

export default Like;
