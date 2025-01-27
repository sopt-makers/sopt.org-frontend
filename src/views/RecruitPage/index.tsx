import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { Suspense, createContext, lazy } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import { remoteAdminAPI } from '@src/lib/api/remote/admin';
import { GetRecruitpageResponse } from '@src/lib/types/admin';
import { checkIsTimeInRange } from '@src/lib/utils/date';
import ActivityReview from './components/ActivityReview';
import ApplySection from './components/ApplySection';
import BottomLogo from './components/BottomLogo';
import ChapterInfo from './components/ChapterInfo';
import Contact from './components/Contact';
import FaqInfo from './components/FAQ';
import NotificationSection from './components/NotificationSection';
import RecruiteeInfo from './components/RecruteeInfo';
import Schedule from './components/Schedule';

// const FaqInfo = lazy(() => import('./components/FAQ'));
// const Contact = lazy(() => import('./components/Contact'));
// const ActivityReview = lazy(() => import('./components/ActivityReview'));
// const BottomLogo = lazy(() => import('./components/BottomLogo'));

export const BrandingColorContext = createContext({
  main: '',
  low: '',
  high: '',
  point: '',
});
function Recruit() {
  const { data: adminData } = useQuery<GetRecruitpageResponse>({
    queryKey: ['homepage/recruit'],
    queryFn: remoteAdminAPI.getRecruitpage,
  });

  const isOBRecruiting = checkIsTimeInRange(
    adminData?.recruitSchedule[0].schedule.applicationStartTime ?? '',
    adminData?.recruitSchedule[0].schedule.applicationEndTime ?? '',
  );
  const isYBRecruiting = checkIsTimeInRange(
    adminData?.recruitSchedule[1].schedule.applicationStartTime ?? '',
    adminData?.recruitSchedule[1].schedule.applicationEndTime ?? '',
  );
  const isRecruiting = isOBRecruiting || isYBRecruiting;

  if (!adminData) return;
  return (
    <PageLayout showScrollTopButton>
      <BrandingColorContext.Provider value={adminData.brandingColor}>
        <Root>
          {isRecruiting ? (
            <ApplySection headerImg={adminData.recruitHeaderImage} />
          ) : (
            <NotificationSection />
          )}
          <ContentWrapper>
            <RecruiteeInfo />
            <ChapterInfo info={adminData.recruitPartCurriculum} generation={adminData.generation} />
            <Schedule info={adminData.recruitSchedule[isOBRecruiting ? 0 : 1]} />
            <Suspense>
              <FaqInfo info={adminData.recruitQuestion} />
            </Suspense>
            <Contact />
            <ActivityReview />
          </ContentWrapper>
          {/* <BottomLogo /> */}
        </Root>
      </BrandingColorContext.Provider>
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
