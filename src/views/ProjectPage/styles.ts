import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

const SectionTitle = styled.div`
  color: ${colors.gray10};
  font-size: 28rem;
  font-weight: 700;
  line-height: 150%; /* 42rem */
  letter-spacing: -0.56rem;
  margin-bottom: 40rem;
  & > * {
    font-size: 100%;
  }

  @media (max-width: 899px) {
    font-size: 18rem;
    font-weight: 700;
    letter-spacing: -0.36rem;
    margin-bottom: 20rem;

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
    padding: 0 50rem;
  }

  @media (max-width: 375px) {
    padding: 0 20rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 1112rem;
  padding: 188rem 0;

  /* 태블릿 뷰 */
  @media (max-width: 1279px) and (min-width: 900px) {
    width: 732rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    width: 100%;
    padding: 76rem 0;
  }
`;

const Spacing = styled.div`
  height: 108rem;
  @media (max-width: 899px) {
    height: 48rem;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 10rem;
  margin-bottom: 16rem;

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    gap: 7rem;
  }
`;

const PlaygroundLinkWrapper = styled.div`
  @media (max-width: 899px) {
    display: none;
  }
  color: ${colors.gray400};
  /* Body/2_Medium_16 */
  font-family: SUIT;
  font-size: 16rem;
  font-style: normal;
  font-weight: 500;
  line-height: 165%; /* 26.4rem */
  letter-spacing: -0.24rem;
  margin-top: -44rem;
  margin-bottom: 28rem;
  display: flex;
  gap: 4rem;

  & > * {
    font-size: 100%;
  }
`;

const PlaygroundLink = styled.a`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1rem;
    background-color: ${colors.gray400};
    left: 0;
    bottom: 4rem;
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
