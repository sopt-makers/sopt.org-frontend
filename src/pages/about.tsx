import styled from '@emotion/styled';
import AboutHead from '@src/components/About/AboutHead';
import Appjam from '@src/components/About/Appjam';
import Seminar from '@src/components/About/Seminar';
import Sopkaton from '@src/components/About/Sopkaton';
import SoptTerm from '@src/components/About/SoptTerm';
import StudyNetworking from '@src/components/About/StudyNetworking';
import Team from '@src/components/About/Team';
import { Header, Footer } from '@src/components';
import theme from '@src/styles/theme';

function about() {
  return (
    <>
      <AboutHead />
      <Styled.Main>
        <Header />
        <Seminar />
        <Appjam />
        <Sopkaton />
        <StudyNetworking />
        <SoptTerm />
        <Team />
        <Footer />
      </Styled.Main>
    </>
  );
}

export default about;

const Styled = {
  Main: styled.main`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;

    /* 모바일 뷰 */
    @media (max-width: 1279px) {
      display: flex;
      flex-direction: column;
      row-gap: 50px;
    }
  `,
  Root: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    & span {
      margin-top: 99px;
      margin-bottom: 99px;
      line-height: 56px;
      color: ${theme.colors.soptWhite};
      font-family: 'SUIT', arial, sans-serif;
      font-size: 45px;
      font-weight: 400;
      font-style: normal;
    }
  `,
};
