import styled from '@emotion/styled';
import { colorFg, typography } from '@sopt-mds/design-tokens';
import { media } from '@src/lib/styles/breakpoints';

export const Root = styled.section`
  display: flex;
  justify-content: center;
  padding: 160px 40px;

  ${media.tablet} {
    padding: 120px 40px;
  }

  ${media.mobile} {
    padding: 80px 20px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 100%;
  max-width: 1200px;

  ${media.tablet} {
    gap: 40px;
  }

  ${media.mobile} {
    gap: 40px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 48px;

  ${media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const Title = styled.h2`
  color: ${colorFg.neutral.bold};
  ${typography.heading1}

  ${media.mobile} {
    ${typography.heading2}
  }
`;

/* Figma 태블릿·모바일 헤더에는 설명이 없다 */
export const Description = styled.p`
  color: ${colorFg.neutral.subtle};
  white-space: pre-line;
  ${typography.title5}

  ${media.tablet} {
    display: none;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  @media (min-width: 1024px) and (max-width: 1239px) {
    gap: 24px;
  }

  ${media.tablet} {
    gap: 8px;
  }

  /* 모바일: 한 줄로 늘어놓고 가로 스크롤 */
  ${media.mobile} {
    display: flex;
    gap: 8px;
    margin-inline: -20px;
    padding-inline: 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 20px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
