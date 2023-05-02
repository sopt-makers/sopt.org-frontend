import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    height: 334px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    height: 192px;
  }
`;
