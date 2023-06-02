import styled from '@emotion/styled';

const Container = styled.article`
  display: flex;
  align-items: center;

  width: 100%;
  height: 96px;

  background: #000000;
  border-radius: 10px;

  /* 태블릿 뷰 */
  @media (max-width: 1199.9px) and (min-width: 766px) {
    height: 60px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    align-items: start;

    height: 72px;

    padding-top: 14px;
  }
`;

const Caution = styled.div`
  margin: 0 28px 0 48px;

  /* 태블릿 뷰 */
  @media (max-width: 1199.9px) and (min-width: 766px) {
    margin: 0 12px 0 32px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin: 0 16px 0 20px;
  }
`;

const Texts = styled.div`
  display: flex;

  font-size: 28px;
  color: #ffffff;

  /* 태블릿 뷰 */
  @media (max-width: 1199.9px) and (min-width: 766px) {
    font-size: 18px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    flex-direction: column;
    font-size: 15px;
    line-height: 22.5px;
  }
`;

const Strong = styled.strong`
  margin-right: 10px;

  font-weight: 700;

  /* 태블릿 뷰 */
  @media (max-width: 1199.9px) and (min-width: 766px) {
    margin-right: 7px;
  }
`;

const St = {
  Container,
  Caution,
  Texts,
  Strong,
};
export default St;
