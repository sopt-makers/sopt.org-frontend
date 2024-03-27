import styled from '@emotion/styled';

export const Wrapper = styled.section`
  margin-top: 275rem;
  margin-bottom: 340rem;
  gap: 48rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 766px) and (min-width: 428px) {
    margin-top: 190rem;
    margin-bottom: 218rem;
    gap: 28rem;
  }

  /* 모바일 뷰 */
  @media (max-width: 428px) {
    margin-top: 120rem;
    margin-bottom: 136rem;
    gap: 26rem;
  }
`;
