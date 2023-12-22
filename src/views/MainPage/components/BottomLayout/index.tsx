import { useScroll, useTransform } from 'framer-motion';
import { RefObject, useRef } from 'react';
import useInView from '@src/hooks/useInView';
import ActivitySection from '@src/views/MainPage/components/ActivitySection';
import RecentNews from '@src/views/MainPage/components/RecentNews';
import RecruitMessage from '@src/views/MainPage/components/RecruitMessage';
import Comment from '../Comment';
import * as S from './style';

const MenuList = [
  { name: 'Value', id: 'value' },
  { name: 'Activity', id: 'activity' },
  { name: 'Review', id: 'review' },
  { name: 'Recent news', id: 'news' },
];

export type RefHandler = {
  viewRef: RefObject<HTMLDivElement>;
  targetRef: RefObject<HTMLDivElement>;
};

function BottomLayout() {
  const activity = useInView();
  const review = useInView();
  const news = useInView();

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start center', 'start'] });

  const viewList = [false, activity.isInView, review.isInView, news.isInView];
  const minIndex = viewList.findIndex((value) => value === true);

  const wrapperBackground = useTransform(
    scrollYProgress,
    [0, 0.76, 1],
    ['#FFF', '#090B12', '#090B12'],
  );
  const layoutBackground = useTransform(
    scrollYProgress,
    [0, 0.76, 1],
    ['#F6F8FC', '#0D111F', '#0D111F'],
  );
  const menuBackground = useTransform(scrollYProgress, [0, 1], ['#fbfcfe', '#fbfcfef']);
  const menuColor = useTransform(scrollYProgress, [0, 1], ['#a8acbae0', '#747885']);

  return (
    <S.Wrapper style={{ backgroundColor: wrapperBackground }}>
      <S.FloatingMenu>
        {MenuList.map(({ name, id }, index) => (
          <S.MenuWrapper
            key={id}
            isInView={minIndex === index}
            style={{ backgroundColor: menuBackground, color: menuColor }}
          >
            <S.Menu href={`#${id}`}>{name}</S.Menu>
          </S.MenuWrapper>
        ))}
      </S.FloatingMenu>
      <S.Layout style={{ backgroundColor: layoutBackground }}>
        <ActivitySection ref={activity.ref} />
        <div ref={targetRef} />
        <div id="review" ref={review.ref}>
          <Comment />
        </div>
        <div style={{ height: '5px' }} />
        <RecentNews ref={news.ref} />
        <RecruitMessage />
      </S.Layout>
    </S.Wrapper>
  );
}

export default BottomLayout;
