import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';

export const PartSlide = styled.div`
  display: flex;
  flex-shrink: 0;
  position: relative;

  width: 100%;
  height: 428px;
  border-radius: 19px;
  background: linear-gradient(98deg, #1a2035 33.84%, #304f84 96.92%);

  @media (max-width: 768px) {
    justify-content: normal;
    position: static;

    height: 488.493px;
    border-radius: none;
    background: none;
  }

  @media (max-width: 428px) {
    height: 280.74px;
  }
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 1.5625vw;

  & > img:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 26px;
    margin: 0 2.73vw 0 0;
  }

  @media (max-width: 428px) {
    margin: 0 2.72vw 0 0;
    width: 15.293px;
    & > img {
      height: 24.138px;
    }
  }
`;

export const LeftArrow = styled(Arrow)`
  margin: 0 0 0 1.5625vw;

  @media (max-width: 768px) {
    margin: 0 2.73vw 0 0;
  }

  @media (max-width: 428px) {
    margin: 0 2.72vw 0 0;
  }
`;

export const RightArrow = styled(Arrow)`
  margin: 0 1.5625vw 0 0;

  @media (max-width: 768px) {
    margin: 0 0 0 2.73vw;
  }

  @media (max-width: 428px) {
    margin: 0 0 0 2.72vw;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 77px 0 62px 4.375vw;

  @media (max-width: 768px) {
    position: relative;
    padding: 6.57vw 6.5vw 0 6.5vw;
    border-radius: 19px;
    background: linear-gradient(98deg, #1a2035 33.84%, #304f84 96.92%);
  }

  @media (max-width: 428px) {
    padding: 6.78vw 6.71vw 0 6.71vw;
    border-radius: 10.919px;
  }
`;

export const PartDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: calc(250px + 11vw);

  @media (max-width: 768px) {
    justify-content: normal;
    width: 100%;
  }
`;

export const PartTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;

  @media (max-width: 768px) {
    gap: 5px;
  }

  @media (max-width: 428px) {
    gap: 2.87px;
  }
`;

export const PartBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */

  width: fit-content;
  padding: 6px 15px;

  border-radius: 10.823px;
  border: 1.281px solid ${colors.white};
  background: rgba(255, 255, 255, 0.2);

  color: ${colors.white};
  font-family: SUIT;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 19px */
  letter-spacing: -0.38px;

  @media (max-width: 768px) {
    border-radius: 8.836px;
    font-size: 15px;
    letter-spacing: -0.3px;
    padding: 4.899px 12.247px;
  }

  @media (max-width: 428px) {
    border-radius: 5.078px;
    padding: 2.815px 7.038px;
    font-size: 9px;
    letter-spacing: -0.18px;
  }
`;

export const PartTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #fff;
  font-family: SUIT;
  font-size: calc(48px + 0.41vw);
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 56px */
  letter-spacing: -1.12px;

  @media (max-width: 768px) {
    height: 53.88px;
    font-size: max(30px, 4.94vw);
    line-height: 96%; /* 36.48px */
    letter-spacing: -0.76px;

    margin-bottom: 1.82vw;
  }

  @media (max-width: 428px) {
    height: max(28px, 7.21vw);
    font-size: max(20px, 5.14vw);
    letter-spacing: -0.44px;
    margin-bottom: 1.88vw;
  }
`;

export const PartDescription = styled.div`
  display: inline;
`;

export const Content = styled.span<{ weight: 'normal' | 'bold' }>`
  color: #fff;
  font-family: SUIT;
  font-size: calc(16px + 0.2vw);
  font-style: normal;
  font-weight: ${({ weight }) => weight};
  line-height: 162%; /* 30.78px */
  letter-spacing: -0.38px;

  @media (max-width: 768px) {
    font-size: max(14px, 2.21vw);
    letter-spacing: -0.34px;
  }

  @media (max-width: 428px) {
    font-size: max(9px, 2.33vw);
    letter-spacing: -0.2px;
  }
`;

export const Keyword = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  padding: calc(13px + 0.26vw) calc(20px + 0.26vw);
  border-radius: 33px;

  color: #1b2136;
  font-family: SUIT;
  font-size: calc(16px + 0.3vw);
  font-style: normal;
  font-weight: 600;
  line-height: 162%; /* 35.64px */
  letter-spacing: -0.44px;

  @media (max-width: 768px) {
    padding: 13.115px 18.215px;
    font-size: 16px;
    letter-spacing: -0.32px;
  }

  @media (max-width: 428px) {
    padding: max(6px, 1.76vw) max(8px, 2.44vw);
    font-size: 9px;
    letter-spacing: -0.18px;
  }
`;
