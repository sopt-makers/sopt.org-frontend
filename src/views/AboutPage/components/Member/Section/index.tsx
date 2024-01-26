import Flex from '@src/components/common/Flex';
import SectionTop from '../../common/SectionTop';
import MemberContent from '../Content';
import * as St from './style';

type MemberSectionProps = {
  generation: number;
};

const MemberSection = ({ generation }: MemberSectionProps) => {
  return (
    <Flex
      dir="column"
      gap={{ mobile: 24, tablet: 48, desktop: 60 }}
      style={{ position: 'relative' }}
    >
      <St.MarginTop />
      <SectionTop
        engTitle="Executives"
        korTitle={`${generation}기 임원진`}
        description="200명의 활동 회원들이 열정을 외칠 수 있도록, 33기 DO SOPT를 이끄는 임원진들이에요."
      />
      {/* TODO : 서버에서 description을 받아오도록 수정 */}
      <MemberContent />
    </Flex>
  );
};

export default MemberSection;
