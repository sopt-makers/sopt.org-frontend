import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28rem;
  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    gap: 40rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    gap: 8rem;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 240rem 300rem;
  row-gap: 25rem;
  column-gap: 220rem;
  border-radius: 30rem;
  background-color: #181818;
  padding: 85rem 88rem;

  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    grid-template-columns: 300rem auto;
    padding: 38rem 54rem;
    gap: 15rem;
    border-radius: 20rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    grid-template-columns: 1fr;
    row-gap: 0rem;
    padding: 38rem 0 6rem 0;
    border-radius: 12rem;
    text-align: center;
  }
`;

export const OddText = styled.div`
  color: #fff;
  font-size: 24rem;
  font-weight: 700;
  line-height: 150%; /* 42rem */
  &::before {
    content: '🗓 ';
  }
  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    color: #fff;
    font-size: 18rem;
    font-weight: 700;
    line-height: 30rem; /* 166.667% */
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    color: #fff;
    font-size: 16rem;
    font-weight: 700;
    line-height: 32rem;
  }
`;

export const Highlight = styled.span`
  color: #bdec00;
  font-size: 24rem;
  font-weight: 400;
  letter-spacing: -0.48rem;
  text-decoration-line: underline;
  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    font-size: 18rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    font-size: 16rem;
    line-height: 32rem;
  }
`;

export const EvenText = styled.div`
  color: #fff;
  font-size: 24rem;
  font-weight: 400;
  line-height: 150%; /* 42rem */
  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    font-size: 18rem;
    font-weight: 300;
    line-height: 30rem; /* 166.667% */
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    font-size: 16rem;
    font-style: normal;
    font-weight: 300;
    line-height: 32rem;

    margin-bottom: 32rem;
  }
`;
