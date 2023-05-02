import Flex from '@src/components/common/Flex';
import { Part } from '@src/lib/types/universal';
import SectionTitle from '../../common/SectionTitle';
import CirriculumContent from '../Content';

type CirriculumSectionProps = {
  cirriculums: Record<Part, string>;
};

const CirriculumSection = ({ cirriculums }: CirriculumSectionProps) => {
  return (
    <Flex dir="column" gap={{ mobile: 24, tablet: 48, desktop: 60 }}>
      <SectionTitle>모집 파트 & 커리큘럼</SectionTitle>
      <CirriculumContent cirriculums={cirriculums} />
    </Flex>
  );
};

export default CirriculumSection;
