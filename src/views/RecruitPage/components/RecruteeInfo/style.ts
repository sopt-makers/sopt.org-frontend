import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20rem;
  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
  }
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30rem;

  margin-top: 24rem;

  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    flex-direction: column;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    flex-direction: column;
    gap: 20rem;
  }
`;

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 24rem;

  padding: 32rem 0 48rem 0;
  width: 380rem;

  border-radius: 30rem;
  background-color: #181818;

  font-size: 27rem;
  font-weight: 400;
  line-height: 161%;
  letter-spacing: -0.81rem;

  & > i {
    font-size: 58rem;
    font-weight: 400;
    line-height: 164%;
    font-style: normal;
  }

  /* 태블릿 뷰 */
  @media (max-width: 1299rem) and (min-width: 766rem) {
    padding: 42rem 0 54rem 0;
    font-size: 22rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9rem) {
    padding: 42rem 0 66rem 0;
    width: 323rem;
    border-radius: 20rem;
    font-size: 18rem;
  }
`;
