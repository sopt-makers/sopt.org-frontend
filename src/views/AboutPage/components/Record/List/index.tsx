import { AboutInfoType } from '@src/lib/types/about';
import RecordItem from '../Item';
import * as St from './style';

type RecordListProps = Pick<AboutInfoType, 'records'>;

const RecordList = (props: RecordListProps) => {
  return (
    <St.Wrapper>
      <RecordItem
        type="block"
        title="활동 멤버"
        countNumber={props.records.memberCount}
        countString="명"
      />
      <RecordItem
        type="link"
        title="프로젝트"
        countNumber={props.records.projectCount !== 0 ? props.records.projectCount : undefined}
        countString={props.records.projectCount !== 0 ? '개' : '진행중'}
        href="/project"
      />
      <RecordItem
        type="link"
        title="스터디"
        countNumber={props.records.studyCount}
        countString="개"
        href="/study"
      />
    </St.Wrapper>
  );
};

export default RecordList;
