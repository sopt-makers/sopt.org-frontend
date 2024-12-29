import { useQuery } from '@tanstack/react-query';
import PageLayout from '@src/components/common/PageLayout';
import { mockAdminAPI } from '@src/lib/api/mock/admin';
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

  const { data } = useQuery<GetHomepageResponse>({
    queryKey: ['homepage'],
    queryFn: mockAdminAPI.getHomepage,
  });

  return (
    <PageLayout>
      {isValid && <TopBanner />}
      <Banner />
      <Introduce />
      <IntroSection />
      <ScrollInteractiveLogo />
      {data && (
        <BottomLayout partIntroduction={data.partIntroduction} latestNews={data.latestNews} />
      )}
    </PageLayout>
  );
}

export default MainPage;
