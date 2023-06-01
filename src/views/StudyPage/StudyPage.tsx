import styled from '@emotion/styled';
import { Footer, Header, Layout } from '@src/components';
import StudySection from './components/Section';
import useFetch from './hooks/useFetch';

const StudyPage = () => {
  const state = useFetch();

  return (
    <Layout>
      <Header />
      {state._TAG === 'OK' && (
        <Root>
          <Title>스터디</Title>
          <StudySection studies={state.data.studies} />
        </Root>
      )}
      <Footer />
    </Layout>
  );
};

export default StudyPage;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 700px;
    margin-top: 90px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360px;
    margin-top: 90px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 45px;
  line-height: 60px;
  letter-spacing: -1%;
  margin-top: 190px;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    font-size: 36px;
    line-height: 56px;
    margin-top: 70px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    font-size: 24px;
    line-height: 28px;
    margin-top: 30px;
  }
`;
