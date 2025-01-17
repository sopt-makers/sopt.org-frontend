import { GetAboutpageResponse } from '@src/lib/types/admin';
import SectionTop from '../../@common/SectionTop';
import RecordList from '../List';
import * as St from './style';

type RecordSectionProps = Pick<GetAboutpageResponse, 'generation' | 'activitiesRecords'>;

const RecordSection = ({ generation, activitiesRecords }: RecordSectionProps) => {
  return (
    <St.Wrapper>
      <SectionTop engTitle="Activity Records" korTitle={`${generation}기 활동 레코드`} />
      <RecordList activitiesRecords={activitiesRecords} />
    </St.Wrapper>
  );
};

export default RecordSection;
