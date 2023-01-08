import { Footer, Header, Layout } from '@src/components';
import {
  ActivityDescription,
  BannerImage,
  DetailedInformation,
  PartDescription,
  SoptHistory,
} from '@src/views/MainPage/components';
import styles from './main-page.module.scss';

function CoporatePartner() {
  return <section>Partner</section>;
}

function CorporateLinkedActivities() {
  return <section>Corporate Linked Activities</section>;
}

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
