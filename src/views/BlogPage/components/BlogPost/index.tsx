import { track } from '@amplitude/analytics-browser';
import { useEffect, useRef, useState } from 'react';
import img_blog_default from '@src/assets/icons/img_blog_default.svg';
import { BlogCategoryType, BlogPostType } from '@src/lib/types/blog';
import { parsePartToKorean } from '@src/lib/utils/parsePartToKorean';
import Header from '@src/views/BlogPage/components/BlogPost/Header';
import Like from '@src/views/BlogPage/components/BlogPost/Like';
import { BlogTabType } from '@src/views/BlogPage/components/BlogTab/types';
import * as S from './style';

const TWO_LINE_TITLE_HEIGHT = 72;

interface BlogPostProps {
  selectedTab: BlogTabType;
  blogPost: BlogPostType;
  selectedReviewTag: BlogCategoryType;
}

const getThumbnailUrl = (blogPost: BlogPostType) => {
  if (!blogPost.thumbnailUrl) {
    return img_blog_default;
  }
  try {
    if (
      blogPost.thumbnailUrl.startsWith('http://') ||
      blogPost.thumbnailUrl.startsWith('https://')
    ) {
      return blogPost.thumbnailUrl;
    }
    if (blogPost.thumbnailUrl.startsWith('//')) {
      return `https:${blogPost.thumbnailUrl}`;
    }

    return `https://${blogPost.thumbnailUrl}`;
  } catch (e) {
    console.error('URL Processing Error', blogPost.thumbnailUrl, e);
    return img_blog_default;
  }
};

export default function BlogPost({ selectedTab, blogPost, selectedReviewTag }: BlogPostProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const [descriptionLine, setDescriptionLine] = useState(1);
  const [error, setError] = useState(false);

  const onThumbnailError = () => {
    setError(true);
  };

  useEffect(() => {
    if (titleRef.current) {
      const titleHeight = titleRef.current.clientHeight;
      setDescriptionLine(titleHeight >= TWO_LINE_TITLE_HEIGHT ? 1 : 2);
    }
  }, []);

  const thumbnailUrl = getThumbnailUrl(blogPost);
  const isApplyReview = selectedTab === BlogTabType.REVIEW && selectedReviewTag === BlogCategoryType.DOCUMENT_INTERVIEW;
  const isActivityReview = selectedTab === BlogTabType.REVIEW && selectedReviewTag === BlogCategoryType.ALL_ACTIVITIES;

  return (
    <S.PostWrapper tab={selectedTab}>
      <S.BlogPost
        onClick={() => {
          track(`click_${selectedTab}_detail`);
          window.open(blogPost.url);
        }}
      >
        <div>
          {selectedTab === BlogTabType.REVIEW && (
            <Header selectedTab={selectedTab} blogPost={blogPost} selectedReviewTag={selectedReviewTag} />
          )}
          <S.Body>
            <S.Title ref={titleRef}>{blogPost.title}</S.Title>
            <S.Description descriptionLine={descriptionLine}>{blogPost.description}</S.Description>
          </S.Body>
          {isApplyReview && (
            <S.TagList>
              <S.Tag>{blogPost.generation}기</S.Tag>
              <S.Tag>{parsePartToKorean(blogPost.part)}</S.Tag>
            </S.TagList>
          )}
          {isActivityReview && (
            <S.TagList>
              {
                blogPost.subject?.map((subjectItem, index) => (
                  <S.Tag key={`${subjectItem}-${index}`}>{subjectItem}</S.Tag>
                ))
              }
            </S.TagList>
          )}
        </div>
      </S.BlogPost>
      <S.ThumbnailWrapper>
        <S.Thumbnail
          src={error ? img_blog_default : thumbnailUrl}
          alt="게시물 썸네일"
          width={239}
          height={160}
          loading="lazy"
          onError={onThumbnailError}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU0zOtBwACNQES9P3nGQAAAABJRU5ErkJggg=="
          unoptimized
        />
        {selectedTab === BlogTabType.ARTICLE && <Like blogPost={blogPost} />}
      </S.ThumbnailWrapper>
    </S.PostWrapper>
  );
}
