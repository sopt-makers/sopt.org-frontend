import PageLayout from '@src/components/common/PageLayout';
import IntroSection from '@src/views/MainPage/components/IntroSection';
import Banner from './components/Banner';
import Introduce from './components/Introduce';

function MainPage() {
  return (
    <PageLayout>
      <Banner />
      <Introduce />
      <IntroSection />
    </PageLayout>
  );
}

export default MainPage;
