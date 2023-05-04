import { useState } from 'react';
import Flex from '@src/components/common/Flex';
import { ExtraPart } from '@src/lib/types/universal';
import { PartExtraType } from '@src/lib/types/universal';
import TabBar from '../../common/TabBar';
import MemberCard from '../Card';
import * as St from './style';

const MemberContent = () => {
  const [currentPart, setCurrentPart] = useState<ExtraPart>(PartExtraType.ALL);

  return (
    <Flex dir="column" gap={{ mobile: 18, tablet: 24, desktop: 48 }}>
      <TabBar onTabClick={setCurrentPart} selectedTab={currentPart} includesExtra={true} />
      <St.CardContainer>
        {Array.from({ length: 9 }).map((member, i) => (
          <MemberCard
            key={i}
            imgSrc="https://avatars.githubusercontent.com/u/47105088?v=4"
            name="박이정"
            description="안채량박서원최영훈"
            part="Android 파트장"
          />
        ))}
      </St.CardContainer>
    </Flex>
  );
};

export default MemberContent;
