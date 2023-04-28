import styled from '@emotion/styled';
import { Footer, Header, Layout } from '@src/components';
import Banner from './components/Banner';
import useFetch from './hooks/useFetch';

const AboutPage = () => {
  const state = useFetch();

  return (
    <Layout>
      <Header />
      {state._TAG === 'OK' && (
        <Root>
          <Banner
            imageSrc={state.data.aboutInfo.bannerImage}
            generation={state.data.aboutInfo.generation}
            title={state.data.aboutInfo.title}
          />
        </Root>
      )}
      <Footer />
    </Layout>
  );
};

export default AboutPage;

const Root = styled.main`
  display: flex;
  flex-direction: column;
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 700px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360px;
  }
`;
