import { GetAboutpageResponse } from '@src/lib/types/admin';
import SectionTop from '../../../../AboutPage/components/@common/SectionTop';
import RecordList from '../List';
import * as St from './style';

type RecordSectionProps = Pick<GetAboutpageResponse, 'generation' | 'activitiesRecords'> & {
  mainColor: string;
};

const RecordSection = ({ generation, activitiesRecords, mainColor }: RecordSectionProps) => {
  return (
    <St.Wrapper>
      <SectionTop engTitle="Activity Records" korTitle={`${generation - 1}기 활동 레코드`} />
      <RecordList activitiesRecords={activitiesRecords} mainColor={mainColor} />
    </St.Wrapper>
  );
};

export default RecordSection;
