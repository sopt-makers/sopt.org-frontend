import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Global, ThemeProvider } from '@emotion/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import GoogleTagManagerNoscript from '@src/components/googleTagManager/Noscript';
import GoogleTagManagerScript from '@src/components/googleTagManager/Script';
import * as gtm from '@src/components/googleTagManager/gtm';
import { global } from '@src/styles/global';
import theme from '@src/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', gtm.pageview);
    return () => {
      router.events.off('routeChangeComplete', gtm.pageview);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0,  maximum-scale=1"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="title" content="SOPT" />
        <meta property="og:title" content="SOPT" />
        <meta name="twitter:title" content="SOPT" />
        <meta
          name="description"
          content="SOPT는 IT와 벤처창업에 뜻이 있는 대학생들이 모인 국내 최대 규모의 대학생 연합 IT벤처창업 동아리입니다."
        />
        <meta
          property="og:description"
          content="SOPT는 IT와 벤처창업에 뜻이 있는 대학생들이 모인 국내 최대 규모의 대학생 연합 IT벤처창업 동아리입니다."
        />
        <meta
          name="twitter:description"
          content="SOPT는 IT와 벤처창업에 뜻이 있는 대학생들이 모인 국내 최대 규모의 대학생 연합 IT벤처창업 동아리입니다."
        />

        <meta
          property="og:image"
          content="https://sopt-makers.s3.ap-northeast-2.amazonaws.com/mainpage/seo/sopt_discord_seo.png"
        />
        <meta property="og:url" content="https://sopt.org/" />

        <meta property="twitter:card" content="website" />
        <meta property="twitter:site" content="https://sopt.org/" />

        <meta
          name="twitter:image"
          content="https://sopt-makers.s3.ap-northeast-2.amazonaws.com/mainpage/seo/sopt_twitter_seo.png"
        />
      </Head>
      <GoogleTagManagerScript />
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
      <GoogleTagManagerNoscript />
    </>
  );
}

export default MyApp;
