import { useQuery } from '@tanstack/react-query';
import PageLayout from '@src/components/common/PageLayout';
import { remoteAdminAPI } from '@src/lib/api/remote/admin';
import { GetHomepageResponse } from '@src/lib/types/admin';
import BottomLayout from '@src/views/MainPage/components/BottomLayout';
import IntroSection from '@src/views/MainPage/components/IntroSection';
import TopBanner from '@src/views/MainPage/components/TopBanner';
import usePostVisitor from '@src/views/MainPage/hooks/usePostVisitor';
import { checkIsTimeInRange } from '../../lib/utils/date';
import Banner from './components/Banner';
import Introduce from './components/Introduce';
import ScrollInteractiveLogo from './components/ScrollInteractiveLogo';

function MainPage() {
  const isValid = checkIsTimeInRange('2024-09-08 10:00:00', '2024-09-13 18:00:00'); // 모집 여부

  // const postVisiter = usePostVisitor();

  // useEffect(() => {
  //   postVisiter();
  // }, [postVisiter]);

  const { data: adminData } = useQuery<GetHomepageResponse>({
    queryKey: ['homepage'],
    queryFn: remoteAdminAPI.getHomepage,
  });
  console.log('>>>', adminData);

  return (
    <PageLayout>
      {isValid && <TopBanner />}
      <Banner
        mainColor={'#' + adminData?.brandingColor.main ?? ''}
        highColor={'#' + adminData?.brandingColor.high ?? ''}
      />
      <Introduce />
      <IntroSection />
      <ScrollInteractiveLogo />
      {adminData && (
        <BottomLayout
          partIntroduction={adminData.partIntroduction}
          latestNews={adminData.latestNews}
        />
      )}
    </PageLayout>
  );
}

export default MainPage;
