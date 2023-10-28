import { activeGenerationCategoryList } from '@src/lib/constants/tabs';
import type { BlogPostType } from '@src/lib/types/blog';
import { PartCategoryType } from '@src/lib/types/blog';
import BlogPost from '@src/views/BlogPage/components/BlogPost';
import * as S from './style';

interface BlogPostListProps {
  selectedTap: string; // review || article

  blogPostList: BlogPostType[];
  setMajorCategory: (newValue: number) => void;
  setSubCategory: (newValue: PartCategoryType) => void;
}

export default function BlogPostList({
  selectedTap,
  blogPostList,
  setMajorCategory,
  setSubCategory,
}: BlogPostListProps) {
  const showTotalPostList = () => {
    setMajorCategory(activeGenerationCategoryList[0]);
    setSubCategory(PartCategoryType.ALL);
  };
  return (
    <S.BlogPostListWrapper>
      {blogPostList.length === 0 ? (
        <>
          <S.EmptyBlogPostList>
            {`아직 올라온 ${selectedTap === 'article' ? '아티클이' : '활동후기가'} 없어요`}
          </S.EmptyBlogPostList>
          <S.Total onClick={showTotalPostList}>{`${
            selectedTap === 'article' ? '아티클' : '활동후기'
          } 전체 보기`}</S.Total>
        </>
      ) : (
        <S.BlogPostList>
          {blogPostList?.map((blogPost) => (
            <BlogPost key={blogPost.id} blogPost={blogPost} selectedTap={selectedTap} />
          ))}
        </S.BlogPostList>
      )}
    </S.BlogPostListWrapper>
  );
}
