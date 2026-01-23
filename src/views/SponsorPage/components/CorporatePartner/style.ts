import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';
import { BREAKPOINT } from '@src/lib/styles/breakpoint';

export const ContainerLayout = styled.section`
  display: flex;
  justify-content: center;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 180px 0;
  width: 1200px;
  align-items: center;

  @media (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) and (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    padding: 150px 0;
    max-width: 766px;
  }
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    padding: 87px 0;
    max-width: 360px;
  }
`;

export const Title = styled.h3`
  font-weight: 800;
  text-align: center;
  margin-bottom: 60px;
  font-size: 45rem;
  line-height: 60px;

  @media (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) and (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    font-size: 36rem;
    line-height: 56px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    font-size: 20rem;
    line-height: 28px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArrowWrapper = styled.div`
  display: none;
  @media (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(8, 1fr);
  grid-auto-flow: column;

  overflow-x: hidden;
  max-width: 900px;
  height: 386px;
  column-gap: 30px;
  row-gap: 64px;

  @media (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) and (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    overflow-x: scroll;
    height: 386px;
    column-gap: 30px;
    row-gap: 64px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    overflow-x: scroll;
    height: 185px;
    column-gap: 50px;
    row-gap: 20px;
  }
`;

export const Item = styled.article`
  width: 278px;
  height: 161px;
  @media (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) and (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    width: 277px;
    height: 161px;
  }
  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    width: 138px;
    height: 60px;
  }
`;

export const CorporateLogoImageWrapper = styled.div`
  position: relative;
  width: 278px;
  height: 121px;

  @media (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) and (max-width: ${BREAKPOINT.TABLET_MAX_WIDTH}) {
    width: 278px;
    height: 121px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    width: 138px;
    height: 60px;
  }
`;

export const Name = styled.p`
  color: rgba(253, 253, 253, 0.8);
  text-align: center;
  font-weight: 400;
  @media (min-width: ${BREAKPOINT.TABLET_MIN_WIDTH}) {
    font-size: 25rem;
    line-height: 40px;
  }

  @media (max-width: ${BREAKPOINT.MOBILE_MAX_WIDTH}) {
    font-size: 12rem;
    line-height: 19px;
  }
`;

export const RequestSponsorButton = styled.a`
  margin-top: 56px;
  display: inline-flex;
  height: 56px;
  padding: 16px 26px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  width: fit-content;
  border-radius: 12px;
  background: ${colors.white};
  text-align: center;
  font-size: 16rem;
`;
