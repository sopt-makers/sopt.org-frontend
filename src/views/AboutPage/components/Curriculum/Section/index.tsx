import { PartCurriculumType } from '@src/lib/types/admin';
import SectionTop from '@src/views/AboutPage/components/@common/SectionTop';
import CurriculumContent from '../Content';
import * as S from './style';

type CurriculumSectionProps = {
  curriculums: PartCurriculumType[];
};

const CurriculumSection = ({ curriculums }: CurriculumSectionProps) => {
  return (
    <S.CurriculumSection>
      <SectionTop engTitle="Curriculum" korTitle="파트별 커리큘럼" />
      <CurriculumContent curriculums={curriculums} />
    </S.CurriculumSection>
  );
};

export default CurriculumSection;
