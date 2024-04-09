import styled from '@emotion/styled';

const BaseChip = styled.div`
  line-height: 42px;
  font-size: 22px;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 18px;
  }

  @media (max-width: 765.9px) {
    line-height: 18px;
    font-size: 16px;
  }
`;

const BlueChip = styled(BaseChip)`
  color: #fff;
  padding-left: 20px;
  &:before {
    content: '✏️';
    padding-right: 10px;
  }
`;

const GreenChip = styled(BaseChip)`
  color: #bdec00;
  padding-left: 20px;
  &:before {
    content: '👍';
    padding-right: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 24px;
  }
`;

const BaseText = styled.div`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  letter-spacing: -0.48px;
  white-space: pre-line;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 16px;
    font-style: normal;
    letter-spacing: -0.32px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 16px;
    font-style: normal;
    letter-spacing: -0.32px;
  }
`;

const InfoWrapper = styled(BaseText)`
  border-radius: 30px;
  background: #222220;
  padding: 45px 80px;
  font-weight: 600;
  line-height: 42px;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    width: 640px;
    padding: 32px 56px;
    border-radius: 20px;
    line-height: 180%;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 323px;
    padding: 22px 28px;
    border-radius: 20px;
    line-height: 170%;
  }
`;

const FitWrapper = styled(BaseText)`
  border-radius: 30px;
  background: #21270f;
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  line-height: 40px;
  gap: 12px;
  width: 100%;

  font-weight: 400;
  line-height: 50px;

  & * {
    font-size: 100%;
  }

  & div {
    padding-left: 14px;
    text-indent: -14px;
  }

  & div::before {
    content: '-';
    padding-right: 5px;
  }
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    width: 640px;
    padding: 32px 56px;
    border-radius: 24px;
    line-height: 180%;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 323px;
    padding: 22px 28px;
    gap: 8px;
    border-radius: 20px;
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
