import { BlogCategoryType, BlogPostType } from '@src/lib/types/blog';
import { formatDate } from '@src/lib/utils/dateFormat';
import DefaultProfileImage from '@src/views/BlogPage/components/BlogPost/DefaultProfileImage';
import * as S from './style';
import { parsePartToKorean } from '@src/lib/utils/parsePartToKorean';
import { BlogTabType } from '@src/views/BlogPage/components/BlogTab/types';

interface HeaderProps {
  selectedTab: BlogTabType;
  selectedReviewTag: BlogCategoryType;
  blogPost: BlogPostType;
}

export default function Header({ selectedTab, blogPost, selectedReviewTag }: HeaderProps) {
  return (
    <S.Header>
      {selectedTab === BlogTabType.ARTICLE ? (
        <>
          <S.Profile>
            {blogPost.authorProfileImageUrl ? (
              <S.ProfileImage
                src={blogPost.authorProfileImageUrl}
                alt="작성자 프로필 이미지"
                width={18}
                height={18}
              />
            ) : (
              <DefaultProfileImage />
            )}
            <div>{blogPost.author}</div>
          </S.Profile>
          <S.Divider>∙</S.Divider>
          <div>{formatDate(new Date(blogPost.uploadedAt), 'yyyymmdd', '.')}</div>
        </>
      ) : selectedTab === BlogTabType.REVIEW && selectedReviewTag === BlogCategoryType.DOCUMENT_INTERVIEW ? (
        <>
          <S.Profile>
            {blogPost.authorProfileImageUrl ? (
              <S.ProfileImage
                src={blogPost.authorProfileImageUrl}
                alt="작성자 프로필"
                width={18}
                height={18}
              />
            ) : (
              <DefaultProfileImage />
            )}
            <div>{blogPost.author}</div>
          </S.Profile>
        </>
      ) : (
        <S.Part>{blogPost.generation}기 <S.Divider>∙</S.Divider> {parsePartToKorean(blogPost.part)}</S.Part>
      )}
    </S.Header>
  );
}
