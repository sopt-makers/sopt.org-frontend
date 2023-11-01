import type { BlogPostType } from '@src/lib/types/blog';
import BlogPost from '@src/views/BlogPage/components/BlogPost';
import * as S from './style';

interface BlogPostListProps {
  selectedTap: string; // review || article
  blogPostList: BlogPostType[];
}

export default function BlogPostList({ selectedTap, blogPostList }: BlogPostListProps) {
  return (
    <S.BlogPostListWrapper>
      <S.BlogPostList>
        {blogPostList?.map((blogPost) => (
          <BlogPost key={blogPost.id} blogPost={blogPost} selectedTap={selectedTap} />
        ))}
      </S.BlogPostList>
    </S.BlogPostListWrapper>
  );
}
