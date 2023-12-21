import PageLayout from '@src/components/common/PageLayout';
import BottomLayout from '@src/views/MainPage/components/BottomLayout';
import IntroSection from '@src/views/MainPage/components/IntroSection';
import Banner from './components/Banner';
import Introduce from './components/Introduce';
import ScrollInteractiveLogo from './components/ScrollInteractiveLogo';

function MainPage() {
  return (
    <PageLayout>
      <Banner />
      <Introduce />
      <IntroSection />
      <ScrollInteractiveLogo />
      <BottomLayout />
    </PageLayout>
  );
}

export default MainPage;
