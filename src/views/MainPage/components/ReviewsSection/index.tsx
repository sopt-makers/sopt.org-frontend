import { useState } from 'react';
import Tab from '@src/components/common/Tab';
import { SoptCommentType } from '@src/lib/types/main';
import handleTabKeyDown from '@src/views/MainPage/utils/handleTabKeyDown';
import ReviewItem from './ReviewItem';
import * as S from './style';

const REVIEW_TABS = {
  APPLICATION: '지원 후기',
  ACTIVITY: '활동 후기',
} as const;

interface ReviewsSectionProps {
  reviews: SoptCommentType[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const [category, setCategory] = useState<string>(REVIEW_TABS.ACTIVITY);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <S.Section aria-labelledby="reviews-title">
      <Tab.Container
        selectedTab={category}
        onSelect={(tab) => {
          setCategory(tab);
          setOpenIndex(0);
        }}
      >
        <S.Content>
          <S.Header>
            <S.Heading>
              <S.Title id="reviews-title">REVIEWS</S.Title>
              <S.Subtitle>먼저 경험한 사람들의 이야기</S.Subtitle>
            </S.Heading>
            <S.Tabs aria-label="후기 카테고리" onKeyDown={handleTabKeyDown}>
              <S.Tab value={REVIEW_TABS.APPLICATION}>{REVIEW_TABS.APPLICATION}</S.Tab>
              <S.Tab value={REVIEW_TABS.ACTIVITY}>{REVIEW_TABS.ACTIVITY}</S.Tab>
            </S.Tabs>
          </S.Header>
          <S.List tab={REVIEW_TABS.APPLICATION}>
            {/* @TODO: /homepage API에 지원 후기 구분이 추가되면 데이터를 연결합니다. (장정훈) */}
            <S.Empty>등록된 지원 후기가 없습니다.</S.Empty>
          </S.List>
          <S.List tab={REVIEW_TABS.ACTIVITY}>
            {reviews.length === 0 && <S.Empty>등록된 활동 후기가 없습니다.</S.Empty>}
            {reviews.map((review, index) => (
              <ReviewItem
                key={index}
                review={review}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </S.List>
        </S.Content>
      </Tab.Container>
    </S.Section>
  );
}
