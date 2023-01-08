import styled from '@emotion/styled';
import Head from 'next/head';
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
      <Head>
        <title>SOPT</title>
        <meta name="description" content="sopt입니다.." />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        <Footer />
      </Layout>
    </>
  );
}

export default MainPage;
