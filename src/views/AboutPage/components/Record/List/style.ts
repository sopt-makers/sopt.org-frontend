import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 30rem;
  justify-content: center;
  align-items: center;
  padding: 0 20rem;

  @media (max-width: 996rem) and (min-width: 766rem) {
    gap: 24rem;
  }

  @media (max-width: 766rem) and (min-width: 428rem) {
    gap: 20rem;
  }

  @media (max-width: 520rem) {
    flex-direction: column;
  }

  /* 모바일 뷰 */
  @media (max-width: 428rem) {
    flex-direction: column;
    gap: 16rem;
  }
`;
