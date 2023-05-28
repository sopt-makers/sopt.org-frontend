import styled from '@emotion/styled';
import { textSingularLineEllipsis } from '@src/styles/textEllipsis';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 270px;
  height: 400px;

  margin-bottom: 60px;
  padding: 38px 49px;

  background: #000000;
  border-radius: 10px;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 209px;
    height: 300px;

    margin-bottom: 40px;
    padding: 26px 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 160px;
    height: 265px;

    margin-bottom: 32px;
    padding: 18px 17px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  width: 180px;
  height: 180px;

  border-radius: 50%;
  overflow: hidden;

  /* 태블릿, 모바일 뷰 */
  @media (max-width: 1199px) {
    width: 126px;
    height: 126px;
  }
`;

export const Name = styled.strong`
  ${textSingularLineEllipsis}
  width: 100%;
  text-align: center;

  margin-top: 24px;

  font-weight: 700;
  font-size: 28px;

  color: #ffffff;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    margin-top: 16px;

    font-size: 18px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-top: 16px;

    font-size: 16px;
  }
`;

export const Desc = styled.p`
  ${textSingularLineEllipsis}
  width: 100%;
  height: 26px;
  text-align: center;

  margin-top: 8px;
  font-size: 18px;
  line-height: 26px;

  color: rgba(255, 255, 255, 0.5);
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-top: 4px;
    font-size: 16px;
  }
`;

export const Part = styled.div`
  ${textSingularLineEllipsis}
  max-width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 12px;
  padding: 10px 16px;

  background: #333333;
  border-radius: 30px;

  font-size: 18px;
  line-height: 26px;

  color: #ffffff;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    margin-top: 8px;
    padding: 10px 16px;

    background: #333333;
    border-radius: 30px;

    font-size: 18px;
    line-height: 26px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-top: 6px;

    font-size: 12px;
    line-height: 15px;
  }
`;
