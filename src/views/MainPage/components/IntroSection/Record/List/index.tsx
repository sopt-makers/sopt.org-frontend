import RecordItem from '../Item';
import { PATHS } from '@src/lib/constants/routes';
import * as St from './style';

// TODO: API에 operationPeriod 필드 추가되면 activitiesRecords에서 받아올 것
const OPERATION_PERIOD = 36;

const RecordList = ({
  activitiesRecords: { activitiesMemberCount, projectCounts, studyCounts },
  mainColor,
}: {
  activitiesRecords: {
    activitiesMemberCount: number;
    projectCounts: number;
    studyCounts: number;
    // operationPeriod: number;
  };
  mainColor: string;
}) => {
  return (
    <St.Wrapper>
      <RecordItem
        type="block"
        title="운영기간"
        countNumber={OPERATION_PERIOD}
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
