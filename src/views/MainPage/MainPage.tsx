import PageLayout from '@src/components/common/PageLayout';
import Banner from './components/Banner';
import Introduce from './components/Introduce';

function MainPage() {
  return (
    <PageLayout>
      <Banner />
      <Introduce />
    </PageLayout>
  );
}

export default MainPage;
