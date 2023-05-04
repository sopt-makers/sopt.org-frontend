import Flex from '@src/components/common/Flex';
import SectionTitle from '../../common/SectionTitle';
import MemberContent from '../Content';

type MemberSectionProps = {
  generation: number;
};

const MemberSection = ({ generation }: MemberSectionProps) => {
  return (
    <Flex dir="column" gap={{ mobile: 24, tablet: 48, desktop: 60 }}>
      <SectionTitle>{generation}기 활동 멤버들</SectionTitle>
      <MemberContent />
    </Flex>
  );
};

export default MemberSection;
