import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { fontsObject } from '@sopt-makers/fonts';
import Image from 'next/image';
import { ReactComponent as IcBehance } from '@src/assets/icons/ic_behance.svg';
import { ReactComponent as IcGithub } from '@src/assets/icons/ic_github.svg';
import { ReactComponent as IcLinkedin } from '@src/assets/icons/ic_linkedin.svg';
import { ReactComponent as IcMail } from '@src/assets/icons/mail.svg';
import { media } from '@src/lib/styles/breakpoints';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 32px 40px;
  background: ${colors.gray900};
  border-radius: 24px;

  ${media.tablet} {
    padding: 24px;
  }

  ${media.mobile} {
    width: 100%;
    padding: 16px 8px;
  }
`;

export const ProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;

  ${media.tablet} {
    width: 140px;
    height: 140px;
  }

  ${media.mobile} {
    width: 100px;
    height: 100px;
  }
`;

export const ProfileContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const NameWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    gap: 8px;
  }

  ${media.mobile} {
    gap: 4px;
  }
`;

export const Position = styled.span`
  color: ${colors.white};
  ${fontsObject.TITLE_6_16_SB}
  text-align: center;

  ${media.tablet} {
    ${fontsObject.TITLE_7_14_SB}
  }

  ${media.mobile} {
    font-family: SUIT;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: -0.2px;
  }
`;

export const Name = styled.strong`
  ${fontsObject.TITLE_2_28_SB}
  color: ${colors.white};
  text-align: center;

  ${media.tablet} {
    ${fontsObject.TITLE_3_24_SB}
  }

  ${media.mobile} {
    ${fontsObject.TITLE_7_14_SB}
  }
`;

export const Desc = styled.span`
  margin-top: 8px;
  padding: 10px 16px;
  color: ${colors.white};
  background-color: ${colors.gray700};
  border-radius: 14px;
  text-align: center;
  ${fontsObject.BODY_2_16_R}

  ${media.tablet} {
    ${fontsObject.BODY_3_14_R}
  }

  ${media.mobile} {
    margin-top: 0;
    ${fontsObject.LABEL_5_11_SB}
  }
`;

export const UniversityWrapper = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 6px;
  word-break: keep-all;
  color: ${colors.gray200};
  ${fontsObject.BODY_2_16_R}

  ${media.tablet} {
    ${fontsObject.BODY_3_14_R}
  }

  ${media.mobile} {
    font-family: SUIT;
    font-size: 8px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: -0.16px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  gap: 16px;
  margin-top: auto;

  ${media.tablet} {
    padding-top: 16px;
    gap: 16px;
  }

  ${media.mobile} {
    padding-top: 12px;
    gap: 12.8px;
  }
`;

export const AnchorIconWrapper = styled.a`
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  line-height: 0;

  ${media.tablet} {
    width: 20px;
    height: 20px;
  }

  ${media.mobile} {
    width: 16px;
    height: 16px;
  }
`;

export const IcSchoolIconWrapper = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  line-height: 0;

  ${media.tablet} {
    width: 20px;
    height: 20px;
  }

  ${media.mobile} {
    width: 12px;
    height: 12px;
  }

  & > svg {
    display: block;
    width: 100%;
  }
`;

export const IcLinkedinIcon = styled(IcLinkedin)`
  width: 20px;
  height: 20px;

  ${media.tablet} {
    width: 20px;
    height: 20px;
  }

  ${media.mobile} {
    width: 16px;
    height: 16px;
  }
`;

export const IcMailIcon = styled(IcMail)`
  width: 20px;
  height: 20px;

  ${media.tablet} {
    width: 20px;
    height: 20px;
  }

  ${media.mobile} {
    width: 16px;
    height: 16px;
  }
`;

export const IcGithubIcon = styled(IcGithub)`
  width: 20px;
  height: 20px;

  ${media.tablet} {
    width: 20px;
    height: 20px;
  }

  ${media.mobile} {
    width: 16px;
    height: 16px;
  }
`;

export const IcBehanceIcon = styled(IcBehance)`
  width: 20px;
  height: 20px;

  ${media.tablet} {
    width: 20px;
    height: 20px;
  }

  ${media.mobile} {
    width: 16px;
    height: 16px;
  }
`;
