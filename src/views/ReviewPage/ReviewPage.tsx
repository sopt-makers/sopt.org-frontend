import styled from '@emotion/styled';
import { Footer, Header, Layout, ScrollToTopButton } from '@src/components';
import Content from './components/Content';
import Description from './components/Description';

function ReviewPage() {
  return (
    <Layout>
      <Header />
      <ScrollToTopButton />
      <Root>
        <Description />
        <Content />
      </Root>
      <Footer />
    </Layout>
  );
}

export default ReviewPage;

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
