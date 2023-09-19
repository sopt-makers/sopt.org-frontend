import { useEffect, useState } from 'react';

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

function useAmplitude() {
  const [amplitude, setAmplitude] = useState<typeof import('@amplitude/analytics-browser')>();

  useEffect(() => {
    const initAmplitude = async () => {
      if (AMPLITUDE_API_KEY) {
        const amplitudeModule = await import('@amplitude/analytics-browser');
        setAmplitude(amplitudeModule);

        const pageName = window.location.pathname.slice(1) || 'main';
        amplitudeModule.init(AMPLITUDE_API_KEY, undefined, {
          logLevel: amplitudeModule.Types.LogLevel.Warn,
          defaultTracking: { pageViews: { eventType: `view_${pageName}` } },
        });
      }
    };
    initAmplitude();
  }, []);

  const trackEvent = (key: string, props?: Record<string, string>) => {
    if (AMPLITUDE_API_KEY && amplitude) {
      amplitude.track(key, { event_properties: props });
    }
  };

  return { trackEvent };
}

export default useAmplitude;
