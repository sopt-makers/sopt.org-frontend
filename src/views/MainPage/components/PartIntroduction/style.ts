import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { IconArrowUpRight } from '@sopt-makers/icons';
import { Tag } from '@sopt-makers/ui';
import NextLink from 'next/link';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  ${media.desktopLarge} {
    align-items: start;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 960px;
  flex-direction: column;
  gap: 8px;

  ${media.desktopLarge} {
    width: 1200px;
  }

  ${media.tablet} {
    width: 720px;
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
  width: 960px;
  grid-template-rows: repeat(2, fit-content(100%));
  grid-template-columns: repeat(3, fit-content(100%));
  gap: 24px;

  ${media.desktopLarge} {
    width: 1200px;
  }

  ${media.tablet} {
    width: 720px;
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
  cursor: pointer;
`;

export const Link = styled(NextLink)`
  position: relative;
  display: flex;
  width: 304px;
  height: 284px;
  flex-direction: column;
  color: inherit;
  text-decoration: none;
  padding: 38px 40px;
  gap: 10px;
  border-radius: 24px;
  background-color: ${colors.gray800};
  cursor: pointer;
  overflow: hidden;
  transition: border-radius 0.3s ease-out;

  &:hover {
    border-radius: 48px;
  }

  ${media.desktopLarge} {
    width: 380px;
  }

  ${media.tablet} {
    width: 224px;
    height: 220px;
    padding: 20px;
    border-radius: 16px;

    &:hover {
      border-radius: 32px;
    }
  }

  ${media.mobile} {
    flex-shrink: 0;
    width: 200px;
    height: 220px;
    padding: 16px;
    border-radius: 16px;
    scroll-snap-align: start;

    &:hover {
      border-radius: 32px;
    }
  }
`;

export const HoverIconBadge = styled.div<{ mainColor: string }>`
  position: absolute;
  right: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 999px;
  background-color: ${({ mainColor }) => mainColor};
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out, visibility 0.3s ease-out;

  ${Link}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  ${media.tablet} {
    right: 20px;
    bottom: 20px;
    width: 48px;
    height: 48px;
  }

  ${media.mobile} {
    right: 20px;
    bottom: 20px;
    width: 48px;
    height: 48px;
  }
`;

export const HoverIcon = styled(IconArrowUpRight)`
  width: 32px;
  height: 32px;
  color: ${colors.white};

  ${media.tablet} {
    width: 24px;
    height: 24px;
  }

  ${media.mobile} {
    width: 24px;
    height: 24px;
  }
`;

export const TagComponent = styled(Tag)<{ mainColor: string }>`
  color: ${({ mainColor }) => mainColor};
  background-color: ${({ mainColor }) => `${mainColor}1A`};
`;

export const PartItemTitle = styled.h3`
  ${fontsObject.HEADING_2_32_B};

  ${media.tablet} {
    ${fontsObject.TITLE_6_16_SB}
  }

  ${media.mobile} {
    ${fontsObject.TITLE_6_16_SB}
  }
`;

export const PartItemDescription = styled.p`
  ${fontsObject.BODY_1_18_M};
  color: ${colors.gray10};

  ${media.tablet} {
    ${fontsObject.BODY_4_13_R}
  }

  ${media.mobile} {
    ${fontsObject.BODY_4_13_R}
  }
`;
