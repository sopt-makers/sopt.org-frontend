import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import { media } from '@src/lib/styles/breakpoints';

export const CurriculumContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  ${media.mobile} {
    gap: 24px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  height: calc(300px + 25.72vw);
  border-radius: 10px;

  /* 태블릿 뷰 */
  @media (max-width: 48rem) {
    max-width: 662.42px;
    width: 86vw;
    min-width: 429.34px;
    height: calc(238px + 7.68vw);
  }

  /* 모바일 뷰 */
  @media (max-width: 26.75rem) {
    max-width: 361.06px;
    width: 84vw;
    min-width: 312.48px;
    height: 238.901px;
  }
`;

export const CurriList = styled.ul`
  display: flex;
  width: 750px;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  ${media.tablet} {
    width: 688px;
    gap: 8px;
  }

  ${media.mobile} {
    width: 100%;
    gap: 8px;
  }
`;
export const CurriItem = styled.li`
  display: flex;
  width: 100%;
  padding: 16px 40px;
  align-items: center;
  gap: 10px;
  background-color: ${colors.gray900};
  border-radius: 14px;
  color: ${colors.white};
  ${fontsObject.TITLE_4_20_SB}

  ${media.tablet} {
    padding: 16px 24px;
    ${fontsObject.TITLE_6_16_SB}
  }

  ${media.mobile} {
    padding: 12px 16px;
    ${fontsObject.BODY_3_14_M}
  }
`;

export const CurriHighlight = styled.span<{ mainColor: string }>`
  color: ${({ mainColor }) => mainColor};
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 20px;
  letter-spacing: -0.4px;

  ${media.tablet} {
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.36px;
  }

  ${media.mobile} {
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.32px;
  }
`;
