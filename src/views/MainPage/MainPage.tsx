import Head from 'next/head';
import { Footer, Header, Layout } from '@src/components';
import { BannerImage } from '@src/views/MainPage/components';

function History() {
  return <section>History</section>;
}

function PartDescription() {
  return <section>Part Description</section>;
}

function ActivityDescription() {
  return <section>Activity Description</section>;
}

function DetailedInformation() {
  return <section>Information Cards</section>;
}

function CoporatePartner() {
  return <section>Partner</section>;
}

function CorporateLinkedActivities() {
  return <section>Corporate Linked Activities</section>;
}

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
        <BannerImage />
        <History />
        <PartDescription />
        <ActivityDescription />
        <DetailedInformation />
        <CoporatePartner />
        <CorporateLinkedActivities />
        <Footer />
      </Layout>
    </>
  );
}

export default MainPage;
