import { GetHomepageResponse } from '@src/lib/types/admin';
import CoreValueSection from '@src/views/MainPage/components/IntroSection/CoreValueSection';
import ProjectSection from '@src/views/MainPage/components/IntroSection/ProjectSection';
import * as S from './style';

export default function IntroSection({ adminData }: { adminData: GetHomepageResponse }) {
  return (
    <S.IntroSection>
      <ProjectSection mainColor={'#' + adminData.brandingColor.main} />
      <CoreValueSection adminData={adminData} />
    </S.IntroSection>
  );
}
