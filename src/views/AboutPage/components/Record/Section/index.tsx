import Flex from '@src/components/common/Flex';
import { AboutInfoType } from '@src/lib/types/about';
import SectionTitle from '../../common/SectionTitle';
import RecordList from '../List';

type RecordSectionProps = Pick<AboutInfoType, 'generation' | 'records'>;

const RecordSection = (props: RecordSectionProps) => {
  return (
    <Flex dir="column" gap={{ mobile: 24, tablet: 48, desktop: 64 }}>
      <SectionTitle>{props.generation}기 활동 레코드</SectionTitle>
      <RecordList records={props.records} />
    </Flex>
  );
};

export default RecordSection;
