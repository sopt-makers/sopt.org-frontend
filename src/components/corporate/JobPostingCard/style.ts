import styled from '@emotion/styled';
import Image from 'next/image';
import { textpluralLinesEllipsis } from '@src/lib/styles/textEllipsis';

const Card = styled.article`
  display: flex;
  background: #000000;
  border-radius: 10rem;
  width: 380rem;
  max-width: 380rem;
  height: 227rem;
  padding: 26rem 49rem 29rem 26rem;
  margin-bottom: 18rem;
  &:hover {
    background: #212121;
  }
  /* 태블릿 뷰 */
  @media (max-width: 1199rem) and (min-width: 766rem) {
    margin-bottom: 4rem;
    max-width: 314rem;
    height: 227rem;
    padding: 26rem 19rem 29rem 21rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    max-width: 314rem;
    height: 193rem;
    padding: 21rem 27rem 23rem 21rem;
  }
`;

const Logo = styled(Image)`
  width: 80rem;
  height: 80rem;
  border-radius: 10rem;
  /* 태블릿 뷰 */
  @media (max-width: 1199rem) and (min-width: 766rem) {
    width: 65rem;
    height: 65rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    width: 55rem;
    height: 55rem;
  }
`;

const Contents = styled.div`
  flex: 1;
  margin-left: 26rem;
  /* 태블릿 뷰 */
  @media (max-width: 1199rem) and (min-width: 766rem) {
    margin-left: 17rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    margin-left: 20rem;
  }
`;

const Chip = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12rem;

  height: 36rem;

  background: #333333;
  color: white;
  border-radius: 10rem;
`;

const Title = styled.p`
  ${textpluralLinesEllipsis(2)}
  margin-top: 12rem;

  max-width: 199rem;
  height: 60rem;

  font-weight: 700;
  font-size: 23rem;
  line-height: 30rem;
  /* 태블릿 뷰 */
  @media (max-width: 1199rem) and (min-width: 766rem) {
    max-width: 185rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    max-width: 187rem;
    height: 50rem;
    font-size: 18rem;
    line-height: 25rem;
  }
`;

const Corporation = styled.p`
  margin-top: 12rem;
  font-weight: 500;
  font-size: 18rem;
  line-height: 22rem;
  color: rgba(255, 255, 255, 0.5);
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    margin-top: 8rem;
    font-size: 16rem;
    line-height: 20rem;
  }
`;

const RestInfo = styled.p`
  margin-top: 8rem;
  font-size: 18rem;
  line-height: 22rem;
  color: rgba(255, 255, 255, 0.3);
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    margin-top: 5rem;
  }
`;

export const St = {
  Card,
  Logo,
  Contents,
  Chip,
  Title,
  Corporation,
  RestInfo,
};
