import RecordItem from '../Item';
import * as St from './style';

const RecordList = ({
  records,
}: {
  records: {
    memberCount: number;
    projectCount: number;
    studyCount: number;
  };
}) => {
  return (
    <St.Wrapper>
      <RecordItem
        type="block"
        title="활동 멤버"
        countNumber={records?.memberCount}
        countString="명"
      />
      <RecordItem
        type="link"
        title="프로젝트"
        countNumber={records?.projectCount !== 0 ? records?.projectCount : undefined}
        countString={records?.projectCount !== 0 ? '개' : '진행중'}
        href="/project"
      />
      <RecordItem type="block" title="스터디" countNumber={records?.studyCount} countString="개" />
    </St.Wrapper>
  );
};

export default RecordList;
