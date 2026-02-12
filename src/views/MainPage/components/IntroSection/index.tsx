import { INTRO_CONTENT_LIST } from '@src/lib/constants/main';
import CoreValueCardList from '@src/views/MainPage/components/IntroSection/CoreValueCardList';
import * as S from './style';
import { GetHomepageResponse } from '@src/lib/types/admin';
import RecordSection from '@src/views/MainPage/components/IntroSection/Record/Section';
import ProjectSection from '@src/views/MainPage/components/IntroSection/ProjectSection';

export default function IntroCardList({ adminData }: { adminData: GetHomepageResponse }) {
  return (
    <S.IntroSection >
      <RecordSection
        mainColor={'#' + adminData.brandingColor.main}
        highColor={'#' + adminData.brandingColor.high}
        generation={adminData.generation}
        activitiesRecords={
          adminData.activitiesRecords ?? {
            activitiesMemberCount: 0,
            projectCounts: 0,
            studyCounts: 0,
          }
        }
      />
      <ProjectSection mainColor={'#' + adminData.brandingColor.main} highColor={'#' + adminData.brandingColor.high} />
      <S.CoreValueSection>
        <CoreValueCardList cards={INTRO_CONTENT_LIST} />
      </S.CoreValueSection>
    </S.IntroSection>
  );
}
