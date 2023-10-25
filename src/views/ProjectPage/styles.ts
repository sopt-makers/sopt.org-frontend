import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

const SectionTitle = styled.div`
  color: ${colors.gray10};
  font-size: 28px;
  font-weight: 700;
  line-height: 150%; /* 42px */
  letter-spacing: -0.56px;
  margin-bottom: 40px;

  @media (max-width: 765.9px) {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.36px;
    margin-bottom: 20px;
  }
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
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

const Spacing = styled.div`
  height: 108px;
  @media (max-width: 765.9px) {
    height: 48px;
  }
`;

const S = { SectionTitle, Root, ContentWrapper, Spacing };
export default S;
