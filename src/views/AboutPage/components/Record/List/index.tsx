import Flex from '@src/components/common/Flex';
import { AboutInfoType } from '@src/lib/types/about';
import RecordItem from '../Item';

type RecordListProps = Pick<AboutInfoType, 'records'>;

const RecordList = (props: RecordListProps) => {
  return (
    <Flex dir="row" gap={{ mobile: 8, tablet: 20, desktop: 30 }}>
      <RecordItem title="활동 멤버" count={`${props.records.memberCount}명`} href="/" />
      <RecordItem
        title="프로젝트"
        count={props.records.projectCount === 0 ? '진행중' : `${props.records.projectCount}개`}
        href="/project"
      />
      <RecordItem title="스터디" count={`${props.records.studyCount}개`} href="/study" />
    </Flex>
  );
};

export default RecordList;
