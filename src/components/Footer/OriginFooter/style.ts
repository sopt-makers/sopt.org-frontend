import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const Root = styled.footer`
  width: 100%;
  min-height: 162px;
  background-color: #202020;

  /* 태블릿 + 데스크탑 뷰 */
  @media (min-width: 47.875rem) {
    scroll-snap-align: center;
  }

  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    height: 264px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;

  /* 데스크탑 뷰 */
  @media (min-width: 75rem) {
    max-width: 1100px;
    margin: 0px auto;
    padding-top: 35px;
  }

  /* 태블릿 뷰 */
  @media (max-width: 74.9375rem) and (min-width: 47.875rem) {
    margin: 0px 40px;
    padding-top: 35px;
  }

  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    display: block;

    padding-top: 30px;
    /* padding-left: 9px; */
    padding-left: 8%;
    width: 327px;
  }
`;

export const TitleButton = styled.button`
  cursor: pointer;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: ${colors.gray10};
  font-size: 14rem;
  font-weight: 700;

  span {
    margin-right: 5px;
    font-size: 100%;
  }
`;

export const CopyrightText = styled.p`
  width: 100%;
  margin-top: 25px;
  line-height: 180%;
  font-size: 14rem;
  font-weight: 400;

  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    font-size: 12rem;
  }
`;

export const ChannelsWrap = styled.div`
  width: 190px;
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    margin-top: 40px;
  }
`;

export const ChannelTitleText = styled.p`
  margin-bottom: 25px;
  line-height: 20px;
  font-size: 16rem;
  font-weight: 500;

  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    margin-bottom: 20px;
  }
`;
