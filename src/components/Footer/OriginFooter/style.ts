import styled from '@emotion/styled';

export const Root = styled.footer`
  width: 100%;
  min-height: 163px;
  background-color: #2a2a2a;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    scroll-snap-align: center;
  }

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    height: 192px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;

  /* 데스크탑 뷰 */
  @media (min-width: 1280px) {
    margin: 0px 240px;
    padding-top: 35px;
  }

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    flex-direction: column;
    justify-content: start;

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
  font-size: 16px;
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
  font-weight: 100;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    font-size: 12px;
  }
`;

export const ChannelsWrap = styled.div`
  width: 190px;
`;

export const ChannelTitleText = styled.p`
  margin-bottom: 25px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 500;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    margin-bottom: 20px;
  }
`;
