import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  gap: 24px;

  ${media.mobile} {
    padding: 0 20px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 944px;
  flex-direction: column;
  gap: 8px;

  ${media.desktopLarge} {
    width: 1200px;
  }

  ${media.tablet} {
    width: 688px;
    gap: 4px;
  }

  ${media.mobile} {
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: ${colors.white};
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;

  ${media.tablet} {
    ${fontsObject.HEADING_2_32_B}
  }

  ${media.mobile} {
    ${fontsObject.HEADING_5_20_B}
  }
`;

export const Description = styled.p`
  color: ${colors.gray100};
  ${fontsObject.BODY_1_18_M};
  white-space: pre-line;

  ${media.tablet} {
    ${fontsObject.BODY_2_16_M}
  }

  ${media.mobile} {
    ${fontsObject.LABEL_5_11_SB};
    white-space: normal;
    word-break: keep-all;
  }
`;

export const PartList = styled.ul`
  display: grid;
  width: 944px;
  grid-template-rows: repeat(2, fit-content(100%));
  grid-template-columns: repeat(3, fit-content(100%));
  gap: 24px;

  ${media.desktopLarge} {
    width: 1200px;
  }

  ${media.tablet} {
    width: 688px;
  }

  ${media.mobile} {
    display: flex;
    width: 100%;
    gap: 8px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 20px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const PartItem = styled.li`
  display: flex;
  width: 298.6px;
  height: 284px;
  flex-direction: column;
  padding: 38px 40px;
  gap: 10px;
  border-radius: 24px;
  background-color: ${colors.gray800};

  ${media.desktopLarge} {
    width: 380px;
  }

  ${media.tablet} {
    width: 213.3px;
    height: 220px;
    padding: 20px;
    border-radius: 16px;
  }

  ${media.mobile} {
    flex-shrink: 0;
    width: 200px;
    height: 220px;
    padding: 20px;
    border-radius: 16px;
    scroll-snap-align: start;
  }
`;

export const PartItemTitle = styled.h3`
  ${fontsObject.HEADING_2_32_B};

  ${media.tablet} {
    ${fontsObject.TITLE_6_16_SB}
  }
`;

export const PartItemDescription = styled.p`
  ${fontsObject.BODY_1_18_M};
  color: ${colors.gray10};

  ${media.tablet} {
    ${fontsObject.BODY_4_13_R}
  }
`;
