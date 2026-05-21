import styled from '@emotion/styled';
import Image from 'next/image';
import { ReactComponent as IcDownScroll } from '@src/assets/icons/ic_downScroll.svg';
import { media } from '@src/lib/styles/breakpoints';

/** 제목 그라데이션에 쓰일 branding 색상 변환 */
const toBrandTintColor = (mainColor: string) => `color-mix(in srgb, ${mainColor} 37%, white)`;

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
  gap: 40px;
`;

export const ContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 55px;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 50vh;
  position: absolute;
  z-index: 2;

  ${media.tablet} {
    gap: 70px;
  }

  ${media.mobile} {
    gap: 80px;
    padding-top: 60vh;
    padding-bottom: 50px;
  }
`;

export const Title = styled.h1<{ mainColor: string }>`
  white-space: pre-line;
  text-align: center;
  font-family: SUIT;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.72px;

  background: linear-gradient(
    93deg,
    #fff 29.05%,
    ${({ mainColor }) => toBrandTintColor(mainColor)} 68.37%,
    #fff 89.19%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${media.tablet} {
    font-size: 64rem;
  }

  ${media.mobile} {
    font-size: 28rem;
    line-height: 42px;
    letter-spacing: -2%;
  }
`;

export const DownScrollIcon = styled(IcDownScroll)`
  min-width: 56px;
  width: 56px;
  min-height: 56px;
  height: 56px;
  cursor: pointer;

  ${media.tablet} {
    min-width: 42px;
    width: 42px;
    min-height: 42;
    height: 42px;
  }

  ${media.mobile} {
    min-width: 28px;
    min-height: 28px;
    width: 28px;
    height: 28px;
  }
`;
