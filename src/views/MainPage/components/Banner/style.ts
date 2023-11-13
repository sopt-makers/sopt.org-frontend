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
  height: 100vh;
  padding-top: 50vh;
  position: absolute;
  z-index: 2;
  padding-bottom: 5vh;

  /* 모바일 뷰 */
  @media (max-width: 375px) {
    padding-top: 450px;
    padding-bottom: 50px;
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
  @media (max-width: 375px) {
    font-size: 28px;
  }
`;

export const DownScrollIcon = styled(IcDownScroll)`
  cursor: pointer;

  /* 모바일 뷰 */
  @media (max-width: 375px) {
    width: 28px;
    height: 28px;
  }
`;

export const RecruitButton = styled.div`
  cursor: pointer;

  margin-top: 40px;
  display: inline-flex;
  height: 60px;
  padding: 15px 28px;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background: radial-gradient(
      9.16% 35.18% at 50% 50%,
      rgba(112, 149, 185, 0) 0%,
      rgba(184, 200, 216, 0) 100%
    ),
    linear-gradient(92deg, #e5eaef -4.46%, #fff 18.02%, #b7c8d8 78.53%);
  color: ${colors.gray800};
  text-align: center;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 36.4px */

  /* 모바일 뷰 */
  @media (max-width: 375px) {
    margin-top: 28px;
    display: flex;
    width: 182px;
    height: 44px;
    padding: 15px 18px;
    font-size: 18px;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.36px;
  }
`;
