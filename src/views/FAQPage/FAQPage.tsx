import { Footer, Header, Layout } from '@src/components';
import Contact from './components/contact';
import FAQ from './components/faq';

function FAQPage() {
  return (
    <Layout>
      <Header />
        <Contact />
        <FAQ />
      <Footer />
    </Layout>
  );
}

export default FAQPage;
