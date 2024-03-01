import PageLayout from '@src/components/common/PageLayout';
import BottomLayout from '@src/views/MainPage/components/BottomLayout';
import IntroSection from '@src/views/MainPage/components/IntroSection';
import Banner from './components/Banner';
import Introduce from './components/Introduce';
import ScrollInteractiveLogo from './components/ScrollInteractiveLogo';
import TopBanner from './components/TopBanner';
import usePost from './hooks/usePost';
import useCheckTime from './hooks/useCheckTime';

function MainPage() {
  const START_DATE = new Date('2024-03-02:01:00');
  const isStarted = useCheckTime(START_DATE); 

  usePost();  // 방문자 증가
  
  return (
    <PageLayout>
      {isStarted && <TopBanner/>}
      <Banner />
      <Introduce />
      <IntroSection />
      <ScrollInteractiveLogo />
      <BottomLayout />
    </PageLayout>
  );
}

export default MainPage;
