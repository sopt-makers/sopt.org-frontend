import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';
import Link from 'next/link';

export const ProjectCard = styled(Link)`
  display: grid;
  grid-template-areas:
    'thumbnail'
    'header'
    'summary'
    'detail';
  grid-template-rows: 202px 32px 54px 30px;

  width: 352px;
  height: 345px;
  padding: 14px 14px 11px 14px;
  border: 1px solid ${colors.gray700};
  border-radius: 20px;

  cursor: pointer;

  @media (max-width: 56.1875rem) {
    grid-template-areas:
      'thumbnail header'
      'summary summary'
      'detail detail';
    grid-template-rows: none;
    grid-template-columns: auto 1fr;
    grid-gap: 12px;

    width: 100%;
    height: auto;
    padding: 0 0 10px 0;
    border: none;
    border-bottom: 1px solid ${colors.gray900};
    border-radius: 0;
  }
`;

export const ProjectThumbnail = styled(Image)`
  grid-area: thumbnail;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 56.1875rem) {
    width: 40px;
    height: 40px;
  }
`;

export const ProjectHeader = styled.div`
  grid-area: header;
  display: flex;
  gap: 12px;
`;

export const ProjectText = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ProjectTitle = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;

  color: ${colors.gray10};

  /* Heading/6_B */
  font-family: SUIT;
  font-size: 18rem;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.36px;
`;

export const ProjectType = styled.div`
  color: ${colors.gray400};

  /* Label/3_SB */
  font-family: SUIT;
  font-size: 12rem;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.24px;

  & > * {
    font-size: 100%;
  }
`;

export const Divider = styled.span`
  padding: 0 2px 0 2px;
`;

export const ProjectSummary = styled.div`
  grid-area: summary;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  height: 44px;
  color: ${colors.gray50};

  /* Body/3_R */
  font-family: SUIT;
  font-size: 14rem;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.21px;

  @media (max-width: 56.1875rem) {
    height: auto;
    color: ${colors.gray30};

    /* Body/4_R */
    font-family: SUIT;
    font-size: 13rem;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 153.846% */
    letter-spacing: -0.195px;
  }
`;

export const ProjectDetail = styled.div`
  grid-area: detail;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`;

export const ServiceDetail = styled.div`
  display: flex;
  gap: 6px;
`;
