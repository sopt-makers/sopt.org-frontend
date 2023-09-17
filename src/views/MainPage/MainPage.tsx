import PageLayout from '@src/components/common/PageLayout';
import { useIsMobile } from '@src/hooks/useDevice';
import {
  ActivityDescription,
  ActivityReview,
  BannerImage,
  DetailedInformation,
  PartDescription,
  RecruitFloatingBanner,
  SoptHistory,
} from '@src/views/MainPage/components';
import styles from './main-page.module.scss';

function MainPage() {
  const isMobile = useIsMobile();

  return (
    <PageLayout showScrollTopButton={!isMobile}>
      {false && <RecruitFloatingBanner />}
      <BannerImage />
      <div className={styles.container}>
        <div className={styles.content}>
          <SoptHistory />
          <PartDescription />
          <ActivityDescription />
          <ActivityReview />
          <DetailedInformation />
        </div>
      </div>
    </PageLayout>
  );
}

export default MainPage;
