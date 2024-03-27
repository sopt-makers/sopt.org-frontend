import styled from '@emotion/styled';
import PageLayout from '@src/components/common/PageLayout';
import { Contact, FAQ } from './components';

function FAQPage() {
  return (
    <PageLayout>
      <Root>
        <Contact />
        <FAQ />
      </Root>
    </PageLayout>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200rem;
  margin: 0 auto;

  /* 태블릿 뷰 */
  @media (max-width: 1919px) and (min-width: 766px) {
    width: 766rem;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360rem;
  }
`;

export default FAQPage;
