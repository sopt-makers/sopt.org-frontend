import styled from '@emotion/styled';

export const ImageWrapper = styled.article`
  position: absolute;
  left: 0;
  right: 0;

  height: 630px;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    height: 380px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    height: 178px;
  }
`;

export const HeadTitle = styled.h1`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);

  font-weight: 700;
  font-size: 45px;

  color: #fcfcfc;

  text-transform: uppercase;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    bottom: 63px;
    font-size: 36px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    bottom: 24px;
    font-size: 20px;
  }
`;
