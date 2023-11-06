import { activeGenerationCategoryList } from '@src/lib/constants/tabs';
import { PartCategoryType } from '@src/lib/types/blog';
import { BlogTabType } from '../BlogTab/types';
import * as S from './style';

interface EmptyBlogPostListProps {
  selectedTab: BlogTabType;
  setMajorCategory: (newValue: number) => void;
  setSubCategory: (newValue: PartCategoryType) => void;
}
export default function EmptyBlogPostList({
  selectedTab,
  setMajorCategory,
  setSubCategory,
}: EmptyBlogPostListProps) {
  const showTotalPostList = () => {
    setMajorCategory(activeGenerationCategoryList[0]);
    setSubCategory(PartCategoryType.ALL);
  };

  return (
    <S.EmptyBlogPostListWrapper>
      <S.EmptyBlogPostList>
        {`아직 올라온 ${selectedTab === 'article' ? '아티클이' : '활동후기가'} 없어요`}
      </S.EmptyBlogPostList>
      <S.Total onClick={showTotalPostList}>{`${
        selectedTab === 'article' ? '아티클' : '활동후기'
      } 전체 보기`}</S.Total>
    </S.EmptyBlogPostListWrapper>
  );
}
