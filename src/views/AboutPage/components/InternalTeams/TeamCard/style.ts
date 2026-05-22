import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import Image from 'next/image';
import { media } from '@src/lib/styles/breakpoints';

export const Card = styled.li<{ gradientColor: string }>`
  position: relative;
  display: flex;
  width: 464px;
  height: 380px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 20px;
  background-color: ${colors.gray900};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 411px;
    height: 411px;
    border-radius: 50%;
    background: ${({ gradientColor }) => gradientColor};
    opacity: 0.2;
    filter: blur(100px);
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  ${media.desktopLarge} {
    width: 588px;
  }

  ${media.tablet} {
    width: 100%;
  }

  ${media.mobile} {
    width: 100%;
  }
`;

const TeamLogoBase = styled(Image)`
  position: relative;
  z-index: 1;
  object-fit: contain;
`;

const MediaLogo = styled(TeamLogoBase)`
  width: 270px;
  height: 151px;

  ${media.mobile} {
    width: 232px;
    height: 129px;
  }
`;

const MakersLogo = styled(TeamLogoBase)`
  width: 310px;
  height: 84px;

  ${media.mobile} {
    width: 232px;
    height: 62px;
  }
`;

export const TeamLogo = {
  media: MediaLogo,
  makers: MakersLogo,
} as const;

export const TagWrapper = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 20px;
  left: 20px;
`;
