import { useAnimationControls } from 'framer-motion';
import { Ref, forwardRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@src/lib/styles/breakpoints';
import { SoptCommentType } from '@src/lib/types/main';
import ReviewCard from './Card';
import * as S from './style';

const CARD_GAP = 24;

interface NavButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  disablePrev: boolean;
  disableNext: boolean;
}

function NavButtons({ onPrev, onNext, disablePrev, disableNext }: NavButtonsProps) {
  return (
    <S.NavButtons>
      <S.NavButton onClick={onPrev} aria-label="이전" disabled={disablePrev}>
        <S.ArrowLeftIcon />
      </S.NavButton>
      <S.NavButton onClick={onNext} aria-label="다음" disabled={disableNext}>
        <S.ArrowRightIcon />
      </S.NavButton>
    </S.NavButtons>
  );
}

const INACTIVE_CARD_WIDTHS = {
  desktopLarge: 340, // ≥1260px
  desktop: 340, // 1024px–1259px
  tablet: 300, // 768px–1023px
} as const;

interface ReviewSectionProps {
  reviews: SoptCommentType[];
}

function ReviewSection({ reviews }: ReviewSectionProps, ref: Ref<HTMLDivElement>) {
  const [activeIdx, setActiveIdx] = useState(0);
  const controls = useAnimationControls();
  const commentLength = reviews.length;
  const activeComment = reviews[activeIdx];

  const isMobile = useMediaQuery({ maxWidth: breakpoints.tablet - 1 });
  const isTablet = useMediaQuery({
    minWidth: breakpoints.tablet,
    maxWidth: breakpoints.desktop - 1,
  });
  const isDesktop = useMediaQuery({
    minWidth: breakpoints.desktop,
    maxWidth: breakpoints.desktopLarge - 1,
  });

  const inactiveCardWidth = isDesktop
    ? INACTIVE_CARD_WIDTHS.desktop
    : isTablet
    ? INACTIVE_CARD_WIDTHS.tablet
    : INACTIVE_CARD_WIDTHS.desktopLarge;

  const changeActiveIdx = (idx: number) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
    controls.start({
      opacity: [0, 1, 1],
      y: [0, -12, 0],
      rotateX: [45, -15, 0],
    });
  };

  const handlePrev = () => activeIdx > 0 && changeActiveIdx(activeIdx - 1);
  const handleNext = () => activeIdx < commentLength - 1 && changeActiveIdx(activeIdx + 1);

  const translateX = -(activeIdx * (inactiveCardWidth + CARD_GAP));

  if (!activeComment) return null;

  return (
    <S.Wrapper id="review" ref={ref}>
      <S.Summary animate={controls} color={activeComment.color}>
        {activeComment.summary}
      </S.Summary>

      <S.CardsWrapper>
        {isMobile ? (
          <ReviewCard
            isActive
            color={activeComment.color}
            comment={activeComment.comment}
            commenter={activeComment.commenter}
          />
        ) : (
          <S.CardList
            animate={{ x: translateX }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
          >
            {reviews.map((comment, idx) => (
              <ReviewCard
                key={idx}
                isActive={activeIdx === idx}
                color={comment.color}
                comment={comment.comment}
                commenter={comment.commenter}
                onClick={() => changeActiveIdx(idx)}
              />
            ))}
          </S.CardList>
        )}
      </S.CardsWrapper>
      <NavButtons
        onPrev={handlePrev}
        onNext={handleNext}
        disablePrev={activeIdx === 0}
        disableNext={activeIdx === commentLength - 1}
      />
    </S.Wrapper>
  );
}

export default forwardRef(ReviewSection);
