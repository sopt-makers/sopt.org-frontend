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
  grid-template-rows: 202rem 32rem 54rem 30rem;

  width: 352rem;
  height: 345rem;
  padding: 14rem 14rem 11rem 14rem;
  border: 1rem solid ${colors.gray700};
  border-radius: 20rem;

  cursor: pointer;

  @media (max-width: 899px) {
    grid-template-areas:
      'thumbnail header'
      'summary summary'
      'detail detail';
    grid-template-rows: none;
    grid-template-columns: auto 1fr;
    grid-gap: 12rem;

    width: 100%;
    height: auto;
    padding: 0 0 10rem 0;
    border: none;
    border-bottom: 1rem solid ${colors.gray900};
    border-radius: 0;
  }
`;

export const ProjectThumbnail = styled(Image)`
  grid-area: thumbnail;
  border-radius: 8rem;
  object-fit: cover;

  @media (max-width: 899px) {
    width: 40rem;
    height: 40rem;
  }
`;

export const ProjectHeader = styled.div`
  grid-area: header;
  display: flex;
  gap: 12rem;
`;

export const ProjectText = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
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
  line-height: 28rem; /* 155.556% */
  letter-spacing: -0.36rem;
`;

export const ProjectType = styled.div`
  color: ${colors.gray400};

  /* Label/3_SB */
  font-family: SUIT;
  font-size: 12rem;
  font-style: normal;
  font-weight: 600;
  line-height: 16rem; /* 133.333% */
  letter-spacing: -0.24rem;
`;

export const Divider = styled.span`
  padding: 0 2rem 0 2rem;
`;

export const ProjectSummary = styled.div`
  grid-area: summary;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  height: 44rem;
  color: ${colors.gray50};

  /* Body/3_R */
  font-family: SUIT;
  font-size: 14rem;
  font-style: normal;
  font-weight: 400;
  line-height: 22rem; /* 157.143% */
  letter-spacing: -0.21rem;

  @media (max-width: 899px) {
    height: auto;
    color: ${colors.gray30};

    /* Body/4_R */
    font-family: SUIT;
    font-size: 13rem;
    font-style: normal;
    font-weight: 400;
    line-height: 20rem; /* 153.846% */
    letter-spacing: -0.195rem;
  }
`;

export const ProjectDetail = styled.div`
  grid-area: detail;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30rem;
`;

export const ServiceDetail = styled.div`
  display: flex;
  gap: 6rem;
`;
