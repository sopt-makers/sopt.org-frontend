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
  width: 1200rem;
  padding-top: 150rem;
  @media (max-width: 1280px) {
    width: 686rem;
    padding-top: 80rem;
  }
  @media (max-width: 766px) {
    width: 320rem;
    padding-top: 80rem;
  }
`;

export const ProjectHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 16rem;
  border-radius: 10rem;
  background: #242424;
  width: 100%;
  padding: 40rem;

  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    padding: 20rem;
  }

  & > div {
    & > h1 {
      margin-bottom: 8rem;
      color: #ffffff;
      font-size: 32rem;
      font-weight: 700;
      @media (max-width: 1280px) {
        font-size: 22rem;
      }
    }
    & > p {
      line-height: 24rem;
      color: #8e8e8e;
      font-size: 22rem;
      font-weight: 500;
      @media (max-width: 1280px) {
        font-size: 15rem;
      }
    }
  }
`;

export const ProjectImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 786rem;
  height: 443rem;
  object-fit: cover;
  margin: 0 auto 32rem auto;
  & > span {
    border-radius: 5rem;
    overflow: hidden;
  }
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    width: 686rem;
    height: 387rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 766px) {
    width: 320rem;
    height: 180rem;
  }
`;

export const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 240rem;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    margin-bottom: 160rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 766px) {
    flex-direction: column;
  }
`;

export const ToggleSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 30rem;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    margin-right: 20rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 766px) {
    margin: 0;
  }
`;

export const LogoImageWrapper = styled.div`
  position: absolute;
  top: 40rem;
  right: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  & > span {
    border-radius: 10rem;
  }
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    width: 56rem;
    height: 56rem;
    top: 20rem;
    right: 20rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 766px) {
    position: static;
    margin-bottom: 24rem;
  }
`;

const CommonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380rem;
  height: fit-content;
  border-radius: 8rem;
  background: #242424;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    width: 320rem;
  }
`;

export const ProjectOverview = styled(CommonWrapper)<{ isOverviewOpened: boolean }>`
  margin-bottom: 16rem;
  padding: 40rem;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    padding: ${({ isOverviewOpened }) => (isOverviewOpened ? '28rem' : '25rem 28rem 32rem 28rem')};
  }
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  & > button {
    width: 24rem;
    height: 24rem;
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
  font-size: 22rem;
  font-weight: 700;
  @media (max-width: 1280px) {
    font-size: 17rem;
  }
`;

export const ProjectOverviewDetail = styled.div<{ isOverviewOpened: boolean }>`
  margin-top: ${({ isOverviewOpened }) => isOverviewOpened && '32rem'};
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
    margin-right: 32rem;

    & > h1 {
      margin-bottom: 48rem;
      line-height: 18rem;
      color: #cccccc;
      font-size: 17rem;
      font-weight: 500;
      /* 태블릿 뷰 */
      @media (max-width: 1280px) {
        font-size: 14rem;
      }
      &:last-child {
        margin-bottom: ${({ isLinkExist }) => (isLinkExist ? '48rem' : '0')};
      }
    }
  }

  & > div:last-child > span {
    margin-bottom: 48rem;
    line-height: 18rem;
    color: #ffffff;
    font-size: 18rem;
    font-weight: 600;
    /* 태블릿 뷰 */
    @media (max-width: 1280px) {
      font-size: 15rem;
    }
    &:last-child {
      margin-bottom: ${({ isLinkExist }) => (isLinkExist ? '48rem' : '0')};
    }
  }
`;

export const ProjectLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20rem;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    row-gap: 17rem;
  }
`;

export const ProjectLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 9rem;
  background: #313131;
  cursor: pointer;
  padding: 6rem 4rem;
  width: 88rem;
  height: 100rem;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    width: 80rem;
    height: 94rem;
  }

  &:not(:last-child) {
    margin-right: 16rem;
    /* 태블릿 뷰 */
    @media (max-width: 1280px) {
      margin-right: 12rem;
    }
  }

  & > span {
    margin-top: 7rem;
    text-align: center;
    line-height: 19rem;
    color: #a9a9a9;
    font-size: 12rem;
    font-weight: 500;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 56rem;
  height: 56rem;
`;

export const ProjectTeam = styled(CommonWrapper)`
  margin-bottom: 16rem;
  padding: 40rem;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    padding: 28rem;
  }
`;

export const TeamMembers = styled.div<{ isTeamMemberOpened: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${({ isTeamMemberOpened }) => isTeamMemberOpened && '32rem'};
  height: ${({ isTeamMemberOpened }) => !isTeamMemberOpened && '0'};
  overflow: hidden;
`;

export const Members = styled.div`
  &:not(:last-child) {
    margin-bottom: 40rem;
  }
  & > h1 {
    color: #ffffff;
    font-size: 18rem;
    font-weight: 700;
    letter-spacing: -0.01rem;
    @media (max-width: 1280px) {
      font-size: 16rem;
    }
  }
`;

export const MemberDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 12rem;
  border-radius: 10rem;
  background: #313131;
  padding: 12rem 16rem;

  & > h1 {
    margin-bottom: 4rem;
    line-height: 24rem;
    color: #ffffff;
    font-size: 16rem;
    font-weight: 600;
    /* 태블릿 뷰 */
    @media (max-width: 1280px) {
      font-size: 15rem;
    }
  }
  & > p {
    line-height: 22rem;
    color: #cccccc;
    font-size: 16rem;
    font-weight: 500;
    @media (max-width: 1280px) {
      font-size: 14rem;
    }
  }
`;

export const ProjectDescription = styled(CommonWrapper)`
  width: 790rem;
  border: 2rem solid #3e3e3e;
  border-radius: 10rem;
  background-color: transparent;
  padding: 40rem;
  white-space: pre-wrap;
  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    width: 346rem;
    padding: 28rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 766px) {
    width: 320rem;
  }

  & > p {
    margin-top: 56rem;
    line-height: 180%;
    color: rgba(255, 255, 255, 0.8);
    font-size: 18rem;
    font-weight: 500;
    @media (max-width: 1280px) {
      margin-top: 32rem;
      font-size: 15rem;
    }
  }
`;
