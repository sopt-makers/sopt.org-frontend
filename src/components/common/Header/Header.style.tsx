import styled from '@emotion/styled';

interface StyleProps {
  src: string;
}

export const Header = styled.header`
  display: flex;
  /* position: fixed; */
  justify-content: center;
  z-index: 9;
  width: 100%;
  height: 100px;
`;

export const Wrap = styled.div`
  position: relative;

  margin: 30px 0px;
  width: 1160px;

  /* 태블릿 뷰 */
  @media (max-width: 1279px) {
    width: 90%;
  }
  /* 모바일 뷰 */
  /* @media (max-width: 767px) {
    width: 347px;
  } */
`;

export const CenterAligner = styled.div`
  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.button<StyleProps>`
  background: url(${(props) => props.src}) center no-repeat;
  background-size: 100% 100%;
  cursor: pointer;

  width: 125px;
  height: 41px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    width: 97px;
    height: 31px;
  }
`;

export const HamburgerBar = styled.button<StyleProps>`
  position: absolute;
  right: 0px;
  bottom: 10px;

  background: url(${(props) => props.src}) center no-repeat;
  background-size: 100% 100%;

  cursor: pointer;
  width: 24px;
  height: 24px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    right: 10px;
    bottom: 10px;

    width: 16px;
    height: 16px;
  }
`;
