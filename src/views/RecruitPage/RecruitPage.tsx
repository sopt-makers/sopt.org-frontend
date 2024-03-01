import styled from '@emotion/styled';
import { lazy } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import ChapterInfo from './components/ChapterInfo';
import NotificationSection from './components/NotificationSection';
import RecruiteeInfo from './components/RecruteeInfo';
import Schedule from './components/Schedule';
import ApplySection from './components/ApplySection';
import useCheckTime from '../MainPage/hooks/useCheckTime';

const FaqInfo = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const ActivityReview = lazy(() => import('./components/ActivityReview'));
const BottomLogo = lazy(() => import('./components/BottomLogo'));

function Recruit() {
  const START_DATE = new Date('2024-03-02:01:00');
  const isStarted = useCheckTime(START_DATE); 

  return (
    <PageLayout showScrollTopButton>
      <Root>
        {isStarted ? <ApplySection/> : <NotificationSection />}
        <ContentWrapper>
          <RecruiteeInfo />
          <ChapterInfo />
          <Schedule />
          <FaqInfo />
          <Contact />
          <ActivityReview />
        </ContentWrapper>
        <BottomLogo />
      </Root>
    </PageLayout>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;

  background-color: #101111;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 180px;

  width: 1200px;
  padding: 100px 0;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    width: 700px;
    gap: 120px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360px;
    gap: 80px;
  }
`;

export default Recruit;
