import DummyDiv from '@src/components/common/DummyDiv';
import PageLayout from '@src/components/common/PageLayout';
import Banner from './components/Banner';
import Introduce from './components/Introduce';
import ScrollInteractiveLogo from './components/ScrollInteractiveLogo';

function MainPage() {
  return (
    <PageLayout>
      <Banner />
      <Introduce />
      <ScrollInteractiveLogo />
      <DummyDiv height="400vh" backgroundColor="white" />
    </PageLayout>
  );
}

export default MainPage;
