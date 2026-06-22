import { GetHomepageResponse } from '@src/lib/types/admin';
import CoreValueSection from '@src/views/MainPage/components/IntroSection/CoreValueSection';
import ProjectSection from '@src/views/MainPage/components/IntroSection/ProjectSection';
import RecordSection from '@src/views/MainPage/components/IntroSection/Record/Section';
import * as S from './style';

export default function IntroSection({ adminData }: { adminData: GetHomepageResponse }) {
  return (
    <S.IntroSection>
      <RecordSection
        mainColor={'#' + adminData.brandingColor.main}
        generation={adminData.generation}
        activitiesRecords={
          adminData.activitiesRecords ?? {
            activitiesMemberCount: 0,
            projectCounts: 0,
            studyCounts: 0,
          }
        }
      />
      <ProjectSection mainColor={'#' + adminData.brandingColor.main} />
      <CoreValueSection adminData={adminData} />
    </S.IntroSection>
  );
}
