import styled from '@emotion/styled';
import icSoptLogoWhite from '@src/assets/icons/ic_logo_sopt_white.svg';

export const Container = styled.div`
  height: 250vh;
  width: 100vw;
`;

export const Wrapper = styled.div`
  height: 100vh;
  top: 0;
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 35px;
`;

export const Logo = styled.div`
  background-image: url(${icSoptLogoWhite});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 420px;
  height: 112px;
  /* 모바일 뷰 */
  @media (max-width: 899px) {
    width: 192px;
    height: 52px;
  }
`;

export const WhiteBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
`;

export const DescriptionText = styled.div`
  font-family: SUIT;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(93deg, #fff 29.05%, #c1d2d8 89.19%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* 모바일 뷰 */
  @media (max-width: 899px) {
    font-family: SUIT;
    font-size: 14.656px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
