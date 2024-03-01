import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';
import icSchool from '@src/assets/icons/ic_school.svg';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 0 30px 0;

  background: #181818;
  border-radius: 10px;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    padding: 30px 0 22px 0;
  }
  /* 모바일 뷰 */
  @media (max-width: 427.9px) {
    padding: 17px 0 14px 0;
  }
`;

export const ProfileImage = styled(Image)`
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  position: relative;

  width: 180px;
  height: 180px;

  border-radius: 50%;
  overflow: hidden;

  /* 태블릿, 모바일 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    width: 120px;
    height: 120px;
  }
  /* 태블릿, 모바일 뷰 */
  @media (max-width: 427.9px) {
    width: 80px;
    height: 80px;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  margin: 40px 0 16px 0;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    margin: 24px 0 10px 0;
    gap: 3px;
  }
  /* 모바일 뷰 */
  @media (max-width: 427.9px) {
    margin: 13px 0 7px 0;
    gap: 2px;
  }
`;

export const Position = styled.span`
  padding: 6px 7px;
  color: ${colors.white};

  text-align: center;
  font-size: 17px;
  font-weight: 600;
  line-height: 26px; /* 152.941% */
  letter-spacing: -0.34px;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    padding: 4px;
    font-size: 12.413px;
    line-height: 18.984px; /* 152.941% */
    letter-spacing: -0.248px;
  }
  /* 모바일 뷰 */
  @media (max-width: 427.9px) {
    padding: 3px;
    font-size: 7.535px;
    line-height: 11.524px; /* 152.941% */
    letter-spacing: -0.151px;
  }
`;

export const Name = styled.strong`
  text-align: center;
  font-size: 28px;

  color: ${colors.white};
  font-weight: 600;
  line-height: 100%; /* 28px */
  letter-spacing: -0.28px;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    font-size: 18px;
  }
  /* 모바일 뷰 */
  @media (max-width: 427.9px) {
    font-size: 16px;
  }
`;

export const Desc = styled.span`
  text-align: center;

  margin: 16px 0 30px 0;
  font-size: 15px;
  font-style: normal;
  line-height: 26px; /* 173.333% */
  letter-spacing: -0.3px;
  color: ${colors.white};
  background-color: #222220;
  padding: 10px 16px;
  border-radius: 10px;
  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    margin: 12px 0 28px 0;
    font-size: 10.952px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.984px; /* 173.333% */
    letter-spacing: -0.219px;
    padding: 7px 12px;
    border-radius: 8px;
  }
  /* 모바일 뷰 */
  @media (max-width: 427.9px) {
    margin: 8px 0 18px 0;
    font-size: 6.648px;
    font-style: normal;
    font-weight: 400;
    line-height: 11.524px; /* 173.333% */
    letter-spacing: -0.133px;
    padding: 4px 7px;
    border-radius: 4px;
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
    width: 24px;
    height: 24px;
    /* 태블릿 뷰 */
    @media (max-width: 768px) and (min-width: 428px) {
      width: 18px;
      height: 18px;
    }
    /* 모바일 뷰 */
    @media (max-width: 427.9px) {
      width: 12px;
      height: 12px;
    }
  }

  height: 24px;
  padding-left: 28px;
  color: #bcbcbc;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 173.333% */
  letter-spacing: -0.3px;

  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    height: 18px;
    padding-left: 20px;
    font-size: 10.952px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.984px; /* 173.333% */
    letter-spacing: -0.219px;
  }
  /* 모바일 뷰 */
  @media (max-width: 427.9px) {
    height: 12px;
    padding-left: 13px;
    font-size: 6.648px;
    font-weight: 400;
    line-height: 11.524px; /* 173.333% */
    letter-spacing: -0.133px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex: 1;
  height: 100%;
  /* 태블릿 뷰 */
  @media (max-width: 768px) and (min-width: 428px) {
    gap: 12px;
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
