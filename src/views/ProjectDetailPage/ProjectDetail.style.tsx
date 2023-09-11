import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  padding-top: 150px;
  @media (max-width: 1280px) {
    width: 686px;
    padding-top: 80px;
  }
  @media (max-width: 766px) {
    width: 320px;
    padding-top: 80px;
  }
`;

export const ProjectHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  border-radius: 10px;
  background: #242424;
  width: 100%;
  padding: 40px;

  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    padding: 20px;
  }

  & > div {
    & > h1 {
      margin-bottom: 8px;
      color: #ffffff;
      font-size: 32px;
      font-weight: 700;
      @media (max-width: 1280px) {
        font-size: 22px;
      }
    }
    & > p {
      line-height: 24px;
      color: #8e8e8e;
      font-size: 22px;
      font-weight: 500;
      @media (max-width: 1280px) {
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
  object-fit: cover;
  margin: 0 auto 32px auto;
  & > span {
    border-radius: 5px;
    overflow: hidden;
  }
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    width: 686px;
    height: 387px;
  }
  /* 모바일 뷰 */
  @media (max-width: 766px) {
    width: 320px;
    height: 180px;
  }
`;

export const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 240px;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    margin-bottom: 160px;
  }
  /* 모바일 뷰 */
  @media (max-width: 766px) {
    flex-direction: column;
  }
`;

export const ToggleSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    margin-right: 20px;
  }
  /* 모바일 뷰 */
  @media (max-width: 766px) {
    margin: 0;
  }
`;

export const LogoImageWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  & > span {
    border-radius: 10px;
  }
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    width: 56px;
    height: 56px;
    top: 20px;
    right: 20px;
  }
  /* 모바일 뷰 */
  @media (max-width: 766px) {
    position: static;
    margin-bottom: 24px;
  }
`;

const CommonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: fit-content;
  border-radius: 8px;
  background: #242424;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    width: 320px;
  }
`;

export const ProjectOverview = styled(CommonWrapper)<{ isOverviewOpened: boolean }>`
  margin-bottom: 16px;
  padding: 40px;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    padding: ${({ isOverviewOpened }) => (isOverviewOpened ? '28px' : '25px 28px 32px 28px')};
  }
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  & > button {
    width: 24px;
    height: 24px;
  }
`;
export const OverviewToggleImage = styled.div<{ isOverviewOpened: boolean }>`
  transform: ${({ isOverviewOpened }) => (isOverviewOpened ? 'rotate(90deg)' : 'rotate(0deg)')};
  cursor: pointer;
`;

export const TeamMemberToggleImage = styled.div<{ isTeamMemberOpened: boolean }>`
  transform: ${({ isTeamMemberOpened }) => (isTeamMemberOpened ? 'rotate(90deg)' : 'rotate(0deg)')};
  cursor: pointer;
`;

export const Title = styled.h1`
  color: #fcfcfc;
  font-size: 22px;
  font-weight: 700;
  @media (max-width: 1280px) {
    font-size: 17px;
  }
`;

export const ProjectOverviewDetail = styled.div<{ isOverviewOpened: boolean }>`
  margin-top: ${({ isOverviewOpened }) => isOverviewOpened && '32px'};
  height: ${({ isOverviewOpened }) => !isOverviewOpened && '0'};
  overflow: hidden;
`;

export const ProjectInfo = styled.div<{ isLinkExist: boolean }>`
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
      font-size: 17px;
      font-weight: 500;
      /* 태블릿 뷰 */
      @media (max-width: 1280px) {
        font-size: 14px;
      }
      &:last-child {
        margin-bottom: ${({ isLinkExist }) => (isLinkExist ? '48px' : '0')};
      }
    }
  }

  & > div:last-child > span {
    margin-bottom: 48px;
    line-height: 18px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    /* 태블릿 뷰 */
    @media (max-width: 1280px) {
      font-size: 15px;
    }
    &:last-child {
      margin-bottom: ${({ isLinkExist }) => (isLinkExist ? '48px' : '0')};
    }
  }
`;

export const ProjectLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    row-gap: 17px;
  }
`;

export const ProjectLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  background: #313131;
  cursor: pointer;
  padding: 6px 4px;
  width: 88px;
  height: 100px;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    width: 80px;
    height: 94px;
  }

  &:not(:last-child) {
    margin-right: 16px;
    /* 태블릿 뷰 */
    @media (max-width: 1280px) {
      margin-right: 12px;
    }
  }

  & > span {
    margin-top: 7px;
    text-align: center;
    line-height: 19px;
    color: #a9a9a9;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 56px;
`;

export const ProjectTeam = styled(CommonWrapper)`
  margin-bottom: 16px;
  padding: 40px;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
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
    letter-spacing: -0.01px;
    @media (max-width: 1280px) {
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
    /* 태블릿 뷰 */
    @media (max-width: 1280px) {
      font-size: 15px;
    }
  }
  & > p {
    line-height: 22px;
    color: #cccccc;
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 1280px) {
      font-size: 14px;
    }
  }
`;

export const ProjectDescription = styled(CommonWrapper)`
  width: 790px;
  border: 2px solid #3e3e3e;
  border-radius: 10px;
  background-color: transparent;
  padding: 40px;
  white-space: pre-wrap;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    width: 346px;
    padding: 28px;
  }
  /* 모바일 뷰 */
  @media (max-width: 766px) {
    width: 320px;
  }

  & > p {
    margin-top: 56px;
    line-height: 180%;
    color: rgba(255, 255, 255, 0.8);
    font-size: 18px;
    font-weight: 500;
    @media (max-width: 1280px) {
      margin-top: 32px;
      font-size: 15px;
    }
  }
`;
