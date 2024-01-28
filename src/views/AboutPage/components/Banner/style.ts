import styled from '@emotion/styled';

export const Banner = styled.div<{ src: string }>`
  width: 100vw;
  max-height: 630px;
  height: calc(376px + 13vw);
  background: center / cover no-repeat url(${({ src }) => src});

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    max-height: 376px;
    height: calc(150px + 29vw);
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    height: 230px;
  }
`;
