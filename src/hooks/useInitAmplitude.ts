import * as amplitude from '@amplitude/analytics-browser';
import { useEffect } from 'react';

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

function useAmplitudeInit() {
  useEffect(() => {
    const initAmplitude = () => {
      if (AMPLITUDE_API_KEY) {
        const pageName = window.location.pathname.slice(1) || 'main';
        amplitude.init(AMPLITUDE_API_KEY, undefined, {
          logLevel: amplitude.Types.LogLevel.Warn,
          defaultTracking: { pageViews: { eventType: `view_${pageName}` } },
        });
      }
    };
    initAmplitude();
  }, []);

  const trackEvent = (key: string, props: amplitude.Types.BaseEvent['event_properties']) => {
    if (AMPLITUDE_API_KEY) {
      amplitude.track(key, props);
    }
  };

  return { trackEvent };
}

export default useAmplitudeInit;
