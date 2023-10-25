import { useEffect, useRef, useState } from 'react';
import type { BlogPostType } from '@src/lib/types/blog';
import { parsePartToKorean } from '@src/lib/utils/parsePartToKorean';
import Header from '@src/views/BlogPage/components/BlogPost/Header';
import Like from '@src/views/BlogPage/components/BlogPost/Like';
import * as S from './style';

const TWO_LINE_TITLE_HEIGHT = 72;

interface BlogPostProps {
  selectedTap: string;
  blogPost: BlogPostType;
}

export default function BlogPost({ selectedTap, blogPost }: BlogPostProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const [descriptionLine, setDescriptionLine] = useState(1);

  useEffect(() => {
    if (titleRef.current) {
      const titleHeight = titleRef.current.clientHeight;
      setDescriptionLine(titleHeight >= TWO_LINE_TITLE_HEIGHT ? 1 : 2);
    }
  }, []);

  return (
    <S.BlogPost href={blogPost.url}>
      <div>
        <Header selectedTap={selectedTap} blogPost={blogPost} />
        <S.Body>
          <S.Title ref={titleRef}>{blogPost.title}</S.Title>
          <S.Description descriptionLine={descriptionLine}>{blogPost.description}</S.Description>
        </S.Body>
        <S.TagList>
          <S.Tag>{blogPost.generation}기</S.Tag>
          <S.Tag>{parsePartToKorean(blogPost.part)}</S.Tag>
        </S.TagList>
      </div>
      <S.ThumbnailWrapper>
        <S.Thumbnail
          src={
            blogPost.thumbnailUrl.charAt(0) !== 'h'
              ? `https:${blogPost.thumbnailUrl}`
              : blogPost.thumbnailUrl
          }
          alt="게시물 썸네일"
          width={239}
          height={160}
          loading="lazy"
        />
        {selectedTap === 'article' && <Like blogPost={blogPost} />}
      </S.ThumbnailWrapper>
    </S.BlogPost>
  );
}
