import Flex from '@src/components/common/Flex';
import SectionTitle from '../../common/SectionTitle';

const CirriculumSection = () => {
  return (
    <Flex dir="column" gap={{ mobile: 60, tablet: 48, desktop: 24 }}>
      <SectionTitle>모집 파트 & 커리큘럼</SectionTitle>;
      <Flex dir="column" gap={{ mobile: 48, tablet: 24, desktop: 18 }}>
        <div>탭</div>
        <div>사진</div>
      </Flex>
    </Flex>
  );
};

export default CirriculumSection;
