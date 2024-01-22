import Flex from '@src/components/common/Flex';
import { Part } from '@src/lib/types/universal';
import SectionTop from '@src/views/AboutPage/components/common/SectionTop';
import CirriculumContent from '../Content';

type CirriculumSectionProps = {
  cirriculums: Record<Part, string>;
};

const CirriculumSection = ({ cirriculums }: CirriculumSectionProps) => {
  return (
    <Flex dir="column" gap={{ mobile: 24, tablet: 48, desktop: 60 }}>
      <SectionTop engTitle="Curriculum" korTitle="파트별 커리큘럼" />
      <CirriculumContent cirriculums={cirriculums} />
    </Flex>
  );
};

export default CirriculumSection;
