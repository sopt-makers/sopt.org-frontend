import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import icHeartUnfilled from '@src/assets/icons/ic_heart_unfilled.svg';
import type { PostType } from '@src/lib/types/blog';
import { formatDate } from '@src/lib/utils/dateFormat';
import { parsePartToKorean } from '@src/lib/utils/parsePartToKorean';
import DefaultProfileImage from '@src/views/BlogPage/components/DefaultProfileImage';
import * as S from './style';

const TWO_LINE_TITLE_HEIGHT = 72;

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  const { authorProfileImageUrl } = post;
  const titleRef = useRef<HTMLDivElement>(null);
  const [descriptionLine, setDescriptionLine] = useState(1);

  useEffect(() => {
    if (titleRef.current) {
      const titleHeight = titleRef.current.clientHeight;
      setDescriptionLine(titleHeight >= TWO_LINE_TITLE_HEIGHT ? 1 : 2);
    }
  }, []);

  return (
    <S.Post>
      <div>
        <S.Header>
          <S.Profile>
            {authorProfileImageUrl ? (
              <S.ProfileImage
                src={authorProfileImageUrl}
                alt="작성자 프로필 이미지"
                width={18}
                height={18}
              />
            ) : (
              <DefaultProfileImage />
            )}
            <div>{post.author}</div>
          </S.Profile>
          <S.Divider>∙</S.Divider>
          <div>{formatDate(new Date(post.uploadedAt), 'yyyymmdd', '.')}</div>
        </S.Header>
        <S.Body>
          <S.Title ref={titleRef}>{post.title}</S.Title>
          <S.Description descriptionLine={descriptionLine}>{post.description}</S.Description>
        </S.Body>
        <S.TagList>
          <S.Tag>{post.generation}기</S.Tag>
          <S.Tag>{parsePartToKorean(post.part)}</S.Tag>
        </S.TagList>
      </div>
      <S.ThumbnailWrapper>
        <S.Thumbnail src={post.thumbnailUrl} alt="게시물 썸네일" width={239} height={160} />
        <S.Like>
          <Image src={icHeartUnfilled} alt="좋아요" width={16} height={16} />
          <span>{post.likeCount}</span>
        </S.Like>
      </S.ThumbnailWrapper>
    </S.Post>
  );
}

export default Post;
