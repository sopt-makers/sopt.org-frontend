import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Root = styled.footer`
  width: 100%;
  min-height: 162rem;
  background-color: #202020;

  /* 태블릿 + 데스크탑 뷰 */
  @media (min-width: 766px) {
    scroll-snap-align: center;
  }

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    height: 264rem;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;

  /* 데스크탑 뷰 */
  @media (min-width: 1200px) {
    max-width: 1100rem;
    margin: 0rem auto;
    padding-top: 35rem;
  }

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    margin: 0rem 40rem;
    padding-top: 35rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    display: block;

    padding-top: 30rem;
    /* padding-left: 9rem; */
    padding-left: 8%;
    width: 327rem;
  }
`;

export const TitleButton = styled.button`
  cursor: pointer;
  line-height: 20rem;
  display: flex;
  align-items: center;

  color: ${colors.gray10};
  font-size: 14rem;
  font-weight: 700;

  span {
    margin-right: 5rem;
    font-size: 100%;
  }
`;

export const CopyrightText = styled.p`
  width: 100%;
  margin-top: 25rem;
  line-height: 180%;
  font-size: 14rem;
  font-weight: 400;

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 12rem;
  }
`;

export const ChannelsWrap = styled.div`
  width: 190rem;
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-top: 40rem;
  }
`;

export const ChannelTitleText = styled.p`
  margin-bottom: 25rem;
  line-height: 20rem;
  font-size: 16rem;
  font-weight: 500;

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-bottom: 20rem;
  }
`;
