import { Footer, Header, Layout } from '@src/components';
import {
  ActivityDescription,
  BannerImage,
  CoporatePartner,
  CorporateLinkedActivities,
  DetailedInformation,
  PartDescription,
  SoptHistory,
} from '@src/views/MainPage/components';
import styles from './main-page.module.scss';

function MainPage() {
  return (
    <>
      <Layout>
        <Header />
        <BannerImage />
        <div className={styles.container}>
          <SoptHistory />
          <PartDescription />
          <ActivityDescription />
          <DetailedInformation />
          <CoporatePartner />
          <CorporateLinkedActivities />
        </div>
        {/* <Footer /> */}
      </Layout>
    </>
  );
}

export default MainPage;
