import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';
import icSchool from '@src/assets/icons/ic_school.svg';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40rem 0 30rem 0;

  background: #181818;
  border-radius: 10rem;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    padding: 30rem 0 22rem 0;
  }
  /* 모바일 뷰 */
  @media (max-width: 427.9px) {
    padding: 17rem 0 14rem 0;
  }
`;

export const ProfileImage = styled(Image)`
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  position: relative;

  width: 180rem;
  height: 180rem;

  border-radius: 50%;
  overflow: hidden;

  /* 태블릿, 모바일 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    width: 120rem;
    height: 120rem;
  }
  /* 태블릿, 모바일 뷰 */
  @media (max-width: 427.9px) {
    width: 80rem;
    height: 80rem;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  margin: 40rem 0 16rem 0;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    margin: 24rem 0 10rem 0;
    gap: 3rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 427.9px) {
    margin: 13rem 0 7rem 0;
    gap: 2rem;
  }
`;

export const Position = styled.span`
  padding: 6rem 7rem;
  color: ${colors.white};

  text-align: center;
  font-size: 17rem;
  font-weight: 600;
  line-height: 26rem; /* 152.941% */
  letter-spacing: -0.34rem;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    padding: 4rem;
    font-size: 12.413rem;
    line-height: 18.984rem; /* 152.941% */
    letter-spacing: -0.248rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 427.9px) {
    padding: 3rem;
    font-size: 7.535rem;
    line-height: 11.524rem; /* 152.941% */
    letter-spacing: -0.151rem;
  }
`;

export const Name = styled.strong`
  text-align: center;
  font-size: 28rem;

  color: ${colors.white};
  font-weight: 600;
  line-height: 100%; /* 28rem */
  letter-spacing: -0.28rem;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    font-size: 18rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 427.9px) {
    font-size: 16rem;
  }
`;

export const Desc = styled.span`
  text-align: center;

  margin: 16rem 0 30rem 0;
  font-size: 15rem;
  font-style: normal;
  line-height: 26rem; /* 173.333% */
  letter-spacing: -0.3rem;
  color: ${colors.white};
  background-color: #222220;
  padding: 10rem 16rem;
  border-radius: 10rem;
  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    margin: 12rem 0 28rem 0;
    font-size: 10.952rem;
    font-style: normal;
    font-weight: 400;
    line-height: 18.984rem; /* 173.333% */
    letter-spacing: -0.219rem;
    padding: 7rem 12rem;
    border-radius: 8rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 427.9px) {
    margin: 8rem 0 18rem 0;
    font-size: 6.648rem;
    font-style: normal;
    font-weight: 400;
    line-height: 11.524rem; /* 173.333% */
    letter-spacing: -0.133rem;
    padding: 4rem 7rem;
    border-radius: 4rem;
  }
`;

export const CurrentProject = styled.span`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${icSchool});
    background-repeat: no-repeat;
    background-size: contain;
    width: 24rem;
    height: 24rem;
    /* 태블릿 뷰 */
    @media (max-width: 768px) and (min-width: 428px) {
      width: 18rem;
      height: 18rem;
    }
    /* 모바일 뷰 */
    @media (max-width: 427.9px) {
      width: 12rem;
      height: 12rem;
    }
  }

  height: 24rem;
  padding-left: 28rem;
  color: #bcbcbc;
  font-size: 15rem;
  font-style: normal;
  font-weight: 400;
  line-height: 26rem; /* 173.333% */
  letter-spacing: -0.3rem;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    height: 18rem;
    padding-left: 20rem;
    font-size: 10.952rem;
    font-style: normal;
    font-weight: 400;
    line-height: 18.984rem; /* 173.333% */
    letter-spacing: -0.219rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 427.9px) {
    height: 12rem;
    padding-left: 13rem;
    font-size: 6.648rem;
    font-weight: 400;
    line-height: 11.524rem; /* 173.333% */
    letter-spacing: -0.133rem;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16rem;
  flex: 1;
  height: 100%;
  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    gap: 12rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 427.9px) {
    gap: 0;
  }
`;

export const AnchorIconWrapper = styled.a`
  /* 모바일 뷰 */
  @media (max-width: 427.9px) {
    transform: scale(0.7);
  }
`;
