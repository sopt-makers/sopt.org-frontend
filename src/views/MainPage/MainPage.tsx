import { Footer, Header, Layout, ScrollToTopButton } from '@src/components';
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
    <>
      <Layout>
        <Header />
        {!isMobile && <ScrollToTopButton />}
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
        <Footer />
      </Layout>
    </>
  );
}

export default MainPage;
