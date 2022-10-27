import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FadeIn, FadeOut } from '@src/lib/styles/animation';
export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'SUIT';
  width: calc(100% - 360px);
  height: 100vh;
  margin: 0 auto;

  /* 모바일 뷰 */
  @media (max-width: 799px) {
    width: 320px;
  }
`;

export const UpButton = styled.button<{ isScrolled: boolean }>`
  position: fixed;
  right: 20px;
  bottom: 30px;
  border-radius: 52px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  background: #242424;
  padding: 16px 32px;
  z-index: 9;
  ${({ isScrolled }) =>
    isScrolled
      ? css`
          ${FadeIn}
          animation:fadein 0.4s;
        `
      : css`
          ${FadeOut}
          animation:fadeout 0.4s;
          animation-fill-mode: forwards;
        `}

  /* 모바일 뷰 */
  @media (max-width: 799px) {
    padding: 16px;
  }

  & > span {
    font-family: 'SUIT';
    font-weight: 600;
    font-size: 24px;
    line-height: 48px;
    color: #ffffff;
    /* 모바일 뷰 */
    @media (max-width: 799px) {
      display: none;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  border-radius: 10px;
  background: #242424;
  width: 100%;
  padding: 40px;

  /* 데스크탑 뷰 */
  @media (min-width: 800px) {
    position: relative;
  }

  /* 모바일 뷰 */
  @media (max-width: 799px) {
    padding: 20px;
  }

  & > div {
    & > h1 {
      margin-bottom: 8px;
      color: #ffffff;
      font-size: 32px;
      font-weight: 700;
      @media (max-width: 799px) {
        font-size: 22px;
      }
    }
    & > p {
      line-height: 24px;
      color: #8e8e8e;
      font-size: 22px;
      font-weight: 500;
      @media (max-width: 799px) {
        font-size: 15px;
      }
    }
  }
`;

export const ProjectImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 786px;
  height: 443px;
  margin: 0 auto 32px auto;
  & > span {
    border-radius: 5px;
    overflow: hidden;
  }
  /* 모바일 뷰 */
  @media (max-width: 799px) {
    width: 320px;
    height: 216px;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  margin-bottom: 48px;
  /* 모바일 뷰 */
  @media (max-width: 799px) {
    flex-direction: column;
  }
`;

export const ToggleSection = styled.section`
  display: flex;
  flex-direction: column;
  /* 데스크탑 뷰 */
  @media (min-width: 800px) {
    margin-right: 30px;
  }
`;

export const LogoImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  object-fit: cover;
  /* 데스크탑 뷰 */
  @media (min-width: 800px) {
    position: absolute;
    top: 40px;
    right: 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: 799px) {
    margin-bottom: 24px;
  }
`;

const CommonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  background: #242424;
`;

export const ProjectOverview = styled(CommonWrapper)<{ isOverviewOpened: boolean }>`
  margin-bottom: 16px;
  padding: 40px;
  /* 모바일 뷰 */
  @media (max-width: 799px) {
    padding: ${({ isOverviewOpened }) => (isOverviewOpened ? '28px' : '25px 28px 32px 28px')};
  }
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > button {
    width: 24px;
    height: 24px;
  }
`;
export const OverviewToggleImage = styled.div<{ isOverviewOpened: boolean }>`
  transform: ${({ isOverviewOpened }) => (isOverviewOpened ? 'rotate(0deg)' : 'rotate(90deg)')};
  cursor: pointer;
`;

export const TeamMemberToggleImage = styled.div<{ isTeamMemberOpened: boolean }>`
  transform: ${({ isTeamMemberOpened }) => (isTeamMemberOpened ? 'rotate(0deg)' : 'rotate(90deg)')};
  cursor: pointer;
`;

export const Title = styled.h1`
  color: #fcfcfc;
  font-size: 22px;
  font-weight: 700;
  @media (max-width: 799px) {
    font-size: 17px;
  }
`;

export const ProjectOverviewDetail = styled.div<{ isOverviewOpened: boolean }>`
  margin-top: ${({ isOverviewOpened }) => isOverviewOpened && '32px'};
  height: ${({ isOverviewOpened }) => !isOverviewOpened && '0'};
  overflow: hidden;
`;

export const ProjectInfo = styled.div`
  display: flex;

  & > div {
    display: flex;
    flex-direction: column;
  }

  & > div:first-of-type {
    margin-right: 32px;

    & > h1 {
      margin-bottom: 48px;
      line-height: 18px;
      color: #cccccc;
      font-size: 14px;
      font-weight: 500;
    }
  }

  & > div:last-child > span {
    margin-bottom: 48px;
    line-height: 18px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
  }
`;

export const ProjectLinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProjectLink = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  background: #313131;
  cursor: pointer;
  padding: 6px 4px;
  width: 80px;
  height: 94px;

  & > span {
    margin-top: 7px;
    text-align: center;
    line-height: 19px;
    color: #a9a9a9;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const ProjectTeam = styled(CommonWrapper)`
  margin-bottom: 16px;
  padding: 40px;
  /* 모바일 뷰 */
  @media (max-width: 799px) {
    padding: 28px;
  }
`;

export const TeamMembers = styled.div<{ isTeamMemberOpened: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${({ isTeamMemberOpened }) => isTeamMemberOpened && '32px'};
  height: ${({ isTeamMemberOpened }) => !isTeamMemberOpened && '0'};
  overflow: hidden;
`;

export const Members = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  & > h1 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    @media (max-width: 799px) {
      font-size: 16px;
    }
  }
`;

export const MemberDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 12px;
  border-radius: 10px;
  background: #313131;
  padding: 12px 16px;

  & > h1 {
    margin-bottom: 4px;
    line-height: 24px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    /* 모바일 뷰 */
    @media (max-width: 799px) {
      font-size: 15px;
    }
  }
  & > p {
    line-height: 22px;
    color: #cccccc;
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 799px) {
      font-size: 14px;
    }
  }
`;

export const ProjectDescription = styled(CommonWrapper)`
  border: 2px solid #3e3e3e;
  border-radius: 10px;
  background-color: transparent;
  padding: 40px;
  /* 모바일 뷰 */
  @media (max-width: 799px) {
    padding: 28px;
  }

  & > p {
    margin-top: 32px;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 18px;
    font-weight: 500;
    @media (max-width: 799px) {
      font-size: 15px;
    }
  }
`;
