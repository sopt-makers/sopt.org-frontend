import styled from '@emotion/styled';
import Image from 'next/image';

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 108rem;
  @media (max-width: 765.9px) {
    gap: 40rem;
  }
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 30rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 765.9px) {
    gap: 8rem;
  }
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 24rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 765.9px) {
    width: 100vw;
    padding: 0 16rem;
  }
  @media (max-width: 1299px) and (min-width: 766px) {
    width: 100vw;
    padding: 0 24rem;
  }
`;
export const MoreLinkWrapper = styled.p`
  color: #fff;
  font-size: 25rem;
  font-weight: 500;
  line-height: 40rem; /* 160% */
  letter-spacing: -0.25rem;
  opacity: 0.6;
  border-bottom: 1rem solid #959595;

  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 20rem;
    font-weight: 400;
    line-height: 100%; /* 20rem */
    letter-spacing: -0.2rem;
  }

  @media (max-width: 765.9px) {
    font-size: 16rem;
  }
`;

export const ArrowWrapper = styled.div`
  @media (max-width: 1299px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64rem;
  height: 64rem;
  border-radius: 50%;
  border: 1rem solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;

  margin: 0 32rem;
  overflow-x: hidden;
  gap: 24rem;
  max-width: 1008rem;

  @media (max-width: 1299px) and (min-width: 766px) {
    overflow-x: scroll;
    gap: 24rem;
  }

  @media (max-width: 765.9px) {
    overflow-x: scroll;
    gap: 16rem;
  }
`;

export const CardWrapper = styled.div`
  cursor: pointer;
  background-color: #181818;
  border-radius: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 320rem;
  height: 300rem;
  padding: 38rem 34rem;
  @media (max-width: 765.9px) {
    min-width: 232rem;
    height: 218rem;
    padding: 40rem 26rem;
  }
  @media (max-width: 1299px) and (min-width: 766px) {
    min-width: 310rem;
    height: 250rem;
    padding: 40rem 28rem;
  }
`;

export const CardTitle = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
  color: #c8c8c8;
  font-weight: 500;
  font-size: 25rem;
  line-height: 40rem;
  @media (max-width: 765.9px) {
    font-size: 16rem;
    line-height: 25rem;
    letter-spacing: -0.32rem;
  }
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 18rem;
    line-height: 29rem;
  }
`;

export const DescWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Desc = styled.div`
  color: #848484;
  font-weight: 500;
  font-size: 22rem;
  line-height: 32rem;
  white-space: pre-wrap;
  @media (max-width: 765.9px) {
    font-size: 14rem;
    line-height: 22rem;
  }
  @media (max-width: 1299px) and (min-width: 766px) {
    font-size: 16rem;
    line-height: 23rem;
    white-space: pre-wrap;
  }
`;

export const DescName = styled.div`
  font-weight: 700;
  line-height: 100%;
  @media (max-width: 765.9px) {
    font-weight: 500;
  }
`;

export const Arrow = styled(Image)`
  width: 30rem;
  height: 30rem;
  @media (max-width: 765.9px) {
    width: 17rem;
    height: 15rem;
  }
  @media (max-width: 1299px) and (min-width: 766px) {
    width: 30rem;
    height: 30rem;
  }
`;
