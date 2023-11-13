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

    & > span {
      display: none;
    }
  }
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  width: 100vw;
  overflow-x: hidden;
  touch-action: pan-y;

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    align-items: flex-start;
    margin: 0 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 1112px;
  padding: 188px 0;

  /* 태블릿 뷰 */
  @media (max-width: 1279px) and (min-width: 900px) {
    width: 732px;
  }

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    width: 360px;
    padding: 76px 0;
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

const PlaygroundLinkWrapper = styled.div`
  @media (max-width: 899px) {
    display: none;
  }
  color: ${colors.gray400};
  /* Body/2_Medium_16 */
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 165%; /* 26.4px */
  letter-spacing: -0.24px;
  margin-top: -44px;
  margin-bottom: 28px;
  display: flex;
  gap: 4px;
`;

const PlaygroundLink = styled.a`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${colors.gray400};
    left: 0;
    bottom: 4px;
  }
`;

const S = {
  SectionTitle,
  Root,
  ContentWrapper,
  Spacing,
  FilterWrapper,
  PlaygroundLinkWrapper,
  PlaygroundLink,
};
export default S;
