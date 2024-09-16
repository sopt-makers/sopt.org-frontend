import styled from '@emotion/styled';

export const Banner = styled.div`
  width: 100vw;
  max-height: 630px;
  height: calc(376px + 13vw);
  position: relative;
  overflow: hidden;

  /* 태블릿 뷰 */
  @media (max-width: 48rem) {
    max-height: 376px;
    height: calc(150px + 29vw);
  }

  /* 모바일 뷰 */
  @media (max-width: 26.75rem) {
    height: 230px;
  }
`;
