import { Types } from '@amplitude/analytics-browser';

export const pageViewTrackingEnrichment = (): Types.EnrichmentPlugin => {
  return {
    name: 'page-view-tracking-enrichment',
    type: 'enrichment',
    setup: async () => undefined,
    execute: async (event) => {
      if (event.event_type !== '[Amplitude] Page Viewed') {
        return event;
      }
      const pageName = window.location.pathname.slice(1) || 'main';
      event.event_type = `pageview_${pageName}`;
      return event;
    },
  };
};
