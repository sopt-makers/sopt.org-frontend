import PageLayout from '@src/components/common/PageLayout';
import BottomLayout from '@src/views/MainPage/components/BottomLayout';
import IntroSection from '@src/views/MainPage/components/IntroSection';
import useCheckTime from '../../hooks/useCheckTime';
import Banner from './components/Banner';
import Introduce from './components/Introduce';
import ScrollInteractiveLogo from './components/ScrollInteractiveLogo';
import TopBanner from './components/TopBanner';
import usePost from './hooks/usePost';

function MainPage() {
  const isValid = useCheckTime(); // 모집 시작 여부
  usePost(); // 방문자 증가

  return (
    <PageLayout>
      {isValid && <TopBanner />}
      <Banner />
      <Introduce />
      <IntroSection />
      <ScrollInteractiveLogo />
      <BottomLayout />
    </PageLayout>
  );
}

export default MainPage;
