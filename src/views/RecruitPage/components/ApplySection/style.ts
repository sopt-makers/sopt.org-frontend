import styled from '@emotion/styled';

export const ApplyButton = styled.a<{ main: string }>`
  width: 220px;
  padding: 24px 0;
  border-radius: 50px;
  color: #212121;
  text-align: center;
  font-size: 22rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 22px */
  letter-spacing: -0.44px;
  background-color: ${({ main }) => main};
  z-index: 2;
  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    font-size: 18rem;
    width: 180px;
    padding: 20px 0;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    font-size: 16rem;
    width: 160px;
    padding: 16px 0;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 62px 0 36px 0;

  text-align: center;
  color: #fcfcfc;
  text-align: center;
  font-size: 43rem;
  font-weight: 700;
  line-height: 140%; /* 60.2px */
  letter-spacing: -0.86px;
  z-index: 2;
  word-break: keep-all;
  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    margin-top: 32px;
    font-size: 28rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    margin-top: 26px;
    font-size: 28rem;
  }
`;

export const Wrapper = styled.div<{ imgRecruitBg: string }>`
  width: 100vw;
  height: 580px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  background-image: url(${({ imgRecruitBg }) => imgRecruitBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

  /* 태블릿 뷰 */
  @media (max-width: 81.1875rem) and (min-width: 47.875rem) {
    height: 302px;
  }
  /* 모바일 뷰 */
  @media (max-width: 47.86875rem) {
    margin-top: 48px;
    font-size: 28rem;
    height: 409px;
  }
`;
