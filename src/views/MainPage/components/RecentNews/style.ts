import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Link from 'next/link';
import Slider from 'react-slick';
import { ReactComponent as IconInstagram } from '@src/assets/icons/ic_instagram.svg';

export const RecentNews = styled.section`
  padding: 589px 0 65px;

  @media (max-width: 90rem) {
    padding-top: 384px;
  }

  @media (max-width: 48rem) {
    padding: 253px 0 42px;
  }

  @media (max-width: 27.75rem) {
    padding: 157px 0 24px;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-family: SUIT;
  font-size: 45rem;
  font-style: normal;
  font-weight: 600;
  line-height: 50.64px; /* 112.534% */
  letter-spacing: -1.8px;
  text-align: center;

  @media (max-width: 48rem) {
    font-size: 30rem;
    font-weight: 600;
    line-height: 50.64px; /* 140.668% */
    letter-spacing: -1.08px;
  }

  @media (max-width: 23.5rem) {
    font-size: 21rem;
    line-height: 29.103px; /* 138.588% */
    letter-spacing: -0.63px;
  }
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 60px;

  @media (max-width: 27.75rem) {
    margin-bottom: 40px;
  }
`;

export const SliderList = styled.ul`
  display: flex;
  position: relative;
  width: calc(313px * 10);
  animation: desktopAutoPlay 20s linear infinite;

  @media (max-width: 48rem) and (min-width: 26.8125rem) {
    width: calc(264px * 10);
    animation: tabletAutoPlay 20s linear infinite;
  }

  @media (max-width: 27.75rem) {
    animation: mobileAutoPlay 20s linear infinite;
    width: calc(148px * 10);
  }

  @keyframes desktopAutoPlay {
    0% {
      transition: translateX(0);
    }
    100% {
      transform: translateX(calc(-313px * 5));
    }
  }

  @keyframes tabletAutoPlay {
    0% {
      transition: translateX(0);
    }
    100% {
      transform: translateX(calc(-264px * 5));
    }
  }

  @keyframes mobileAutoPlay {
    0% {
      transition: translateX(0);
    }
    100% {
      transform: translateX(calc(-148px * 5));
    }
  }
`;

export const SliderWrapper = styled.section`
  position: relative;
`;

export const StyledSlider = styled(Slider)`
  .slick-track {
    margin-bottom: 60px;

    @media (max-width: 27.75rem) {
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
  width: 21px;
  height: 21px;

  @media (max-width: 27.75rem) {
    width: 12px;
    height: 12px;
  }
`;

export const Description = styled(Link)`
  color: #ededed;
  font-family: SUIT;
  font-size: 16rem;
  font-style: normal;
  font-weight: 500;
  line-height: 26.859px; /* 167.895% */
  letter-spacing: -0.64px;
  text-decoration-line: underline;
  margin-left: 8px;

  cursor: pointer;

  @media (max-width: 27.75rem) {
    font-size: 9.194rem;
    line-height: 15.436px; /* 167.895% */
    letter-spacing: -0.368px;
    margin-left: 4px;
  }
`;

export const Gradient = styled.div`
  width: 44.967px;
  height: 382px;
  position: absolute;
  top: -1px;
  z-index: 50;
  margin-top: 51px;

  @media (max-width: 48rem) and (min-width: 26.8125rem) {
    height: 315px;
  }

  @media (max-width: 27.75rem) {
    margin-top: 24px;
    height: 182px;
  }
`;

export const LeftGradient = styled(Gradient)`
  background: linear-gradient(90deg, #0d1120 12.15%, rgba(13, 17, 32, 0.01) 82.86%);
  left: -1px;
`;

export const RightGradient = styled(Gradient)`
  background: linear-gradient(270deg, #0d1120 12.15%, rgba(13, 17, 32, 0.01) 82.86%);
  right: -1px;
`;
