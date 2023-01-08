import styled from '@emotion/styled';
import { Footer, Header, Layout } from '@src/components';
import {
  ActivityDescription,
  BannerImage,
  DetailedInformation,
  PartDescription,
  SoptHistory,
} from '@src/views/MainPage/components';

function CoporatePartner() {
  return <section>Partner</section>;
}

function CorporateLinkedActivities() {
  return <section>Corporate Linked Activities</section>;
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

function MainPage() {
  return (
    <>
      <Layout>
        <Header />
        <ContentContainer>
          <BannerImage />
          <SoptHistory />
          <PartDescription />
          <ActivityDescription />
          <DetailedInformation />
          <CoporatePartner />
          <CorporateLinkedActivities />
        </ContentContainer>
        {/* <Footer /> */}
      </Layout>
    </>
  );
}

export default MainPage;
