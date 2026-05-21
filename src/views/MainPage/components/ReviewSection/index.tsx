import { useAnimationControls } from 'framer-motion';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SOPT_COMMENT_LIST } from '@src/lib/constants/main';
import { breakpoints } from '@src/lib/styles/breakpoints';
import ReviewCard from './Card';
import * as S from './style';

const CARD_GAP = 24;

const INACTIVE_CARD_WIDTHS = {
  desktopLarge: 340, // ≥1260px
  desktop: 340, // 1024px–1259px
  tablet: 300, // 768px–1023px
} as const;

export default function ReviewSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const controls = useAnimationControls();
  const commentLength = SOPT_COMMENT_LIST.length;
  const activeComment = SOPT_COMMENT_LIST[activeIdx];

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

  return (
    <S.Wrapper>
      <S.Summary animate={controls} color={activeComment.color}>
        {activeComment.summary}
      </S.Summary>

      {isMobile ? (
        <>
          <S.CardsWrapper>
            <ReviewCard
              isActive
              color={activeComment.color}
              comment={activeComment.comment}
              commenter={activeComment.commenter}
            />
          </S.CardsWrapper>

          <S.NavButtons>
            <S.NavButton onClick={handlePrev} aria-label="이전" disabled={activeIdx === 0}>
              <S.ArrowLeftIcon />
            </S.NavButton>
            <S.NavButton
              onClick={handleNext}
              aria-label="다음"
              disabled={activeIdx === commentLength - 1}
            >
              <S.ArrowRightIcon />
            </S.NavButton>
          </S.NavButtons>
        </>
      ) : (
        <>
          <S.CardsWrapper>
            <S.CardList
              animate={{ x: translateX }}
              transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            >
              {SOPT_COMMENT_LIST.map((comment, idx) => (
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
          </S.CardsWrapper>
          <S.NavButtons>
            <S.NavButton onClick={handlePrev} aria-label="이전" disabled={activeIdx === 0}>
              <S.ArrowLeftIcon />
            </S.NavButton>
            <S.NavButton
              onClick={handleNext}
              aria-label="다음"
              disabled={activeIdx === commentLength - 1}
            >
              <S.ArrowRightIcon />
            </S.NavButton>
          </S.NavButtons>
        </>
      )}
    </S.Wrapper>
  );
}
