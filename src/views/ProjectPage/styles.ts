import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

const SectionTitle = styled.div`
  color: ${colors.gray10};
  font-size: 28px;
  font-weight: 700;
  line-height: 150%; /* 42px */
  letter-spacing: -0.56px;
  margin-bottom: 40px;

  @media (max-width: 899px) {
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

  width: 1112px;
  padding: 100px 0;

  /* 태블릿 뷰 */
  @media (max-width: 1279px) and (min-width: 900px) {
    width: 732px;
  }

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    width: 360px;
  }
`;

const Spacing = styled.div`
  height: 108px;
  @media (max-width: 899px) {
    height: 48px;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    gap: 7px;
  }
`;

const S = { SectionTitle, Root, ContentWrapper, Spacing, FilterWrapper };
export default S;
