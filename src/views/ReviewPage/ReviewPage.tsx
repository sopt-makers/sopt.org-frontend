import styled from '@emotion/styled';
import { useState } from 'react';
import { Footer, Header, Layout, ScrollToTopButton } from '@src/components';
import Description from './components/Description';
import Reviews from './components/Reviews';
import TabBar from './components/TabBar';
import { TAB } from './types';

function ReviewPage() {
  const [selectedTab, setSelectedTab] = useState(TAB.ALL);
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
  margin: 0 auto;
  margin-top: 90px;

  /* 태블릿 뷰 */
  @media (max-width: 1919px) and (min-width: 766px) {
    width: 100%;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360px;
  }
`;
