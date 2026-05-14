import { INTRO_CONTENT_LIST } from '@src/lib/constants/main';
import { GetHomepageResponse } from '@src/lib/types/admin';
import CoreValueCardList from '@src/views/MainPage/components/IntroSection/CoreValueCardList';
import ProjectSection from '@src/views/MainPage/components/IntroSection/ProjectSection';
import RecordSection from '@src/views/MainPage/components/IntroSection/Record/Section';
import PartIntroduction from '@src/views/MainPage/components/PartIntroduction';
import * as S from './style';

export default function IntroCardList({ adminData }: { adminData: GetHomepageResponse }) {
  return (
    <S.IntroSection>
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
      <ProjectSection
        mainColor={'#' + adminData.brandingColor.main}
        highColor={'#' + adminData.brandingColor.high}
      />
      <S.CoreValueSection>
        <CoreValueCardList
          cards={INTRO_CONTENT_LIST}
          highColor={'#' + adminData.brandingColor.high}
        />
      </S.CoreValueSection>
      <PartIntroduction partIntroduction={adminData.partIntroduction} />
    </S.IntroSection>
  );
}
