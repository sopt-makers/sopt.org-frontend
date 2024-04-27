import styled from '@emotion/styled';
import { FadeIn } from '@src/lib/styles/animation';

export const Wrapper = styled.button`
  position: fixed;
  z-index: 9999;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  background: #242424;

  // 모바일
  @media (max-width: 47.8125rem) {
    width: 56px;
    height: 56px;
    right: 20px;
    bottom: 105px;
    border-radius: 50%;
  }

  // 태블릿
  @media (min-width: 47.875rem) and (max-width: 119.9375rem) {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    right: 40px;
    bottom: 120px;
  }

  // 데스크탑
  @media (min-width: 120rem) {
    width: 123px;
    height: 80px;
    border-radius: 52px;
    right: 100px;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
  }

  ${FadeIn}
  animation: fadein 0.4s;
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 24rem;
  line-height: 48px;
  color: #ffffff;
  // 모바일 태블릿
  @media (min-width: 22.5rem) and (max-width: 119.9375rem) {
    display: none;
  }
`;
