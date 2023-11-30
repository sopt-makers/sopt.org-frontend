import { useEffect, useRef } from 'react';
import useInView from '@src/hooks/useInView';
import { INTRO_CONTENT_LIST } from '@src/lib/constants/main';
import IntroContent from '@src/views/MainPage/components/IntroSection/IntroContent';
import * as S from './style';

const PAGE_LENGTH = 3;

export default function IntroCardList() {
  const { isInView, ref: outerDivRef } = useInView();
  const currentPage = useRef(0);
  const canScroll = useRef(true);

  const scrollDown = () => {
    if (!outerDivRef.current || !isInView) return;
    const wrapperTop = outerDivRef.current.offsetTop;
    const wrapperHeight = outerDivRef.current.getBoundingClientRect().height;
    const pageHeight = (wrapperHeight - 240) / 3;
    let positionY = wrapperTop + pageHeight * (currentPage.current + 1);
    if (currentPage.current === PAGE_LENGTH - 1) {
      positionY += 240;
    } else if (currentPage.current !== -1) {
      positionY += 120;
    }
    window.scrollTo({ top: positionY, left: 0, behavior: 'smooth' });
    canScroll.current = false;
    setTimeout(() => {
      canScroll.current = true;
    }, 2000);
    if (currentPage.current < PAGE_LENGTH - 1) currentPage.current++;
  };

  const scrollUp = () => {
    if (!outerDivRef.current || !isInView) return;
    const wrapperTop = outerDivRef.current.offsetTop;
    const wrapperHeight = outerDivRef.current.getBoundingClientRect().height;
    const pageHeight = (wrapperHeight - 240) / 3;
    let positionY = wrapperTop + pageHeight * (currentPage.current - 1);
    if (currentPage.current !== 0) {
      positionY += 120;
    }
    window.scrollTo({ top: positionY, left: 0, behavior: 'smooth' });
    canScroll.current = false;
    setTimeout(() => {
      canScroll.current = true;
    }, 2000);
    if (currentPage.current > 0) currentPage.current--;
  };

  const wheelHandler = (e: WheelEvent) => {
    e.preventDefault();
    if (!canScroll.current) return;
    const { deltaY } = e;
    if (deltaY > 0 && outerDivRef.current) {
      scrollDown();
    } else if (deltaY < 0 && outerDivRef.current) {
      scrollUp();
    }
  };

  const scrollHandler = (e: Event) => {
    e.preventDefault();
  };

  useEffect(() => {
    const outer = outerDivRef.current;
    if (!outer) return;

    outer.addEventListener('wheel', wheelHandler);
    outer.addEventListener('scroll', scrollHandler);
    // outer.addEventListener('touchmove', scrollHandler);
    // outer.addEventListener('touchstart', onTouchDown);
    // outer.addEventListener('touchend', onTouchUp);
    return () => {
      outer.removeEventListener('wheel', wheelHandler);
      outer.removeEventListener('scroll', scrollHandler);
      // outer.removeEventListener('touchmove', scrollHandler);
      // outer.removeEventListener('touchstart', onTouchDown);
      // outer.removeEventListener('touchend', onTouchUp);
    };
  }, [isInView, outerDivRef]);

  return (
    <S.IntroSection ref={outerDivRef}>
      <S.Header />
      <div style={{ overflow: 'hidden' }}>
        {INTRO_CONTENT_LIST.map((content) => (
          <IntroContent key={content.id} content={content} />
        ))}
      </div>
      <S.Footer />
    </S.IntroSection>
  );
}
