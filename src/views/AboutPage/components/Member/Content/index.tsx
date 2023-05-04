import { useState } from 'react';
import Flex from '@src/components/common/Flex';
import { ExtraPart } from '@src/lib/types/universal';
import { PartExtraType } from '@src/lib/types/universal';
import useFetchMember from '@src/views/AboutPage/hooks/useFetchMemeber';
import TabBar from '../../common/TabBar';
import MemberCard from '../Card';
import * as St from './style';

const MemberContent = () => {
  const [currentPart, setCurrentPart] = useState<ExtraPart>(PartExtraType.ALL);
  const state = useFetchMember(currentPart);

  if (state._TAG !== 'OK') return null;

  return (
    <Flex dir="column" gap={{ mobile: 18, tablet: 24, desktop: 48 }}>
      <TabBar onTabClick={setCurrentPart} selectedTab={currentPart} includesExtra={true} />
      <St.CardContainer>
        {state.data.members.map((member, idx) => (
          <MemberCard
            key={`${member.name}-${idx}`}
            imgSrc={member.src}
            name={member.name}
            description={member.description}
            part={member.part}
          />
        ))}
      </St.CardContainer>
    </Flex>
  );
};

export default MemberContent;
