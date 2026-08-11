import { RawReviewType } from '@src/lib/types/admin';
import { SoptCommentType } from '@src/lib/types/main';

// 카드 색상은 디자인상 고정 값이라 후기 순서대로 반복 적용
const REVIEW_COLORS = ['#FF7C53', '#FFC700', '#3E74FD', '#F66FF8'] as const;

export const resolveReviews = (reviews: RawReviewType[]): SoptCommentType[] =>
  reviews.map((review, index) => {
    const [name = '', history = '', part = ''] = review.authorInfo
      .split('|')
      .map((value) => value.trim());

    return {
      summary: review.title,
      color: REVIEW_COLORS[index % REVIEW_COLORS.length],
      comment: review.content,
      commenter: { name, history, part },
    };
  });
