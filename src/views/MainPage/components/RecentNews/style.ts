import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Slider from 'react-slick';
import { ReactComponent as IconInstagram } from '@src/assets/icons/ic_instagram.svg';

export const TitleWrapper = styled.section`
  margin-left: 78px;

  @media (max-width: 768px) and (min-width: 429px) {
    margin-left: 48px;
  }
  @media (max-width: 428px) {
    margin-left: 28px;
  }
`;

export const SubTitle = styled.p`
  color: #5b88f8;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 46.311px; /* 257.282% */
  letter-spacing: -0.36px;
  margin-bottom: 8px;

  @media (max-width: 768px) and (min-width: 429px) {
    font-size: 18px;
    line-height: 46.311px; /* 257.282% */
    letter-spacing: -0.36px;
  }
  @media (max-width: 428px) {
    font-size: 11px;
    line-height: 26.615px; /* 241.956% */
    letter-spacing: -0.22px;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-family: SUIT;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: 50.64px; /* 112.534% */
  letter-spacing: -1.8px;

  @media (max-width: 768px) and (min-width: 429px) {
    font-size: 36px;
    font-weight: 600;
    line-height: 50.64px; /* 140.668% */
    letter-spacing: -1.08px;
  }

  @media (max-width: 428px) {
    font-size: 21px;
    line-height: 29.103px; /* 138.588% */
    letter-spacing: -0.63px;
  }
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 60px;

  @media (max-width: 428px) {
    margin-bottom: 40px;
  }
`;

export const SliderList = styled.ul`
  display: flex;
  position: relative;
  width: calc(313px * 10);
  animation: autoPlay 5s linear infinite;

  @media (max-width: 768px) and (min-width: 429px) {
    animation: autoPlay 7s linear infinite;
    width: calc(264px * 10);
  }

  @media (max-width: 428px) {
    animation: autoPlay 12s linear infinite;
    width: calc(148px * 10);
  }

  @keyframes autoPlay {
    0% {
      transition: translateX(0);
    }
    100% {
      transform: translateX(calc(-313px * 5));

      @media (max-width: 768px) and (min-width: 429px) {
        transform: translateX(calc(-264px * 5));
      }

      @media (max-width: 428px) {
        transform: translateX(calc(-148px * 5));
      }
    }
  }
`;

export const SliderWrapper = styled.section`
  position: relative;
`;

export const StyledSlider = styled(Slider)`
  .slick-track {
    margin-bottom: 60px;

    @media (max-width: 428px) {
      margin-bottom: 40px;
    }
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const GoToInstagram = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IcInstagram = styled(IconInstagram)`
  width: 23px;
  height: 23px;

  @media (max-width: 428px) {
    width: 12px;
    height: 12px;
  }
`;

export const Description = styled.p`
  color: #ededed;
  font-family: SUIT;
  font-size: 15.998px;
  font-style: normal;
  font-weight: 500;
  line-height: 26.859px; /* 167.895% */
  letter-spacing: -0.64px;
  text-decoration-line: underline;
  margin-left: 8px;

  cursor: pointer;

  @media (max-width: 428px) {
    font-size: 9.194px;
    line-height: 15.436px; /* 167.895% */
    letter-spacing: -0.368px;
  }
`;

export const Gradient = styled.div`
  width: 112.967px;
  height: 380px;
  position: absolute;
  top: 0;
  z-index: 50;
  margin-top: 72px;

  @media (max-width: 768px) and (min-width: 429px) {
    height: 315px;
  }

  @media (max-width: 428px) {
    margin-top: 24px;
    height: 182px;
  }
`;

export const LeftGradient = styled(Gradient)`
  background: linear-gradient(90deg, #0d1120 12.15%, rgba(13, 17, 32, 0.01) 82.86%);
`;

export const RightGradient = styled(Gradient)`
  background: linear-gradient(270deg, #0d1120 12.15%, rgba(13, 17, 32, 0.01) 82.86%);
  right: 0;
`;
