import styled from '@emotion/styled';
import { useState } from 'react';
import { Footer, Header, Layout, ScrollToTopButton } from '@src/components';
import { ExtraPart, PartExtraType } from '@src/lib/types/universal';
import Description from './components/Description';
import Reviews from './components/Reviews';
import TabBar from './components/TabBar';

function ReviewPage() {
  const [selectedTab, setSelectedTab] = useState<ExtraPart>(PartExtraType.ALL);

  return (
    <Layout>
      <Header />
      <ScrollToTopButton />
      <Root>
        <Description />
        <TabBar onTabClick={setSelectedTab} selectedTab={selectedTab} />
        <Reviews selectedTab={selectedTab} />
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
