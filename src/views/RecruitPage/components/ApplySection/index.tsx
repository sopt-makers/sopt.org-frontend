import styled from '@emotion/styled';
import imgMainValue from '@src/assets/images/img_mainvalue_logos.png';

const ApplySection = () => {
  return (
    <Wrapper>
      <Chip>YB RECRUITING</Chip>
      <div style={{ height: '13px' }} />
      <Title>SOPT의 33번째 열정이 되어주세요!</Title>
      <div style={{ height: '49px' }} />
      <BlurOverlay />
      <ApplyButton href="https://sopt-recruiting.web.app/recruiting/apply/yb" target="_blank">
        지원하기
      </ApplyButton>
    </Wrapper>
  );
};

const BlurOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(24, 24, 24, 0.5), rgba(24, 24, 24, 1));
  z-index: 1;
`;

const ApplyButton = styled.a`
  width: 220px;
  padding: 24px 0;
  border-radius: 50px;
  color: #212121;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 22px */
  letter-spacing: -0.44px;
  background-color: #1dedae;
  z-index: 2;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    font-size: 18px;
    width: 180px;
    padding: 20px 0;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 16px;
    width: 160px;
    padding: 16px 0;
  }
`;

const Title = styled.div`
  text-align: center;
  color: #fcfcfc;
  text-align: center;
  font-size: 43px;
  font-weight: 700;
  line-height: 140%; /* 60.2px */
  letter-spacing: -0.86px;
  z-index: 2;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    font-size: 36px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 32px;
  }
`;

const Chip = styled.div`
  padding: 6px 0;
  width: 198px;
  border-radius: 17px;
  border: 1.682px solid #1ba072;
  background: rgba(29, 237, 162, 0.1);
  color: #1deda2;
  text-align: center;
  z-index: 2;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 580px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  background-image: url(${imgMainValue.src});
  background-position: center bottom -60px;
  background-size: auto 285px;
  background-repeat: no-repeat;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    padding-top: 0;
    height: 440px;
    background-size: auto 160px;
    background-position: center bottom;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    padding-top: 0;
    height: 440px;
    background-size: auto 120px;
    background-position: center bottom 40px;
  }
`;
export default ApplySection;
