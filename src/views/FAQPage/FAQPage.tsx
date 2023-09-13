import styled from '@emotion/styled';
import { Footer, Header, Layout } from '@src/components';
import { Contact, FAQ } from './components';

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

  /* 태블릿 뷰 */
  @media (max-width: 1919px) and (min-width: 766px) {
    width: 766px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360px;
  }
`;
