import styled from '@emotion/styled';
import Image from 'next/image';

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 108px;
  @media (max-width: 47.86875rem) {
    gap: 40px;
  }
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    gap: 30px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 47.86875rem) {
    gap: 8px;
  }
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    gap: 24px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 47.86875rem) {
    width: 100vw;
    padding: 0 16px;
  }
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    width: 100vw;
    padding: 0 24px;
  }
`;
export const MoreLinkWrapper = styled.p`
  color: #fff;
  font-size: 25rem;
  font-weight: 500;
  line-height: 40px; /* 160% */
  letter-spacing: -0.25px;
  opacity: 0.6;
  border-bottom: 1px solid #959595;

  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    font-size: 20rem;
    font-weight: 400;
    line-height: 100%; /* 20px */
    letter-spacing: -0.2px;
  }

  @media (max-width: 47.86875rem) {
    font-size: 16rem;
  }
`;

export const ArrowWrapper = styled.div`
  @media (max-width: 81.1875rem) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;

  margin: 0 32px;
  overflow-x: hidden;
  gap: 24px;
  max-width: 1008px;

  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    overflow-x: scroll;
    gap: 24px;
  }

  @media (max-width: 47.86875rem) {
    overflow-x: scroll;
    gap: 16px;
  }
`;

export const CardWrapper = styled.div`
  cursor: pointer;
  background-color: #181818;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 320px;
  height: 300px;
  padding: 38px 34px;
  @media (max-width: 47.86875rem) {
    min-width: 232px;
    height: 218px;
    padding: 40px 26px;
  }
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    min-width: 310px;
    height: 250px;
    padding: 40px 28px;
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
  line-height: 40px;
  @media (max-width: 47.86875rem) {
    font-size: 16rem;
    line-height: 25px;
    letter-spacing: -0.32px;
  }
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    font-size: 18rem;
    line-height: 29px;
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
  line-height: 32px;
  white-space: pre-wrap;
  @media (max-width: 47.86875rem) {
    font-size: 14rem;
    line-height: 22px;
  }
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    font-size: 16rem;
    line-height: 23px;
    white-space: pre-wrap;
  }
`;

export const DescName = styled.div`
  font-weight: 700;
  line-height: 100%;
  @media (max-width: 47.86875rem) {
    font-weight: 500;
  }
`;

export const Arrow = styled(Image)`
  width: 30px;
  height: 30px;
  @media (max-width: 47.86875rem) {
    width: 17px;
    height: 15px;
  }
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    width: 30px;
    height: 30px;
  }
`;
