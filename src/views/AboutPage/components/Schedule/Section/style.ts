import styled from '@emotion/styled';
import { media } from '@src/lib/styles/breakpoints';

export const ScheduleSection = styled.section({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
  marginTop: '232px',
  width: '100%',

  [media.desktop]: {
    gap: '48px',
    marginTop: '232px',
  },

  [media.tablet]: {
    gap: '19px',
    marginTop: '100px',
  },

  [media.mobile]: {
    gap: '24px',
    marginTop: '100px',
  },
});
