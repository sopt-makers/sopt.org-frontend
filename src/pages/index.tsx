import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer, Header } from '@src/components';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SOPT</title>
        <meta name="description" content="sopt입니다.." />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styled.Main>
        <Header />
        <Footer />
      </Styled.Main>
    </div>
  );
};

export default Home;

const Styled = {
  Main: styled.main`
    @media (min-width: 1280px) {
      height: 100vh;
      scroll-snap-type: y mandatory;
      overflow-y: scroll;
    }
  `,
};
