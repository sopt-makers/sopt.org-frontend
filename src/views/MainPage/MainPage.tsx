import DummyDiv from '@src/components/common/DummyDiv';
import PageLayout from '@src/components/common/PageLayout';
import IntroSection from '@src/views/MainPage/components/IntroSection';
import Banner from './components/Banner';
import Introduce from './components/Introduce';
import OwnOrganization from './components/OwnOrganization';
import ScrollInteractiveLogo from './components/ScrollInteractiveLogo';

function MainPage() {
  return (
    <PageLayout>
      <Banner />
      <Introduce />
      <IntroSection />
      <ScrollInteractiveLogo />
      <DummyDiv height="400vh" backgroundColor="white" />
      <OwnOrganization />
    </PageLayout>
  );
}

export default MainPage;
