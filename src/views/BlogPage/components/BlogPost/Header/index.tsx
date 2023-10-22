import { BlogPostType } from '@src/lib/types/blog';
import { formatDate } from '@src/lib/utils/dateFormat';
import { DefaultProfileImage } from '@src/views/BlogPage/components/BlogPost';
import * as S from './style';

interface HeaderProps {
  selectedTap: string;
  blogPost: BlogPostType;
}

function Header({ selectedTap, blogPost }: HeaderProps) {
  return (
    <S.Header>
      {selectedTap === 'ARTICLE' ? (
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

export default Header;
