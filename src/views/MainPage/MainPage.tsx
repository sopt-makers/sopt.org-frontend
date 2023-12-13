import PageLayout from '@src/components/common/PageLayout';
import IntroSection from '@src/views/MainPage/components/IntroSection';
import PartConfig from '@src/views/MainPage/components/PartConfig';
import Activity from './components/Activity';
import Banner from './components/Banner';
import Introduce from './components/Introduce';
import OwnOrganization from './components/OwnOrganization';
import RecruitMessage from './components/RecruitMessage';
import ScrollInteractiveLogo from './components/ScrollInteractiveLogo';

function MainPage() {
  return (
    <PageLayout>
      <Banner />
      <Introduce />
      <IntroSection />
      <ScrollInteractiveLogo />
      <Activity />
      <PartConfig />
      <OwnOrganization />
      <RecruitMessage />
    </PageLayout>
  );
}

export default MainPage;
