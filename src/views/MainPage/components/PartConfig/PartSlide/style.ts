import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { motion } from 'framer-motion';

export const PartSlide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  position: relative;

  width: 100vw;
  height: 428px;

  padding: 77px 0 62px 0;
  border-radius: 19px;
  background: linear-gradient(98deg, #1a2035 33.84%, #304f84 96.92%);
`;

export const LeftArrow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  & > svg:hover {
    cursor: pointer;
  }
`;

export const RightArrow = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;

  & > svg:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-left: 84px;
`;

export const PartDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const PartTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const PartBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: fit-content;
  padding: 6px 15px;

  border-radius: 10.823px;
  border: 1.281px solid ${colors.white};
  background: rgba(255, 255, 255, 0.2);

  color: ${colors.white};
`;

export const PartTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #fff;
  font-family: SUIT;
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 56px */
  letter-spacing: -1.12px;
`;

export const PartDescription = styled.div`
  width: 460px;

  color: #fff;
  font-family: SUIT;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 162%; /* 30.78px */
  letter-spacing: -0.38px;
`;

export const Keyword = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 25px;
  border-radius: 33px;

  color: #1b2136;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 162%; /* 35.64px */
  letter-spacing: -0.44px;
`;
