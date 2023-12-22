import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';
import { ReactComponent as IcDownScroll } from '@src/assets/icons/ic_downScroll.svg';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerWrapper = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const BannerImage = styled(Image)`
  object-fit: cover;
`;

export const BannerGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(20, 30, 44, 0.09) 0%,
    rgba(16, 18, 20, 0.75) 73.73%,
    #0f1010 84.77%
  );
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding-top: 50vh;
  position: absolute;
  z-index: 2;
  padding-bottom: 5vh;

  /* 모바일 뷰 */
  @media (max-width: 768px) {
    padding-top: 60vh;
    padding-bottom: 50px;
    gap: 20px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 93.6px */
  letter-spacing: -0.72px;
  background: linear-gradient(93deg, ${colors.white} 29.05%, #b7c8d8 89.19%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* 모바일 뷰 */
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const DownScrollIcon = styled(IcDownScroll)`
  cursor: pointer;

  /* 모바일 뷰 */
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
