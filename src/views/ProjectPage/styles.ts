import styled from '@emotion/styled';

export const SectionTitle = styled.div`
  color: #f7f8fa;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 42px */
  letter-spacing: -0.56px;
`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 1200px;
  padding: 100px 0;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 1124px) {
    width: 1080px;
  }
  @media (max-width: 1124px) and (min-width: 766px) {
    width: 700px;
  }

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360px;
  }
`;
