import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { media } from '@src/lib/styles/breakpoints';

export const ScheduleContent = styled.div`
  display: flex;
  gap: 48px;
  width: 100%;
  max-width: 1200px;

  ${media.desktop} {
    gap: 24px;
    max-width: 944px;
  }

  ${media.tablet} {
    gap: 24px;
    max-width: 688px;
  }

  ${media.mobile} {
    flex-direction: column;
    gap: 24px;
    max-width: 390px;
    padding: 0 20px;
  }
`;

export const ScheduleBox = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${colors.gray900};
  border-radius: 24px;
  padding: 56px 83px;

  ${media.desktop} {
    padding: 40px 44px;
  }

  ${media.tablet} {
    padding: 32px 30px;
  }

  ${media.mobile} {
    padding: 24px 20px;
  }
`;

export const ScheduleItem = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;

  ${media.desktop} {
    gap: 64px;
  }

  ${media.tablet} {
    gap: 32px;
  }

  ${media.mobile} {
    gap: 32px;
  }
`;

export const ScheduleDate = styled.span`
  flex-shrink: 0;
  min-width: 133px;
  color: ${colors.gray300};

  font-size: 24px;

  ${media.desktop} {
    min-width: 124px;
    font-size: 20px;
  }

  ${media.tablet} {
    min-width: 88px;
    font-size: 16px;
  }

  ${media.mobile} {
    min-width: 76px;
    font-size: 14px;
  }
`;

export const ScheduleName = styled.span`
  white-space: nowrap;
  color: ${colors.white};
  ${fontsObject.HEADING_4_24_B};

  ${media.desktop} {
    ${fontsObject.HEADING_5_20_B};
  }

  ${media.tablet} {
    ${fontsObject.HEADING_7_16_B};
  }

  ${media.mobile} {
    ${fontsObject.TITLE_7_14_SB};
  }
`;
