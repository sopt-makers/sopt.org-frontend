import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { Suspense, createContext } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import { remoteAdminAPI } from '@src/lib/api/remote/admin';
import { GetRecruitpageResponse } from '@src/lib/types/admin';
import { checkIsTimeInRange } from '@src/lib/utils/date';
import ApplySection from './components/ApplySection';
import ChapterInfo from './components/ChapterInfo';
import Contact from './components/Contact';
import FaqInfo from './components/FAQ';
import NotificationSection from './components/NotificationSection';
import RecruiteeInfo from './components/RecruteeInfo';
import Schedule from './components/Schedule';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

// const FaqInfo = lazy(() => import('./components/FAQ'));
// const Contact = lazy(() => import('./components/Contact'));
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
            <ApplySection
              headerImg={adminData.recruitHeaderImage}
              generation={adminData.generation}
            />
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
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    width: 700px;
    gap: 120px;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    width: 360px;
    gap: 80px;
  }
`;

export default Recruit;
