import styled from '@emotion/styled';
import Flex from '@src/components/common/Flex';
import SectionTitle from '../../common/SectionTitle';
import MemberContent from '../Content';

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
      {/* member 2뎁스 탭  개발 이 삭제 필요 */}
      <ScrollGhost id="members" />
      <SectionTitle>{generation}기 활동 멤버들</SectionTitle>
      <MemberContent />
    </Flex>
  );
};

const ScrollGhost = styled.div`
  position: absolute;
  top: -100px;

  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    top: -60px;
  }
`;

export default MemberSection;
