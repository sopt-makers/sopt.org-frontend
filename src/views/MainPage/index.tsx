import { useEffect, useMemo } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import AboutSOPTSection from '@src/views/MainPage/components/AboutSOPTSection';
import IntroSection from '@src/views/MainPage/components/IntroSection';
import TopBanner from '@src/views/MainPage/components/TopBanner';
import { useHomepage } from '@src/views/MainPage/hooks/useHomepage';
import usePostVisitor from '@src/views/MainPage/hooks/usePostVisitor';
import { checkIsTimeInRange } from '../../lib/utils/date';
import Banner from './components/Banner';
import Introduce from './components/Introduce';

function MainPage() {
  const { data: adminData } = useHomepage();

  const obSchedule = adminData?.recruitSchedule?.[0]?.schedule;
  const ybSchedule = adminData?.recruitSchedule?.[1]?.schedule;

  const isOBRecruiting = checkIsTimeInRange(
    obSchedule?.applicationStartTime ?? '',
    obSchedule?.applicationEndTime ?? '',
  );
  const isYBRecruiting = checkIsTimeInRange(
    ybSchedule?.applicationStartTime ?? '',
    ybSchedule?.applicationEndTime ?? '',
  );
  const isRecruiting = isOBRecruiting || isYBRecruiting;
  const isRecruitEnd = Date.now() > new Date(ybSchedule?.applicationEndTime ?? '').getTime();

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
              ? ybSchedule?.applicationEndTime ?? ''
              : obSchedule?.applicationEndTime ?? ''
          }
          generation={adminData.generation ?? 0}
        />
      )}
      <Banner
        homeHeaderImage={adminData.homeHeaderImage}
        mainColor={'#' + adminData.brandingColor.main}
        textColor={adminData.brandingColor.textColor}
        ctaText={ctaText}
      />
      <Introduce keyColor={'#' + adminData.brandingColor.main} />
      <IntroSection adminData={adminData} />
      <AboutSOPTSection
        generation={adminData.generation ?? 0}
        partIntroduction={adminData.partIntroduction}
        latestNews={adminData.latestNews}
        mainColor={'#' + adminData.brandingColor.main}
        textColor={adminData.brandingColor.textColor}
        ctaText={ctaText}
        isRecruitEnd={isRecruitEnd}
        reviews={adminData.reviews}
      />
    </PageLayout>
  );
}

export default MainPage;
