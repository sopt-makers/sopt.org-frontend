import { activeGenerationCategoryList } from '@src/lib/constants/tabs';
import { BlogCategoryType, PartCategoryType } from '@src/lib/types/blog';
import { BlogTabType } from '../BlogTab/types';
import * as S from './style';

interface EmptyBlogPostListProps {
  selectedTab: BlogTabType;
  selectedReviewTag: BlogCategoryType;
  setMajorCategory: (newValue: number) => void;
  setSubCategory: (newValue: PartCategoryType) => void;
}
export default function EmptyBlogPostList({
  selectedTab,
  selectedReviewTag,
  setMajorCategory,
  setSubCategory,
}: EmptyBlogPostListProps) {
  const showTotalPostList = () => {
    setMajorCategory(activeGenerationCategoryList[0]);
    setSubCategory(PartCategoryType.ALL);
  };

  const isApplyReview =
    selectedTab === BlogTabType.REVIEW && selectedReviewTag === BlogCategoryType.DOCUMENT_INTERVIEW;
  const isActivityReview =
    selectedTab === BlogTabType.REVIEW && selectedReviewTag === BlogCategoryType.ALL_ACTIVITIES;

  return (
    <S.EmptyBlogPostListWrapper>
      <S.EmptyBlogPostList>
        {`아직 올라온 ${
          selectedTab === BlogTabType.ARTICLE
            ? '아티클이'
            : isApplyReview
            ? '서류/면접 후기가'
            : isActivityReview && '활동후기가'
        } 없어요`}
      </S.EmptyBlogPostList>
      <S.Total onClick={showTotalPostList}>{`${
        selectedTab === BlogTabType.ARTICLE
          ? '아티클'
          : isApplyReview
          ? '서류/면접 후기'
          : isActivityReview && '활동후기'
      } 전체 보기`}</S.Total>
    </S.EmptyBlogPostListWrapper>
  );
}
