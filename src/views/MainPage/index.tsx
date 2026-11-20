import { useEffect, useRef } from 'react';
import PageLayout from '@src/components/common/PageLayout';
import useRecruitmentSchedule from '@src/hooks/useRecruitmentSchedule';
import { getNotificationRecruitment } from '@src/lib/utils/recruitment';
import ExperienceSection from '@src/views/MainPage/components/ExperienceSection';
import FAQSection from '@src/views/MainPage/components/FAQSection';
import PartnersSection from '@src/views/MainPage/components/PartnersSection';
import RecruitMessage from '@src/views/MainPage/components/RecruitMessage';
import ReviewsSection from '@src/views/MainPage/components/ReviewsSection';
import TopBanner from '@src/views/MainPage/components/TopBanner';
import { useHomepage } from '@src/views/MainPage/hooks/useHomepage';
import usePostVisitor from '@src/views/MainPage/hooks/usePostVisitor';
import AboutPartSection from './components/AboutPartSection';
import ActivitiesSection from './components/ActivitiesSection';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import RecentNews from './components/RecentNews';
import RecordsSection from './components/RecordsSection';
import FloatingRecruitCTA from './components/RecruitMessage/FloatingRecruitCTA';
import * as S from './style';

function MainPage() {
  const { data: adminData } = useHomepage();
  const recordsSectionRef = useRef<HTMLElement>(null);
  const recruitSectionRef = useRef<HTMLElement>(null);

  const { activeRecruitment, ybRecruitment, now } = useRecruitmentSchedule(
    adminData?.recruitSchedule,
  );
  const isRecruiting = Boolean(activeRecruitment);
  const recruitEndTime = activeRecruitment?.schedule.applicationEndTime;
  const heroCtaText = activeRecruitment ? `${activeRecruitment.type} 지원하기` : '';
  const notificationRecruitment =
    adminData && getNotificationRecruitment(adminData.generation, now, ybRecruitment?.schedule);

  const postVisitor = usePostVisitor();

  useEffect(
    function recordRecruitmentVisit() {
      if (isRecruiting) postVisitor();
    },
    [isRecruiting, postVisitor],
  );

  return (
    <PageLayout>
      {adminData && isRecruiting && (
        <TopBanner
          mainColor={'#' + adminData.brandingColor.main}
          targetTime={recruitEndTime}
          generation={adminData.generation ?? 0}
        />
      )}
      <S.Main>
        <HeroSection ctaText={heroCtaText} />

        {adminData && notificationRecruitment && (
          <S.Content>
            <RecordsSection
              sectionRef={recordsSectionRef}
              activitiesRecords={adminData.activitiesRecords}
              generation={adminData.generation}
              brandingColor={adminData.brandingColor.main}
            />
            <ExperienceSection
              coreValues={adminData.coreValue}
              mainColor={'#' + adminData.brandingColor.main}
            />
            <ProjectSection brandingColor={adminData.brandingColor.main} />
            <ActivitiesSection mainColor={'#' + adminData.brandingColor.main} />
            <AboutPartSection
              partIntroduction={adminData.partIntroduction}
              mainColor={'#' + adminData.brandingColor.main}
            />
            <ReviewsSection
              activityReviews={adminData.reviews.filter((review) => review.type === 'ACTIVITY')}
              recruitingReviews={adminData.reviews.filter((review) => review.type === 'RECRUITING')}
            />
            <FAQSection faq={adminData.faq ?? []} />
            <RecentNews latestNews={adminData.latestNews} />
            <PartnersSection mainColor={'#' + adminData.brandingColor.main} />
            {isRecruiting && (
              <FloatingRecruitCTA
                recordsRef={recordsSectionRef}
                recruitSectionRef={recruitSectionRef}
                mainColor={'#' + adminData.brandingColor.main}
                textColor={adminData.brandingColor.textColor}
              />
            )}
            <RecruitMessage
              sectionRef={recruitSectionRef}
              generation={adminData.generation ?? 0}
              mainColor={'#' + adminData.brandingColor.main}
              textColor={adminData.brandingColor.textColor}
              isRecruiting={isRecruiting}
              recruitEndTime={recruitEndTime}
              notificationGeneration={notificationRecruitment.generation}
              notificationMonth={notificationRecruitment.month}
            />
          </S.Content>
        )}
      </S.Main>
    </PageLayout>
  );
}

export default MainPage;
