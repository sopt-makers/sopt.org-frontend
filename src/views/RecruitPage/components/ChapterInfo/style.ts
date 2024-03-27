import styled from '@emotion/styled';

const BaseChip = styled.div`
  line-height: 42rem;
  font-size: 22rem;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 18rem;
  }

  @media (max-width: 765.9px) {
    line-height: 18rem;
    font-size: 16rem;
  }
`;

const BlueChip = styled(BaseChip)`
  color: #fff;
  padding-left: 20rem;
  &:before {
    content: '✏️';
    padding-right: 10rem;
  }
`;

const GreenChip = styled(BaseChip)`
  color: #bdec00;
  padding-left: 20rem;
  &:before {
    content: '👍';
    padding-right: 10rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70rem;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 40rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 24rem;
  }
`;

const BaseText = styled.div`
  color: #fff;
  font-size: 24rem;
  font-style: normal;
  letter-spacing: -0.48rem;
  white-space: pre-line;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 16rem;
    font-style: normal;
    letter-spacing: -0.32rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 16rem;
    font-style: normal;
    letter-spacing: -0.32rem;
  }
`;

const InfoWrapper = styled(BaseText)`
  border-radius: 30rem;
  background: #222220;
  padding: 45rem 80rem;
  font-weight: 600;
  line-height: 42rem;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    width: 640rem;
    padding: 32rem 56rem;
    border-radius: 20rem;
    line-height: 180%;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 323rem;
    padding: 22rem 28rem;
    border-radius: 20rem;
    line-height: 170%;
  }
`;

const FitWrapper = styled(BaseText)`
  border-radius: 30rem;
  background: #21270f;
  padding: 60rem 80rem;
  display: flex;
  flex-direction: column;
  line-height: 40rem;
  gap: 12rem;
  width: 100%;

  font-weight: 400;
  line-height: 50rem;

  & * {
    font-size: 100%;
  }

  & div {
    padding-left: 14rem;
    text-indent: -14rem;
  }

  & div::before {
    content: '-';
    padding-right: 5rem;
  }
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    width: 640rem;
    padding: 32rem 56rem;
    border-radius: 24rem;
    line-height: 180%;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 323rem;
    padding: 22rem 28rem;
    gap: 8rem;
    border-radius: 20rem;
    line-height: 170%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 765.9px) {
    flex-direction: column;
  }
`;

export {
  BaseChip,
  BaseText,
  BlueChip,
  GreenChip,
  FitWrapper,
  InfoWrapper,
  Wrapper,
  Container,
  SectionWrapper,
};
