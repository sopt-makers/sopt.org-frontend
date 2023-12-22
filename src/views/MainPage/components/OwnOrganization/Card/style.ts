import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const CardWrapper = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 19px;
  padding: 39px 0;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 1440px) {
    width: 512px;
    height: 432px;
    padding-top: 39px;
    padding-bottom: 23px;
  }

  @media (max-width: 768px) {
    width: max(416px, min(100vw - 200px, 512px));
    height: calc(max(432px, min(100vw - 200px, 512px)) * 0.84);
  }

  @media (max-width: 428px) {
    width: 293px;
    height: 250px;
    padding-top: 20px;
    padding-bottom: 13px;
  }
`;

export const FooterKorName = styled.div`
  width: 144px;
  text-align: center;
  padding: 16px 0;
  color: ${colors.white};
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(117, 97, 79, 0.33);
  backdrop-filter: blur(2.949289321899414px);
  border-radius: 14px;

  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.904px;

  @media (max-width: 1440px) {
    width: 128px;
    padding: 12px 0;
    font-size: 21px;
    line-height: 24.425px;
  }

  @media (max-width: 428px) {
    border-radius: 6px;
    width: 74px;
    padding: 7px 0;
    font-size: 12px;
    line-height: 13px;

    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: -0.44px;
  }
`;

export const FooterEngName = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.288px; /* 138.027% */
  letter-spacing: -1.025px;
  padding-bottom: 4px;

  @media (max-width: 1440px) {
    font-size: 19px;
    line-height: 13.9px;
  }

  @media (max-width: 428px) {
    font-size: 11px;
    line-height: 14.9px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 30px;
  padding-right: 42px;

  @media (max-width: 1440px) {
    padding-left: 25px;
    padding-right: 27px;
  }

  @media (max-width: 428px) {
    padding-left: 14px;
    padding-right: 15px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 41px;
  flex: 1;
  word-break: keep-all;

  @media (max-width: 428px) {
    padding: 0 20px;
  }
`;

export const TextWrapper = styled.span<{ weight: 'normal' | 'bold' }>`
  font-size: 20px;
  color: ${colors.white};
  font-weight: ${({ weight }) => weight};
  line-height: 35px; /* 175% */
  letter-spacing: -0.8px;

  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 31px; /* 172.222% */
    letter-spacing: -0.72px;
  }

  @media (max-width: 428px) {
    font-size: 11px;
    line-height: 18.103px; /* 164.575% */
    letter-spacing: -0.44px;
  }
`;
