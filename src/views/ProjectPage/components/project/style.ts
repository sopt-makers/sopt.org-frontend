import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';

export const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 352px;
  height: 345px;
  padding: 14px;
  border: 1px solid ${colors.gray700};
  border-radius: 20px;

  cursor: pointer;
`;

export const ProjectThumbnail = styled(Image)`
  border-radius: 8px;

  object-fit: cover;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ProjectTitle = styled.div`
  color: ${colors.gray10};

  /* Heading/6_B */
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.36px;
`;

export const ProjectType = styled.div`
  color: ${colors.gray400};

  /* Label/3_SB */
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.24px;
`;

export const Divider = styled.span`
  padding: 0 2px 0 2px;
`;

export const ProjectSummary = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  color: ${colors.gray50};

  /* Body/3_R */
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.21px;
`;