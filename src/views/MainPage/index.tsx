import { useEffect, useMemo } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import { useHomepage } from '@src/views/MainPage/hooks/useHomepage';
import AboutSOPTSection from '@src/views/MainPage/components/AboutSOPTSection';
import IntroSection from '@src/views/MainPage/components/IntroSection';
import TopBanner from '@src/views/MainPage/components/TopBanner';
import usePostVisitor from '@src/views/MainPage/hooks/usePostVisitor';
import { checkIsTimeInRange } from '../../lib/utils/date';
import Banner from './components/Banner';
import Introduce from './components/Introduce';

function MainPage() {
  const { data: adminData } = useHomepage();

  const isOBRecruiting = checkIsTimeInRange(
    adminData?.recruitSchedule[0].schedule.applicationStartTime ?? '',
    adminData?.recruitSchedule[0].schedule.applicationEndTime ?? '',
  );
  const isYBRecruiting = checkIsTimeInRange(
    adminData?.recruitSchedule[1].schedule.applicationStartTime ?? '',
    adminData?.recruitSchedule[1].schedule.applicationEndTime ?? '',
  );
  const isRecruiting = isOBRecruiting || isYBRecruiting;
  const isRecruitEnd =
    Date.now() >
    new Date(adminData?.recruitSchedule[1].schedule.applicationEndTime ?? '').getTime();

  const ctaText = useMemo(() => {
    if (adminData?.generation === undefined) return '모집 알림 신청하기 ';
    if (isOBRecruiting) return `${adminData.generation}기 OB 지원하기 `;
    if (isYBRecruiting) return `${adminData.generation}기 YB 지원하기 `;
    return '모집 알림 신청하기 ';
  }, [isOBRecruiting, isYBRecruiting, adminData]);

  const postVisiter = usePostVisitor();

  useEffect(() => {
    if (!isRecruiting) return;
    postVisiter();
  }, [isRecruiting, postVisiter]);

  if (!adminData) return;
  return (
    <PageLayout>
      {isRecruiting && (
        <TopBanner
          targetTime={
            isYBRecruiting
              ? adminData.recruitSchedule[1].schedule.applicationEndTime
              : adminData.recruitSchedule[0].schedule.applicationEndTime
          }
          generation={adminData.generation ?? 0}
        />
      )}
      <Banner mainColor={'#' + adminData.brandingColor.main} ctaText={ctaText} />
      <Introduce keyColor={'#' + adminData.brandingColor.main} />
      <IntroSection adminData={adminData} />
      <AboutSOPTSection
        generation={adminData.generation ?? 0}
        partIntroduction={adminData.partIntroduction}
        latestNews={adminData.latestNews}
        mainColor={'#' + adminData.brandingColor.main}
        ctaText={ctaText}
        isRecruitEnd={isRecruitEnd}
      />
    </PageLayout>
  );
}

export default MainPage;
