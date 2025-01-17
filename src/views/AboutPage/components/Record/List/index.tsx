import { GetAboutpageResponse } from '@src/lib/types/admin';
import RecordItem from '../Item';
import * as St from './style';

const RecordList = ({ activitiesRecords }: Pick<GetAboutpageResponse, 'activitiesRecords'>) => {
  return (
    <St.Wrapper>
      <RecordItem
        type="block"
        title="활동 멤버"
        countNumber={activitiesRecords.activitiesMemberCount ?? 0}
        countString="명"
      />
      <RecordItem
        type="link"
        title="프로젝트"
        countNumber={
          activitiesRecords.projectCounts !== 0 ? activitiesRecords.projectCounts : undefined
        }
        countString={activitiesRecords?.projectCounts !== 0 ? '개' : '진행중'}
        href="/project"
      />
      <RecordItem
        type="block"
        title="스터디"
        countNumber={activitiesRecords?.studyCounts}
        countString="개"
      />
    </St.Wrapper>
  );
};

export default RecordList;
