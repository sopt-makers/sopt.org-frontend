import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const PartCarousel = styled.div`
  width: 100%;
  height: 428px;

  padding: 77px 100px 62px 157px;
  border-radius: 19px;
  background: linear-gradient(98deg, #1a2035 33.84%, #304f84 96.92%);
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
