import styled from '@emotion/styled';

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 676px;
    gap: 24px;
  }
  @media (max-width: 765.9px) {
    width: 328px;
    gap: 48px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
`;

const BigTitle = styled.h2`
  margin-bottom: 134px;
  font-weight: 700;
  font-size: 45px;
  line-height: 100%;
  color: #fcfcfc;
  text-align: center;
  @media (max-width: 1199px) and (min-width: 766px) {
    margin-bottom: 28px;
    font-size: 36px;
    line-height: 56px;
    color: white;
  }
  @media (max-width: 765.9px) {
    margin-bottom: 26px;
    font-size: 20px;
    line-height: 28px;
    font-weight: 800;
    font-size: 20px;
    line-height: 28px;
    color: white;
  }
`;

const Title = styled.h3`
  width: 100%;
  font-size: 45px;
  font-size: 45px;
  line-height: 60px;
  @media (max-width: 1199px) and (min-width: 766px) {
    text-align: center;
    font-size: 36px;
    line-height: 56px;
  }
  @media (max-width: 765.9px) {
    text-align: center;
    font-size: 20px;
    line-height: 28px;
  }
`;

const OvalSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1200px;
  height: 520px;
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 100%;
    height: 494px;
  }
  @media (max-width: 765.9px) {
    width: 100%;
    height: 892px;
  }
`;

export const St = {
  Root,
  TitleWrapper,
  BigTitle,
  Title,
  OvalSpinnerContainer,
};
