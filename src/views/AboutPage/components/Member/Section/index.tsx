import Flex from '@src/components/common/Flex';
import { MemberType } from '@src/lib/types/admin';
import MemberCard from '@src/views/AboutPage/components/Member/Card';
import SectionTop from '../../@common/SectionTop';
import * as St from './style';

type MemberSectionProps = {
  generation: number;
  members: MemberType[];
  name: string;
};

const MemberSection = ({ generation, members, name: soptName }: MemberSectionProps) => {
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
        description={`200명의 활동 회원들이 열정을 외칠 수 있도록, ${generation}기 ${soptName}를 이끄는 임원진들이에요.`}
      />
      <Flex
        dir="column"
        gap={{ mobile: 18, tablet: 24, desktop: 48 }}
        style={{ alignItems: 'center' }}
      >
        <St.CardContainer>
          {members.map(({ name, role, introduction, affiliation, profileImage, sns }) => (
            <MemberCard
              key={name}
              name={name}
              role={role}
              introduction={introduction}
              affiliation={affiliation}
              profileImage={profileImage}
              sns={sns}
            />
          ))}
        </St.CardContainer>
      </Flex>
    </Flex>
  );
};

export default MemberSection;
