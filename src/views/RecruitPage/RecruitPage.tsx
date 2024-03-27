import styled from '@emotion/styled';
import { lazy } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import useCheckTime from '../../hooks/useCheckTime';
import ApplySection from './components/ApplySection';
import ChapterInfo from './components/ChapterInfo';
import NotificationSection from './components/NotificationSection';
import RecruiteeInfo from './components/RecruteeInfo';
import Schedule from './components/Schedule';

const FaqInfo = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const ActivityReview = lazy(() => import('./components/ActivityReview'));
const BottomLogo = lazy(() => import('./components/BottomLogo'));

function Recruit() {
  const isValid = useCheckTime();

  return (
    <PageLayout showScrollTopButton>
      <Root>
        {isValid ? <ApplySection /> : <NotificationSection />}
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
  gap: 180rem;

  width: 1200rem;
  padding: 100rem 0;

  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    width: 700rem;
    gap: 120rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    width: 360rem;
    gap: 80rem;
  }
`;

export default Recruit;
