import styled from '@emotion/styled';
import Image from 'next/image';
import { media } from '@src/lib/styles/breakpoints';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;

  ${media.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.li`
  position: relative;
  display: flex;
  border-radius: 20px;
`;

export const TeamImage = styled(Image)`
  display: flex;
  width: 464px;
  height: 380px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 20px;
  object-fit: cover;

  ${media.desktopLarge} {
    width: 588px;
  }

  ${media.tablet} {
    width: 336px;
  }

  ${media.mobile} {
    width: 280px;
  }
`;

export const TagWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;
