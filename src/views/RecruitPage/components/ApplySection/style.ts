import styled from '@emotion/styled';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const ApplyButton = styled.a<{ main: string }>`
  width: 220px;
  padding: 24px 0;
  border-radius: 50px;
  color: white;
  text-align: center;
  font-size: 22rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 22px */
  letter-spacing: -0.44px;
  background-color: ${({ main }) => main};
  z-index: 2;
  /* 태블릿 뷰 */
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    font-size: 18rem;
    width: 180px;
    padding: 20px 0;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    font-size: 16rem;
    width: 160px;
    padding: 16px 0;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 62px 0 36px 0;

  text-align: center;
  color: #fcfcfc;
  text-align: center;
  font-size: 43rem;
  font-weight: 700;
  line-height: 140%; /* 60.2px */
  letter-spacing: -0.86px;
  z-index: 2;
  word-break: keep-all;
  /* 태블릿 뷰 */
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    margin-top: 32px;
    font-size: 28rem;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    margin-top: 26px;
    font-size: 28rem;
  }
`;

export const Wrapper = styled.div<{ imgRecruitBg: string }>`
  width: 100vw;
  height: 580px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  background-image: url(${({ imgRecruitBg }) => imgRecruitBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

  /* 태블릿 뷰 */
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    height: 302px;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    margin-top: 48px;
    font-size: 28rem;
    height: 409px;
  }
`;
