import { BlogPostType } from '@src/lib/types/blog';
import { formatDate } from '@src/lib/utils/dateFormat';
import DefaultProfileImage from '@src/views/BlogPage/components/BlogPost/DefaultProfileImage';
import * as S from './style';

interface HeaderProps {
  selectedTab: string;
  blogPost: BlogPostType;
}

export default function Header({ selectedTab, blogPost }: HeaderProps) {
  return (
    <S.Header>
      {selectedTab === 'article' ? (
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
      ) : (
        <div>{blogPost.subject}</div>
      )}
    </S.Header>
  );
}
