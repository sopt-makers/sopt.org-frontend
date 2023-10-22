import { BlogPostType } from '@src/lib/types/blog';
import { formatDate } from '@src/lib/utils/dateFormat';
import DefaultProfileImage from '@src/views/BlogPage/components/DefaultProfileImage';
import * as S from './style';

interface HeaderProps {
  selectedTap: string;
  post: BlogPostType;
}

function Header({ selectedTap, post }: HeaderProps) {
  return (
    <S.Header>
      {selectedTap === 'ARTICLE' ? (
        <>
          <S.Profile>
            {post.authorProfileImageUrl ? (
              <S.ProfileImage
                src={post.authorProfileImageUrl}
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
        </>
      ) : (
        <div>{post.subject}</div>
      )}
    </S.Header>
  );
}

export default Header;
