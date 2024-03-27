import styled from '@emotion/styled';
import { StaticImageData } from 'next/image';

export const Values = styled.div`
  display: flex;
  justify-content: center;
  gap: 90rem;

  & > svg {
    transform: scale(2);
  }

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 21rem;
    & > svg {
      transform: scale(1);
    }
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 18rem;
    & > svg {
      transform: scale(1);
    }
  }
`;

export const ApplyButton = styled.a`
  width: 220rem;
  padding: 24rem 0;
  border-radius: 50rem;
  color: #212121;
  text-align: center;
  font-size: 22rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 22rem */
  letter-spacing: -0.44rem;
  background-color: #bdec00;
  z-index: 2;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 18rem;
    width: 180rem;
    padding: 20rem 0;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 16rem;
    width: 160rem;
    padding: 16rem 0;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 62rem 0 36rem 0;

  text-align: center;
  color: #fcfcfc;
  text-align: center;
  font-size: 43rem;
  font-weight: 700;
  line-height: 140%; /* 60.2rem */
  letter-spacing: -0.86rem;
  z-index: 2;
  word-break: keep-all;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    margin-top: 32rem;
    font-size: 28rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-top: 26rem;
    font-size: 28rem;
  }
`;

export const Wrapper = styled.div<{ imgRecruitBg: StaticImageData }>`
  width: 100vw;
  height: 580rem;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 80rem;

  background-image: url(${({ imgRecruitBg }) => imgRecruitBg.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    height: 400rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-top: 48rem;
    font-size: 28rem;
  }
`;
