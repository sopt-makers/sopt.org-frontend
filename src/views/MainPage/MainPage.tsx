import Head from 'next/head';
import { Footer, Header, Layout } from '@src/components';

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
        <Footer />
      </Layout>
    </>
  );
}

export default MainPage;
