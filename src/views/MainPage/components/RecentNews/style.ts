import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Link from 'next/link';
import Slider from 'react-slick';
import { ReactComponent as IconInstagram } from '@src/assets/icons/ic_instagram.svg';

export const RecentNews = styled.section`
  padding: 589rem 0 65rem;

  @media (max-width: 1440px) {
    padding-top: 384rem;
  }

  @media (max-width: 768px) {
    padding: 253rem 0 42rem;
  }

  @media (max-width: 444px) {
    padding: 157rem 0 24rem;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-family: SUIT;
  font-size: 45rem;
  font-style: normal;
  font-weight: 600;
  line-height: 50.64rem; /* 112.534% */
  letter-spacing: -1.8rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30rem;
    font-weight: 600;
    line-height: 50.64rem; /* 140.668% */
    letter-spacing: -1.08rem;
  }

  @media (max-width: 376px) {
    font-size: 21rem;
    line-height: 29.103rem; /* 138.588% */
    letter-spacing: -0.63rem;
  }
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 60rem;

  @media (max-width: 444px) {
    margin-bottom: 40rem;
  }
`;

export const SliderList = styled.ul`
  display: flex;
  position: relative;
  width: calc(313rem * 10);
  animation: desktopAutoPlay 20s linear infinite;

  @media (max-width: 768px) and (min-width: 429px) {
    width: calc(264rem * 10);
    animation: tabletAutoPlay 20s linear infinite;
  }

  @media (max-width: 444px) {
    animation: mobileAutoPlay 20s linear infinite;
    width: calc(148rem * 10);
  }

  @keyframes desktopAutoPlay {
    0% {
      transition: translateX(0);
    }
    100% {
      transform: translateX(calc(-313rem * 5));
    }
  }

  @keyframes tabletAutoPlay {
    0% {
      transition: translateX(0);
    }
    100% {
      transform: translateX(calc(-264rem * 5));
    }
  }

  @keyframes mobileAutoPlay {
    0% {
      transition: translateX(0);
    }
    100% {
      transform: translateX(calc(-148rem * 5));
    }
  }
`;

export const SliderWrapper = styled.section`
  position: relative;
`;

export const StyledSlider = styled(Slider)`
  .slick-track {
    margin-bottom: 60rem;

    @media (max-width: 444px) {
      margin-bottom: 40rem;
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
  width: 21rem;
  height: 21rem;

  @media (max-width: 444px) {
    width: 12rem;
    height: 12rem;
  }
`;

export const Description = styled(Link)`
  color: #ededed;
  font-family: SUIT;
  font-size: 16rem;
  font-style: normal;
  font-weight: 500;
  line-height: 26.859rem; /* 167.895% */
  letter-spacing: -0.64rem;
  text-decoration-line: underline;
  margin-left: 8rem;

  cursor: pointer;

  @media (max-width: 444px) {
    font-size: 9.194rem;
    line-height: 15.436rem; /* 167.895% */
    letter-spacing: -0.368rem;
    margin-left: 4rem;
  }
`;

export const Gradient = styled.div`
  width: 44.967rem;
  height: 382rem;
  position: absolute;
  top: -1rem;
  z-index: 50;
  margin-top: 51rem;

  @media (max-width: 768px) and (min-width: 429px) {
    height: 315rem;
  }

  @media (max-width: 444px) {
    margin-top: 24rem;
    height: 182rem;
  }
`;

export const LeftGradient = styled(Gradient)`
  background: linear-gradient(90deg, #0d1120 12.15%, rgba(13, 17, 32, 0.01) 82.86%);
  left: -1rem;
`;

export const RightGradient = styled(Gradient)`
  background: linear-gradient(270deg, #0d1120 12.15%, rgba(13, 17, 32, 0.01) 82.86%);
  right: -1rem;
`;
