import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  font-family: 'SUIT';
`;

export const UpButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 30px;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  background: #242424;
  width: 56px;
  height: 56px;

  & > span {
    display: none;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  border-radius: 10px;
  background: #242424;
  padding: 20px;
  width: 100%;

  & > h1 {
    margin-bottom: 8px;
    color: #ffffff;
    font-size: 22px;
    font-weight: 700;
  }
  & > p {
    line-height: 24px;
    color: #8e8e8e;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const LogoImageWrapper = styled.div`
  margin-bottom: 24px;
  width: 56px;
  height: 56px;
  object-fit: cover;
`;

const CommonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  background: #242424;
  width: 320px;
`;

export const ProjectOverview = styled(CommonWrapper)<{ isOverviewOpened: boolean }>`
  margin-bottom: 16px;
  padding: ${({ isOverviewOpened }) => (isOverviewOpened ? '28px' : '25px 28px 32px 28px')};
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
`;

export const TeamMemberToggleImage = styled.div<{ isTeamMemberOpened: boolean }>`
  transform: ${({ isTeamMemberOpened }) => (isTeamMemberOpened ? 'rotate(0deg)' : 'rotate(90deg)')};
`;

export const Title = styled.h1`
  color: #fcfcfc;
  font-size: 17px;
  font-weight: 700;
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

  & > div:first-child {
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
  padding: 28px;
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
    font-size: 16px;
    font-weight: 700;
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
    font-size: 15px;
    font-weight: 600;
  }
  & > p {
    line-height: 22px;
    color: #cccccc;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const ProjectDescription = styled(CommonWrapper)`
  border: 2px solid #3e3e3e;
  border-radius: 10px;
  background-color: transparent;
  padding: 28px;

  & > p {
    margin-top: 32px;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
    font-weight: 500;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  background: linear-gradient(0deg, #202020, #202020), #292929;
  padding: 48px 0 0 30px;
  width: 100%;

  & > p {
    line-height: 20px;
    color: #fcfcfc;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const Rule = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const RuleLink = styled.div`
  display: flex;
  align-items: center;
  & > a {
    text-decoration: none;
    color: #fff;
  }
`;

export const Channels = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0;
  width: 100%;

  & > h1 {
    line-height: 17px;
    color: #fcfcfc;
    font-size: 14px;
    font-weight: 500;
  }
  & > div {
    display: flex;
    margin-top: 16px;
  }
`;

export const Channel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;
