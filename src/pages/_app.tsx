import * as amplitude from '@amplitude/analytics-browser';
import isValidProp from '@emotion/is-prop-valid';
import { MotionConfig } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import SEO from '@src/components/common/SEO';
import GoogleTagManagerNoscript from '@src/components/googleTagManager/Noscript';
import GoogleTagManagerScript from '@src/components/googleTagManager/Script';
import * as gtm from '@src/components/googleTagManager/gtm';
import { AMPLITUDE_API_KEY } from '@src/lib/constants/client';
import { global } from '@src/lib/styles/global';
import { pageViewTrackingEnrichment } from '@src/lib/utils/pageViewTrackingEnrichment';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

amplitude.add(pageViewTrackingEnrichment());

function MyApp({ Component, pageProps }: AppProps) {
  const [isAmplitudeInitialized, setIsAmplitudeInitialized] = useState(false);
  useEffect(() => {
    if (!isAmplitudeInitialized) {
      amplitude.init(AMPLITUDE_API_KEY, {
        logLevel: amplitude.Types.LogLevel.Warn,
        defaultTracking: true,
      });
      setIsAmplitudeInitialized(true);
    }
  }, [isAmplitudeInitialized]);

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
        <title>SOPT</title>
        <meta
          name="description"
          content="SOPT는 IT와 벤처 창업에 뜻이 있는 대학생들이 모인 국내 최대 규모의 대학생 연합 IT 벤처 창업 동아리입니다."
        />
        <meta name="title" content="SOPT" />
        <meta name="keyword" content="IT, 창업, 개발, 대학생, 동아리" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="apple-mobile-web-app-title" content="SOPT" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

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
      </Head>
      <SEO />
      <GoogleTagManagerScript />
      <Global styles={global} />
      <QueryClientProvider client={queryClient}>
        <MotionConfig isValidProp={isValidProp}>
          <Component {...pageProps} />
        </MotionConfig>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <GoogleTagManagerNoscript />
    </>
  );
}

export default MyApp;
