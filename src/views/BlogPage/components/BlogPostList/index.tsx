import type { BlogPostListType } from '@src/lib/types/blog';
import BlogPost from '@src/views/BlogPage/components/BlogPost';
import * as S from './style';

interface BlogPostListProps {
  selectedTap: string; // REVIEW || ARTICLE
  blogPostList: BlogPostListType;
}

function BlogPostList({ selectedTap, blogPostList }: BlogPostListProps) {
  return (
    <S.BlogPostList>
      {blogPostList.data.map((blogPost) => (
        <BlogPost key={blogPost.id} blogPost={blogPost} selectedTap={selectedTap} />
      ))}
    </S.BlogPostList>
  );
}

export default BlogPostList;
