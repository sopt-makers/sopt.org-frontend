import styled from '@emotion/styled';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  /* 태블릿 뷰 */
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    gap: 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    gap: 8px;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 240px 300px;
  row-gap: 25px;
  column-gap: 220px;
  border-radius: 30px;
  background-color: #181818;
  padding: 85px 88px;

  /* 태블릿 뷰 */
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    grid-template-columns: 300px auto;
    padding: 38px 54px;
    gap: 15px;
    border-radius: 20px;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    grid-template-columns: 1fr;
    row-gap: 0px;
    padding: 38px 0 6px 0;
    border-radius: 12px;
    text-align: center;
  }
`;

export const OddText = styled.div`
  color: #fff;
  font-size: 24rem;
  font-weight: 700;
  line-height: 150%; /* 42px */
  &::before {
    content: '🗓 ';
  }
  /* 태블릿 뷰 */
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    color: #fff;
    font-size: 18rem;
    font-weight: 700;
    line-height: 30px; /* 166.667% */
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    color: #fff;
    font-size: 16rem;
    font-weight: 700;
    line-height: 32px;
  }
`;

export const Highlight = styled.span<{ mainColor: string }>`
  color: ${({ mainColor }) => mainColor};
  font-size: 24rem;
  font-weight: 400;
  letter-spacing: -0.48px;
  text-decoration-line: underline;
  /* 태블릿 뷰 */
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    font-size: 18rem;
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    font-size: 16rem;
    line-height: 32px;
  }
`;

export const EvenText = styled.div`
  color: #fff;
  font-size: 24rem;
  font-weight: 400;
  line-height: 150%; /* 42px */
  /* 태블릿 뷰 */
  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    font-size: 18rem;
    font-weight: 300;
    line-height: 30px; /* 166.667% */
  }
  /* 모바일 뷰 */
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    font-size: 16rem;
    font-style: normal;
    font-weight: 300;
    line-height: 32px;

    margin-bottom: 32px;
  }
`;
