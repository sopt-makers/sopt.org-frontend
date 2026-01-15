import { GetAboutpageResponse } from '@src/lib/types/admin';
import Button from '@src/views/MainPage/components/@common/Button';
import SectionTop from '../../../../AboutPage/components/@common/SectionTop';
import RecordList from '../List';
import * as S from './style';

type RecordSectionProps = Pick<GetAboutpageResponse, 'generation' | 'activitiesRecords'> & {
  mainColor: string;
};

const RecordSection = ({ generation, activitiesRecords, mainColor }: RecordSectionProps) => {
  return (
    <S.Wrapper>
      <SectionTop korTitle={`${generation - 1}기 활동 레코드`} />
      <RecordList activitiesRecords={activitiesRecords} mainColor={mainColor} />
      <Button>
        이번 기수가 궁금하다면 <S.RightArrowIcon />
      </Button>
    </S.Wrapper>
  );
};

export default RecordSection;
