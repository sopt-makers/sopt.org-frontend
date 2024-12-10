import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { Suspense, lazy } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import { mockAdminAPI } from '@src/lib/api/mock/admin';
import { remoteAdminAPI } from '@src/lib/api/remote/admin';
import { GetRecruitpageResponse } from '@src/lib/types/admin';
import { checkIsTimeInRange } from '@src/lib/utils/date';
import ApplySection from './components/ApplySection';
import ChapterInfo from './components/ChapterInfo';
// import FaqInfo from './components/FAQ';
import NotificationSection from './components/NotificationSection';
import RecruiteeInfo from './components/RecruteeInfo';
import Schedule from './components/Schedule';

const FaqInfo = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const ActivityReview = lazy(() => import('./components/ActivityReview'));
const BottomLogo = lazy(() => import('./components/BottomLogo'));

function Recruit() {
  const isValid = checkIsTimeInRange('2024-09-08 10:00:00', '2024-09-13 18:00:00'); // 모집 여부

  const { data } = useQuery<GetRecruitpageResponse>({
    queryKey: ['homepage/recruit'],
    queryFn: mockAdminAPI.getRecruitpage,
  });

  return (
    <PageLayout showScrollTopButton>
      <Root>
        {isValid ? <ApplySection /> : <NotificationSection />}
        <ContentWrapper>
          <RecruiteeInfo />
          {data && (
            <>
              <ChapterInfo info={data.recruitPartCurriculum} />
              <Schedule info={data.recruitSchedule} />
              <Suspense>
                <FaqInfo info={data.recruitQuestion} />
              </Suspense>
            </>
          )}

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
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    width: 700px;
    gap: 120px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    width: 360px;
    gap: 80px;
  }
`;

export default Recruit;
