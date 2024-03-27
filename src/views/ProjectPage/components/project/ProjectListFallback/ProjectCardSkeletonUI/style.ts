import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50rem 28rem;
  width: 1112rem;

  @media (max-width: 1279px) and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    width: 732rem;
  }

  @media (max-width: 899px) {
    grid-template-columns: 1fr;
    gap: 16rem;
    width: 100%;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;

  width: 352rem;
  height: 308rem;
  padding: 14rem;
  border: 1rem solid ${colors.gray700};
  border-radius: 20rem;

  @media (max-width: 899px) {
    width: 100%;
    height: 88rem;
    padding: 0 0 10rem 0;
    border: none;
    border-bottom: 1rem solid ${colors.gray900};
    border-radius: 0;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 899px) {
    gap: 12rem;
  }
`;

export const ProjectThumbnail = styled.div`
  width: 324rem;
  height: 192rem;
  background-color: ${colors.gray900};
  border-radius: 8rem;

  @media (max-width: 899px) {
    display: none;
  }
`;

export const ProjectLogo = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: ${colors.gray900};
  border-radius: 8rem;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  gap: 12rem;
`;

export const ProjectText = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
`;

export const ProjectTitle = styled.div`
  width: 100rem;
  height: 28rem;
  background-color: ${colors.gray900};
  border-radius: 8rem;
`;

export const ProjectType = styled.div`
  width: 39rem;
  height: 28rem;
  background-color: ${colors.gray900};
  border-radius: 8rem;
`;

export const ProjectSummary = styled.div`
  width: 270rem;
  height: 22rem;
  background-color: ${colors.gray900};
  border-radius: 8rem;

  @media (max-width: 899px) {
    width: 40%;
  }
`;
