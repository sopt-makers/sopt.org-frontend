import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';
import { css } from '@emotion/react';

export const CardContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
  width: 236px;
  height: 446px;
  overflow: hidden;
  border-radius: 12px;
  transition: width 0.7s ease;

  @media (min-width: 1024px) {
    ${({ isActive }) =>
      isActive &&
      css`
        width: 664px;
      `};
  }

  @media (max-width: 1023px) and (min-width: 768px) {
    width: 140px;
    height: 300px;
    border-radius: 36px;
    ${({ isActive }) =>
      isActive &&
      css`
        width: 296px;
      `};
  }

  @media (max-width: 767px) {
    width: 300px;
    height: 260px;
    border-radius: 12px;
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }
`;

export const CoreValueImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
`;

export const GradientOverlay = styled.div<{ isActive: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
  opacity: ${({ isActive }) => isActive && 0.5};
  transition: opacity 0.3s ease;
  background: ${({ isActive }) =>
    isActive
      ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.48) 60.96%)'
      : 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)'};
`;

export const CardContent = styled.div<{ isActive: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 664px;
  height: 100%;
  padding: 36px;
  z-index: 20;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.5s ease;

  @media (max-width: 1023px) and (min-width: 768px) {
    width: 296px;
    padding: 24px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 26px;
  }
`;

export const CardTitle = styled.h3`
  font-family: SUIT;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: pre-line;
  margin-bottom: 12px;

  @media (max-width: 1023px) and (min-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 767px) {
    font-size: 19px;
  }
`;

// max-width 570px은 데스크탑뷰에서 줄넘기기 깔끔하게 하기 위해 설정. 멘트가 바뀐다면 삭제해도 됨.
export const CardDetail = styled.p`
  max-width: 570px;

  color: ${colors.gray100};
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: -0.48px;
  word-break: keep-all;
  white-space: pre-line;

  @media (max-width: 1023px) and (min-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const CardValue = styled.p<{ isActive: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: SUIT;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.8px;
  opacity: ${({ isActive }) => (isActive ? 0 : 1)};
  transition: opacity 0.5s ease;
  z-index: 40;

  @media (max-width: 1023px) and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const PrimaryColorCircle = styled.div<{ isActive: boolean; highColor: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(15%, -85%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${({ highColor }) => highColor};
  z-index: 30;
  opacity: ${({ isActive }) => (isActive ? 0 : 1)};
  transition: opacity 0.5s ease;

  @media (max-width: 1023px) and (min-width: 768px) {
    width: 24px;
    height: 24px;
    transform: translate(30%, -105%);
  }
`;
