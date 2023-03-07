import styled from '@emotion/styled';
import { Footer, Header, Layout } from '@src/components';

function ReviewPage() {
  return (
    <Layout>
      <Header />
      <Root>hello</Root>
      <Footer />
    </Layout>
  );
}

export default ReviewPage;

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
