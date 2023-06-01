import styled from '@emotion/styled';
import { mainColor } from '@src/assets/sopt/mainColor';

const Description = () => {
  return <Title>SOPT 회원들의 활동 후기</Title>;
};

const Title = styled.div`
  font-weight: 700;
  color: ${mainColor.white};
  text-align: center;

  /* 데스크탑 뷰 */
  @media (min-width: 1124px) {
    margin-top: 190px;
    margin-bottom: 54px;
    font-size: 40px;
  }

  /* 태블릿 뷰 */
  @media (max-width: 1123px) {
    margin-top: 70px;
    margin-bottom: 52px;
    font-size: 36px;
  }

  /* 태블릿 뷰 */
  @media (max-width: 765.9px) {
    margin-top: 32px;
    font-size: 20px;
  }
`;

export default Description;
