import styled from '@emotion/styled';

const Container = styled.article`
  display: flex;
  align-items: center;

  width: 100%;
  height: 96rem;

  background: #000000;
  border-radius: 10rem;

  /* 태블릿 뷰 */
  @media (max-width: 1199.9rem) and (min-width: 766rem) {
    height: 60rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    align-items: start;

    height: 72rem;

    padding-top: 14rem;
  }
`;

const Caution = styled.div`
  margin: 0 28rem 0 48rem;

  /* 태블릿 뷰 */
  @media (max-width: 1199.9rem) and (min-width: 766rem) {
    margin: 0 12rem 0 32rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    margin: 0 16rem 0 20rem;
  }
`;

const Texts = styled.div`
  display: flex;

  font-size: 28rem;
  color: #ffffff;

  /* 태블릿 뷰 */
  @media (max-width: 1199.9rem) and (min-width: 766rem) {
    font-size: 18rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    flex-direction: column;
    font-size: 15rem;
    line-height: 22.5rem;
  }
`;

const Strong = styled.strong`
  margin-right: 10rem;

  font-weight: 700;

  /* 태블릿 뷰 */
  @media (max-width: 1199.9rem) and (min-width: 766rem) {
    margin-right: 7rem;
  }
`;

const St = {
  Container,
  Caution,
  Texts,
  Strong,
};
export default St;
