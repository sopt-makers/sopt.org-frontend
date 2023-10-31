import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px 28px;
  width: 1112px;

  @media (max-width: 1279px) and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    width: 732px;
  }

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
    gap: 16px;
    width: 100%;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 352px;
  height: 308px;
  padding: 14px;
  border: 1px solid ${colors.gray700};
  border-radius: 20px;

  @media (max-width: 899px) {
    width: 100%;
    height: 88px;
    padding: 0 0 10px 0;
    border: none;
    border-bottom: 1px solid ${colors.gray900};
    border-radius: 0;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 899px) {
    gap: 12px;
  }
`;

export const ProjectThumbnail = styled.div`
  width: 324px;
  height: 192px;
  background-color: ${colors.gray800};
  border-radius: 8px;

  @media (max-width: 899px) {
    display: none;
  }
`;

export const ProjectLogo = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${colors.gray800};
  border-radius: 8px;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  gap: 12px;
`;

export const ProjectText = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ProjectTitle = styled.div`
  width: 100px;
  height: 28px;
  background-color: ${colors.gray800};
  border-radius: 8px;
`;

export const ProjectType = styled.div`
  width: 39px;
  height: 28px;
  background-color: ${colors.gray800};
  border-radius: 8px;
`;

export const ProjectSummary = styled.div`
  width: 270px;
  height: 22px;
  background-color: ${colors.gray800};
  border-radius: 8px;

  @media (max-width: 899px) {
    width: 40%;
  }
`;
