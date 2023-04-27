import styled from '@emotion/styled';
import { Footer, Header, Layout } from '@src/components';
import Banner from './components/Banner';

const AboutPage = () => {
  return (
    <Layout>
      <Header />
      <Root>
        <Banner />
      </Root>
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
