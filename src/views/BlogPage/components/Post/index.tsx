import { useEffect, useRef, useState } from 'react';
import type { BlogPostType } from '@src/lib/types/blog';
import { parsePartToKorean } from '@src/lib/utils/parsePartToKorean';
import Header from '@src/views/BlogPage/components/Post/Header';
import Like from '@src/views/BlogPage/components/Post/Like';
import * as S from './style';

const TWO_LINE_TITLE_HEIGHT = 72;

interface PostProps {
  selectedTap: string;
  post: BlogPostType;
}

function Post({ selectedTap, post }: PostProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const [descriptionLine, setDescriptionLine] = useState(1);

  useEffect(() => {
    if (titleRef.current) {
      const titleHeight = titleRef.current.clientHeight;
      setDescriptionLine(titleHeight >= TWO_LINE_TITLE_HEIGHT ? 1 : 2);
    }
  }, []);

  return (
    <S.Post href={post.url}>
      <div>
        <Header selectedTap={selectedTap} post={post} />
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
        {selectedTap === 'ARTICLE' && <Like post={post} />}
      </S.ThumbnailWrapper>
    </S.Post>
  );
}

export default Post;
