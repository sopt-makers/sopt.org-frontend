import { AboutInfoType } from '@src/lib/types/about';
import SectionTop from '../../common/SectionTop';
import RecordList from '../List';
import * as St from './style';

type RecordSectionProps = Pick<AboutInfoType, 'generation' | 'records'>;

const RecordSection = (props: RecordSectionProps) => {
  return (
    <St.Wrapper>
      <SectionTop engTitle="Activity Records" korTitle={`${props.generation}기 활동 레코드`} />
      <RecordList records={props.records} />
    </St.Wrapper>
  );
};

export default RecordSection;
