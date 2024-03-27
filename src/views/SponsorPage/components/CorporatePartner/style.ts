import styled from '@emotion/styled';
import { colors } from '@sopt-makers/colors';

export const ContainerLayout = styled.section`
  display: flex;
  justify-content: center;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 180rem 0;
  width: 1200rem;
  align-items: center;

  @media (max-width: 1199px) and (min-width: 769px) {
    padding: 150rem 0;
    max-width: 766rem;
  }
  @media (max-width: 768px) {
    padding: 87rem 0;
    max-width: 360rem;
  }
`;

export const Title = styled.h3`
  font-weight: 800;
  text-align: center;
  margin-bottom: 60rem;
  font-size: 45rem;
  line-height: 60rem;

  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: 36rem;
    line-height: 56rem;
  }

  @media (max-width: 768px) {
    font-size: 20rem;
    line-height: 28rem;
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
  @media (min-width: 1199px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64rem;
    height: 64rem;
    border-radius: 50%;
    border: 1rem solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(8, 1fr);
  grid-auto-flow: column;

  overflow-x: hidden;
  max-width: 900rem;
  height: 386rem;
  column-gap: 30rem;
  row-gap: 64rem;

  @media (min-width: 769px) and (max-width: 1199px) {
    overflow-x: scroll;
    height: 386rem;
    column-gap: 30rem;
    row-gap: 64rem;
  }

  @media (max-width: 768px) {
    overflow-x: scroll;
    height: 185rem;
    column-gap: 50rem;
    row-gap: 20rem;
  }
`;

export const Item = styled.article`
  width: 278rem;
  height: 161rem;
  @media (min-width: 769px) and (max-width: 1199px) {
    width: 277rem;
    height: 161rem;
  }
  @media (max-width: 768px) {
    width: 138rem;
    height: 60rem;
  }
`;

export const CorporateLogoImageWrapper = styled.div`
  position: relative;
  width: 278rem;
  height: 121rem;

  @media (min-width: 769px) and (max-width: 1199px) {
    width: 278rem;
    height: 121rem;
  }

  @media (max-width: 768px) {
    width: 138rem;
    height: 60rem;
  }
`;

export const Name = styled.p`
  color: rgba(253, 253, 253, 0.8);
  text-align: center;
  font-weight: 400;
  @media (min-width: 769px) {
    font-size: 25rem;
    line-height: 40rem;
  }

  @media (max-width: 768px) {
    font-size: 12rem;
    line-height: 19rem;
  }
`;

export const RequestSponsorButton = styled.a`
  margin-top: 56rem;
  display: inline-flex;
  height: 56rem;
  padding: 16rem 26rem;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-shrink: 0;
  width: fit-content;
  border-radius: 12rem;
  background: ${colors.white};
  text-align: center;
  font-size: 16rem;
`;
