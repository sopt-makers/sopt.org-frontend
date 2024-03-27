import styled from '@emotion/styled';

export const Banner = styled.div<{ src: string }>`
  width: 100vw;
  max-height: 630rem;
  height: calc(376rem + 13vw);
  background: center / cover no-repeat url(${({ src }) => src});

  /* 태블릿 뷰 */
  @media (max-width: 768px) {
    max-height: 376rem;
    height: calc(150rem + 29vw);
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    height: 230rem;
  }
`;
