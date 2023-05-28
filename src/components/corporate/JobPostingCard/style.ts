import styled from '@emotion/styled';
import { textpluralLinesEllipsis } from '@src/styles/textEllipsis';

const Card = styled.article`
  flex: 1;

  display: flex;
  background: #000000;
  border-radius: 10px;
  width: 380px;
  height: 277px;
  padding: 26px 49px 29px 26px;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 314px;
    height: 227px;
    padding: 26px 19px 29px 21px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 314px;
    height: 193px;
    padding: 21px 27px 23px 21px;
  }
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 65px;
    height: 65px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 55px;
    height: 55px;
  }
`;

const Contents = styled.div`
  flex: 1;
  margin-left: 26px;
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    margin-left: 17px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-left: 20px;
  }
`;

const Chip = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px;

  height: 36px;

  background: #333333;
  color: white;
  border-radius: 10px;
`;

const Title = styled.p`
  margin-top: 12px;
  width: 199px;
  font-weight: 700;
  font-size: 23px;
  line-height: 130%;
  ${textpluralLinesEllipsis(2)}
  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    margin-left: 17px;
    max-width: 185px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-left: 20px;
    max-width: 187px;
    font-size: 18px;
    line-height: 140%;
  }
`;

const Corporation = styled.p`
  margin-top: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.5);
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-top: 8px;
    font-size: 16px;
    line-height: 20px;
  }
`;

const RestInfo = styled.p`
  margin-top: 8px;
  font-size: 18px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.3);
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-top: 5px;
  }
`;

export const St = {
  Card,
  Image,
  Contents,
  Chip,
  Title,
  Corporation,
  RestInfo,
};
