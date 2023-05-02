import styled from '@emotion/styled';

export const MarginBanner = styled.div`
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

export const CoreValueSectionWrapper = styled.div`
  padding-top: 136px;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    padding-top: 92px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    padding-top: 46px;
  }
`;
