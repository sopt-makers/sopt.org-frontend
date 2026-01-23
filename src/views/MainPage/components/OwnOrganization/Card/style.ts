import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const CardWrapper = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 19px;
  padding: 39px 0;
  max-width: 712px;
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    max-width: 511px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    max-width: 511px;
    height: 434px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    max-width: 294px;
    height: 249px;
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

  font-size: 22rem;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.904px;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    width: 128px;
    padding: 12px 0;
    font-size: 21rem;
    line-height: 24.425px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    border-radius: 12px;
    width: 96px;
    padding: 10px 0;
    font-size: 18rem;
    line-height: 24.425px;
    font-size: 18rem;
    line-height: 20px;
    letter-spacing: -0.904px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    border-radius: 6px;
    width: 74px;
    padding: 7px 0;
    font-size: 12rem;
    line-height: 13px;

    font-size: 11rem;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: -0.44px;
  }
`;

export const FooterEngName = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-family: SUIT;
  font-size: 20rem;
  font-style: normal;
  font-weight: 400;
  line-height: 28.288px; /* 138.027% */
  letter-spacing: -1.025px;
  padding-bottom: 4px;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    font-size: 19rem;
    line-height: 13.9px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    font-size: 17rem;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    font-size: 11rem;
    line-height: 14.9px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 30px;
  padding-right: 42px;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    padding-left: 25px;
    padding-right: 27px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    padding-left: 14px;
    padding-right: 15px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 41px;
  flex: 1;
  word-break: keep-all;

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    padding: 0 20px;
  }
`;

export const TextWrapper = styled.span<{ weight: 'normal' | 'bold' }>`
  font-size: 20rem;
  color: ${colors.white};
  font-weight: ${({ weight }) => weight};
  line-height: 35px; /* 175% */
  letter-spacing: -0.8px;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    font-size: 18rem;
    line-height: 31px; /* 172.222% */
    letter-spacing: -0.72px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    font-size: 16rem;
    line-height: 26px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    font-size: 11rem;
    line-height: 18.103px; /* 164.575% */
    letter-spacing: -0.44px;
  }
`;
