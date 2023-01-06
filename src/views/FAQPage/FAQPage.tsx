import styled from '@emotion/styled';
import { Footer, Header, Layout } from '@src/components';
import Contact from './components/contact';
import FAQ from './components/faq';

function FAQPage() {
  return (
    <Layout>
      <Header />
      <Root>
        <Contact />
        <FAQ />
      </Root>
      <Footer />
    </Layout>
  );
}

export default FAQPage;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;
`;
