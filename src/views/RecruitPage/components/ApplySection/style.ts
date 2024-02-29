import styled from '@emotion/styled';
import { StaticImageData } from 'next/image';

export const Values = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 100%;

`;

export const ApplyButton = styled.a`
  width: 220px;
  padding: 24px 0;
  border-radius: 50px;
  color: #212121;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 22px */
  letter-spacing: -0.44px;
  background-color: #BDEC00;
  z-index: 2;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 18px;
    width: 180px;
    padding: 20px 0;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 16px;
    width: 160px;
    padding: 16px 0;
  }
`;

export const Title = styled.div`
  text-align: center;
  color: #fcfcfc;
  text-align: center;
  font-size: 43px;
  font-weight: 700;
  line-height: 140%; /* 60.2px */
  letter-spacing: -0.86px;
  z-index: 2;
  word-break: keep-all;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 36px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 29px;
  }
`;

export const Wrapper = styled.div<{imgRecruitBg: StaticImageData}>`
  width: 100vw;
  height: 580px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  background-image: url(${({ imgRecruitBg })=>imgRecruitBg.src});
  background-repeat: no-repeat;  
  background-size: cover; 
  background-position: center;
`;