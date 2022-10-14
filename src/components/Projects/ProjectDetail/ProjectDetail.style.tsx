import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  font-family: 'SUIT';
`;

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  border-radius: 10px;
  background: #242424;
  padding: 20px;
  width: 100%;
  height: 198px;

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

const CommonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #242424;
  width: 320px;
`;

export const ProjectOverview = styled(CommonWrapper)`
  padding: 25px 28px 32px 28px;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  width: 100%;

  & > button {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.h1`
  color: #fcfcfc;
  font-size: 17px;
  font-weight: 700;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > div {
    display: flex;
    justify-content: space-between;

    margin-bottom: 32px;
    height: 15px;

    & > h1 {
      color: #cccccc;
      font-size: 14px;
      font-weight: 500;
    }
    & > span {
      color: #ffffff;
      font-size: 15px;
      font-weight: 600;
    }
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
  padding: 6px 4px;
  width: 80px;
  height: 94px;
`;

export const ProjectTeam = styled(CommonWrapper)`
  padding: 28px;
`;

export const Members = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
  border-radius: 10px;
  background: #313131;
  padding: 12px 16px;

  & > h1 {
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
  }
  & > p {
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
