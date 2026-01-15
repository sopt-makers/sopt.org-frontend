import RecordItem from '../Item';
import * as St from './style';

const RecordList = ({
  activitiesRecords: { activitiesMemberCount, projectCounts, studyCounts },
  mainColor,
}: {
  activitiesRecords: {
    activitiesMemberCount: number;
    projectCounts: number;
    studyCounts: number;
  };
  mainColor: string;
}) => {
  return (
    <St.Wrapper>
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
        href="/project"
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
