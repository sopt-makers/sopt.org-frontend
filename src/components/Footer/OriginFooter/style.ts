import styled from '@emotion/styled';

export const Root = styled.footer`
  width: 100%;
  min-height: 162px;
  background-color: #2a2a2a;

  /* 태블릿 + 데스크탑 뷰 */
  @media (min-width: 766px) {
    scroll-snap-align: center;
  }

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    height: 264px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;

  /* 데스크탑 뷰 */
  @media (min-width: 1200px) {
    max-width: 1100px;
    margin: 0px auto;
    padding-top: 35px;
  }

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    margin: 0px 40px;
    padding-top: 35px;
  }

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
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

  color: ${({ theme }) => theme.colors.soptWhite};
  font-size: 14px;
  font-weight: 700;

  span {
    margin-right: 5px;
  }
`;

export const CopyrightText = styled.p`
  width: 100%;
  margin-top: 25px;
  line-height: 180%;
  font-size: 14px;
  font-weight: 400;

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 12px;
  }
`;

export const ChannelsWrap = styled.div`
  width: 190px;
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-top: 40px;
  }
`;

export const ChannelTitleText = styled.p`
  margin-bottom: 25px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 500;

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-bottom: 20px;
  }
`;
