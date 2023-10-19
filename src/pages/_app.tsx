import * as amplitude from '@amplitude/analytics-browser';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Global } from '@emotion/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import HTMLHead from '@src/components/common/HTMLHead';
import GoogleTagManagerNoscript from '@src/components/googleTagManager/Noscript';
import GoogleTagManagerScript from '@src/components/googleTagManager/Script';
import * as gtm from '@src/components/googleTagManager/gtm';
import { AMPLITUDE_API_KEY } from '@src/lib/constants/client';
import { global } from '@src/lib/styles/global';
import { pageViewTrackingEnrichment } from '@src/lib/utils/pageViewTrackingEnrichment';

amplitude.add(pageViewTrackingEnrichment());
amplitude.init(AMPLITUDE_API_KEY, {
  logLevel: amplitude.Types.LogLevel.Warn,
  defaultTracking: true,
});

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
      <HTMLHead />
      <GoogleTagManagerScript />
      <Global styles={global} />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <GoogleTagManagerNoscript />
    </>
  );
}

export default MyApp;
