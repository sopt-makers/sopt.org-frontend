import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  margin-top: 24px;

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    flex-direction: column;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 24px;

  padding: 32px 0 48px 0;
  width: 380px;

  border-radius: 30px;
  background-color: #181818;

  font-size: 27px;
  font-weight: 400;
  line-height: 161%;
  letter-spacing: -0.81px;

  & > i {
    font-size: 58px;
    font-weight: 400;
    line-height: 164%;
    font-style: normal;
  }

  & * {
    font-size: 100%;
  }

  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    padding: 42px 0 54px 0;
    font-size: 22px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    padding: 42px 0 66px 0;
    width: 323px;
    border-radius: 20px;
    font-size: 18px;
  }
`;
