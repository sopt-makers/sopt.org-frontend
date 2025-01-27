import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
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
  const { data: adminData } = useQuery<GetHomepageResponse>({
    queryKey: ['homepage'],
    queryFn: remoteAdminAPI.getHomepage,
  });

  const isOBRecruiting = checkIsTimeInRange(
    adminData?.recruitSchedule[0].schedule.applicationStartTime ?? '',
    adminData?.recruitSchedule[0].schedule.applicationEndTime ?? '',
  );
  const isYBRecruiting = checkIsTimeInRange(
    adminData?.recruitSchedule[1].schedule.applicationStartTime ?? '',
    adminData?.recruitSchedule[1].schedule.applicationEndTime ?? '',
  );
  const isRecruiting = isOBRecruiting || isYBRecruiting;

  const postVisiter = usePostVisitor();

  useEffect(() => {
    if (!isRecruiting) return;
    postVisiter();
  }, [isRecruiting, postVisiter]);

  return (
    <PageLayout>
      {isRecruiting && <TopBanner />}
      <Banner
        mainColor={'#' + adminData?.brandingColor.main ?? ''}
        highColor={'#' + adminData?.brandingColor.high ?? ''}
        isRecruiting={isRecruiting}
      />
      <Introduce />
      <IntroSection />
      <ScrollInteractiveLogo />
      {adminData && (
        <BottomLayout
          partIntroduction={adminData.partIntroduction}
          latestNews={adminData.latestNews}
          mainColor={'#' + adminData?.brandingColor.main ?? ''}
          highColor={'#' + adminData?.brandingColor.high ?? ''}
          isRecruiting={isRecruiting}
        />
      )}
    </PageLayout>
  );
}

export default MainPage;
