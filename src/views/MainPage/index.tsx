import { useEffect } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import AboutSOPTSection from '@src/views/MainPage/components/AboutSOPTSection';
import ExperienceSection from '@src/views/MainPage/components/ExperienceSection';
import FAQSection from '@src/views/MainPage/components/FAQSection';
import PartnersSection from '@src/views/MainPage/components/PartnersSection';
import RecruitMessage from '@src/views/MainPage/components/RecruitMessage';
import ReviewsSection from '@src/views/MainPage/components/ReviewsSection';
import TopBanner from '@src/views/MainPage/components/TopBanner';
import { useHomepage } from '@src/views/MainPage/hooks/useHomepage';
import usePostVisitor from '@src/views/MainPage/hooks/usePostVisitor';
import { checkIsTimeInRange } from '../../lib/utils/date';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSecion';
import RecordsSection from './components/RecordsSection';

function MainPage() {
  const { data: adminData } = useHomepage();

  const obSchedule = adminData?.recruitSchedule?.find((item) => item.type === 'OB')?.schedule;
  const ybSchedule = adminData?.recruitSchedule?.find((item) => item.type === 'YB')?.schedule;

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

  let ctaText = '';
  if (isOBRecruiting) ctaText = 'OB 지원하기';
  else if (isYBRecruiting) ctaText = 'YB 지원하기';

  const postVisiter = usePostVisitor();

  useEffect(() => {
    if (!isRecruiting) return;
    postVisiter();
  }, [isRecruiting, postVisiter]);

  return (
    <PageLayout>
      {adminData && isRecruiting && (
        <TopBanner
          mainColor={'#' + adminData.brandingColor.main}
          targetTime={
            isYBRecruiting
              ? ybSchedule?.applicationEndTime ?? ''
              : obSchedule?.applicationEndTime ?? ''
          }
          generation={adminData.generation ?? 0}
        />
      )}
      <HeroSection ctaText={ctaText} />

      {adminData && (
        <>
          <RecordsSection
            activitiesRecords={adminData.activitiesRecords}
            generation={adminData.generation}
            brandingColor={adminData.brandingColor.main}
          />
          <ProjectSection brandingColor={adminData.brandingColor.main} />
          <ExperienceSection
            coreValues={adminData.coreValue}
            mainColor={'#' + adminData.brandingColor.main}
          />
          <AboutSOPTSection
            partIntroduction={adminData.partIntroduction}
            latestNews={adminData.latestNews}
            mainColor={'#' + adminData.brandingColor.main}
            textColor={adminData.brandingColor.textColor}
            reviews={adminData.reviews}
          />
          <ReviewsSection reviews={adminData.reviews} />
          <FAQSection faq={adminData.faq ?? []} />
          <PartnersSection mainColor={'#' + adminData.brandingColor.main} />
          <RecruitMessage
            generation={adminData.generation ?? 0}
            mainColor={'#' + adminData.brandingColor.main}
            textColor={adminData.brandingColor.textColor}
            ctaText={ctaText}
            isRecruiting={isRecruiting}
            recruitEndTime={
              isYBRecruiting ? ybSchedule?.applicationEndTime : obSchedule?.applicationEndTime
            }
            isRecruitEnd={isRecruitEnd}
          />
        </>
      )}
    </PageLayout>
  );
}

export default MainPage;
