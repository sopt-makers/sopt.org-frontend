import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import Link from 'next/link';
import Slider from 'react-slick';
import { ReactComponent as IconInstagram } from '@src/assets/icons/ic_instagram.svg';
import { media } from '@src/lib/styles/breakpoints';
import { media } from '@src/lib/styles/breakpoints';

export const RecentNews = styled.section`
  padding: 432px 0 372px 0px;

  ${media.tablet}, ${media.mobile} {
    padding-top: 100px;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-family: SUIT;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.8px;
  text-align: center;

  ${media.tablet} {
    ${fontsObject.HEADING_2_32_B}
  }

  ${media.mobile} {
    ${fontsObject.HEADING_5_20_B}
  }
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 60px;

  ${media.mobile} {
    margin-bottom: 40px;
  }
`;

export const SliderList = styled.ul`
  display: flex;
  position: relative;
  width: max-content;
  animation: autoPlay 60s linear infinite;

  @keyframes autoPlay {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

export const SliderWrapper = styled.section`
  position: relative;
`;

export const StyledSlider = styled(Slider)`
  .slick-track {
    margin-bottom: 60px;

    ${media.mobile} {
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
  width: 20px;
  height: 20px;
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

  ${media.mobile} {
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

  ${media.tablet} {
    height: 315px;
  }

  ${media.mobile} {
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
