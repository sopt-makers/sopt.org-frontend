import type { BlogPostListType } from '@src/lib/types/blog';
import Post from '@src/views/BlogPage/components/Post';
import * as S from './style';

interface PostListProps {
  selectedTap: string; // REVIEW || ARTICLE
  postList: BlogPostListType;
}

function PostList({ selectedTap, postList }: PostListProps) {
  return (
    <S.PostList>
      {postList.data.map((post) => (
        <Post key={post.id} post={post} selectedTap={selectedTap} />
      ))}
    </S.PostList>
  );
}

export default PostList;
