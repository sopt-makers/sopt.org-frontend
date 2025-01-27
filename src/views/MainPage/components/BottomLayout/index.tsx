import { motion, useScroll, useTransform } from 'framer-motion';
import { RefObject, useRef } from 'react';
import useInView from '@src/hooks/useInView';
import { LatestNewsType, PartIntroType } from '@src/lib/types/admin';
import ActivitySection from '@src/views/MainPage/components/ActivitySection';
import RecentNews from '@src/views/MainPage/components/RecentNews';
import RecruitMessage from '@src/views/MainPage/components/RecruitMessage';
import * as S from './style';

const MenuList = [
  { name: 'Activity', id: 'activity' },
  { name: 'Part', id: 'part' },
  { name: 'Team', id: 'team' },
  { name: 'Review', id: 'review' },
];

export type RefHandler = {
  viewRef: RefObject<HTMLDivElement>;
  targetRef: RefObject<HTMLDivElement>;
};

interface BottomLayoutProps {
  generation: number;
  partIntroduction: PartIntroType[];
  latestNews: LatestNewsType[];
  mainColor: string;
  highColor: string;
  ctaText: string;
}
function BottomLayout({
  generation,
  partIntroduction,
  latestNews,
  mainColor,
  highColor,
  ctaText,
}: BottomLayoutProps) {
  const activity = useInView();
  const part = useInView();
  const team = useInView();
  const review = useInView();

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start center', 'start'] });

  const viewList = [activity.isInView, part.isInView, team.isInView, review.isInView];
  const minIndex = viewList.findIndex((value) => value === true);

  const wrapperBackground = useTransform(scrollYProgress, [0, 0.9], ['#fff', '#000']);
  const layoutBackground = useTransform(scrollYProgress, [0, 0.9], ['#f6f8fc', '#000']);
  const menuBackground = useTransform(scrollYProgress, [0, 1], ['#fbfcfe', '#fbfcfef']);
  const menuColor = useTransform(scrollYProgress, [0, 1], ['#a8acbae0', '#747885']);

  return (
    <>
      <S.Wrapper id="activity" style={{ backgroundColor: wrapperBackground }}>
        <S.FloatingMenu>
          {MenuList.map(({ name, id }, index) => (
            <S.MenuWrapper
              key={id}
              isInView={minIndex === index}
              style={{ backgroundColor: menuBackground, color: menuColor }}
            >
              <S.Menu href={`#${id}`} scroll={false}>
                {name}
              </S.Menu>
            </S.MenuWrapper>
          ))}
        </S.FloatingMenu>
        <S.Layout style={{ backgroundColor: layoutBackground }}>
          <ActivitySection
            activityInView={activity}
            partInView={part}
            teamInView={team}
            reviewInView={review}
            partIntroduction={partIntroduction}
          />
        </S.Layout>
      </S.Wrapper>
      <div ref={targetRef} />
      <motion.div style={{ backgroundColor: wrapperBackground }}>
        <RecentNews latestNews={latestNews} />
        <RecruitMessage
          generation={generation}
          mainColor={mainColor}
          highColor={highColor}
          ctaText={ctaText}
        />
      </motion.div>
    </>
  );
}

export default BottomLayout;
