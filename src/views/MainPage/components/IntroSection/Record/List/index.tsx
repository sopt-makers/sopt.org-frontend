import { GetAboutpageResponse } from '@src/lib/types/admin';
import { PATHS } from '@src/lib/constants/routes';
import RecordItem from '../Item';
import * as St from './style';

interface Props {
  activitiesRecords: GetAboutpageResponse['activitiesRecords'];
  mainColor: string;
}

const RecordList = ({
  activitiesRecords: { activitiesMemberCount, projectCounts, studyCounts, operationPeriod },
  mainColor,
}: Props) => {
  return (
    <St.Wrapper>
      <RecordItem
        type="block"
        title="운영기간"
        countNumber={operationPeriod}
        countString="년"
        mainColor={mainColor}
      />
      <RecordItem
        type="block"
        title="활동 멤버"
        countNumber={activitiesMemberCount}
        countString="명"
        mainColor={mainColor}
      />
      <RecordItem
        type="link"
        title="프로젝트"
        countNumber={projectCounts !== 0 ? projectCounts : undefined}
        countString={projectCounts !== 0 ? '개' : '진행중'}
        href={PATHS.PROJECT}
        mainColor={mainColor}
      />
      <RecordItem
        type="block"
        title="스터디"
        countNumber={studyCounts}
        countString="개"
        mainColor={mainColor}
      />
    </St.Wrapper>
  );
};

export default RecordList;
