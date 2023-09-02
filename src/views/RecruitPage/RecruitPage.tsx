import styled from '@emotion/styled';
import { Footer, Header, Layout, ScrollToTopButton } from '@src/components';
import { ActivityReview } from './components/ActivityReview/ActivityReview';
import ChapterInfo from './components/ChapterInfo';
import Contact from './components/Contact';
import FaqInfo from './components/FAQ';
import NotificationSection from './components/NotificationSection';
import RecruiteeInfo from './components/RecruteeInfo';
import Schedule from './components/Schedule';

function Recruit() {
  return (
    <Layout>
      <Header />
      <ScrollToTopButton />
      <Root>
        <NotificationSection />
        <ContentWrapper>
          <RecruiteeInfo />
          <ChapterInfo />
          <Schedule />
          <FaqInfo />
          <Contact />
          <ActivityReview />
        </ContentWrapper>
      </Root>
      <Footer />
    </Layout>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    margin-top: 90px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    margin-top: 90px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 180px;

  width: 1200px;
  padding: 100px 0;

  /* 태블릿 뷰 */
  @media (max-width: 1199px) and (min-width: 766px) {
    width: 700px;
    gap: 120px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    width: 360px;
    gap: 80px;
  }
`;

export default Recruit;
